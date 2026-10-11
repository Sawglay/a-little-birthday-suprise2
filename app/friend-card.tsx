'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, Check, Heart } from 'lucide-react';
import { type Friend } from './birthday-data';

export default function FriendCard({friend,index,opened,onOpen}:{friend:Friend;index:number;opened:boolean;onOpen:()=>void}) {
 const [failed,setFailed]=useState(false);
 useEffect(()=>setFailed(false),[friend.imageSrc]);
 return <button className={`friend-card friend-circle ${friend.color}`} style={{animationDelay:`${index*.08}s`}} onClick={onOpen} aria-label={`Open ${friend.name}'s birthday letter${opened?', already opened':''}`}>
   <span className="circle-sparkle" aria-hidden="true">✧</span>
   <span className="friend-avatar">
    {friend.imageSrc&&!failed?<img src={friend.imageSrc} alt="" loading="lazy" width="160" height="160" style={{objectFit:friend.imageFit,objectPosition:friend.imagePosition}} onError={()=>setFailed(true)}/>:<span className="friend-initials">{friend.name.trim().split(/\s+/).map(n=>n[0]).slice(0,2).join('')||'♡'}</span>}
    <span className="avatar-seal" aria-hidden="true">{opened?<Check size={13}/>:<Heart size={12} fill="currentColor"/>}</span>
   </span>
   <span className="friend-name">{friend.name}</span>
   <span className="open-letter">{opened?'Read again':'A letter for you'}<ArrowRight size={13}/></span>
 </button>;
}
