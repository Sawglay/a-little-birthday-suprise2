'use client';
import { useEffect, useRef, useState } from 'react';
import { Music2, VolumeX, Check } from 'lucide-react';
import { BirthdayMelody, type SongStatus } from './birthday-melody';

export default function BirthdaySong({active}:{active:boolean}) {
  const player = useRef<BirthdayMelody | null>(null);
  const [status,setStatus] = useState<SongStatus>('ready');
  useEffect(() => {
    const song = new BirthdayMelody(() => {
      const Constructor = window.AudioContext || (window as typeof window & {webkitAudioContext?:typeof AudioContext}).webkitAudioContext;
      if (!Constructor) throw new Error('Web Audio is unavailable');
      return new Constructor();
    },setStatus);
    player.current = song;
    void song.play();
    return () => { song.dispose(); player.current = null; };
  },[]);
  useEffect(() => {if (!active) player.current?.stop()},[active]);
  // Mobile browsers require a trusted gesture. Start with the first ordinary
  // tap anywhere on the opening, without requiring a separate music-button tap.
  useEffect(() => {
    if (!active || status !== 'ready') return;
    const unlock = (event: Event) => {
      if (!event.isTrusted) return;
      if (event instanceof KeyboardEvent && (event.repeat || !['Enter',' '].includes(event.key))) return;
      void player.current?.play(true);
    };
    document.addEventListener('click', unlock, true);
    document.addEventListener('keydown', unlock, true);
    return () => {
      document.removeEventListener('click', unlock, true);
      document.removeEventListener('keydown', unlock, true);
    };
  },[active,status]);
  return <div className="birthday-song" hidden={!active}>
    {status === 'ready' && <button className="song-button" onClick={() => void player.current?.play(true)}><Music2 size={15}/>Music starts with your first tap<span className="song-note">one little verse ♡</span></button>}
    {status === 'playing' && <button className="song-button" onClick={() => player.current?.stop()} aria-label="Stop birthday song"><span className="music-bars" aria-hidden="true"><i/><i/><i/><i/></span>A birthday melody for you<VolumeX size={14}/></button>}
    {status === 'finished' && <span className="song-ended"><Check size={13}/>One sweet wish, just for you.</span>}
    {status === 'unavailable' && <span className="song-ended">Sound isn’t available in this browser. The surprise still awaits ♡</span>}
    <span className="sr-only" role="status" aria-live="polite">{status === 'playing' ? 'Birthday song is playing once.' : status === 'finished' ? 'Birthday song has ended.' : ''}</span>
  </div>;
}
