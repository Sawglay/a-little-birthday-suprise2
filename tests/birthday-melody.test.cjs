const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const source = ts.transpileModule(fs.readFileSync('app/birthday-melody.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const exportsObject = {};
vm.runInNewContext(source,{exports:exportsObject});
const {BirthdayMelody,verse} = exportsObject;
function fake(state='running') {
 const ctx={state,currentTime:0,destination:{},notes:[],closeCalls:0,resumeCalls:0,
  async close(){this.closeCalls++;this.state='closed'},async resume(){this.resumeCalls++;this.state='running'},
  createOscillator(){const node={frequency:{value:0},connect(){},start(t){this.startAt=t},stop(t){this.stopAt=t}};this.notes.push(node);return node},
  createGain(){return {connect(){},gain:{setValueAtTime(){},linearRampToValueAtTime(){},exponentialRampToValueAtTime(){}}}}
 };return ctx;
}
test('plays exactly one complete verse and ends, without a second play',async()=>{
 const ctx=fake();const states=[];let creates=0;
 const song=new BirthdayMelody(()=>{creates++;return ctx},s=>states.push(s));
 await song.play();assert.equal(ctx.notes.length,25);assert.equal(states[0],'playing');
 assert.ok(ctx.notes.every(n=>n.stopAt>n.startAt));assert.equal(ctx.notes[0].frequency.value,440*2**(-2/12));
 ctx.notes.at(-1).onended();assert.equal(states.at(-1),'finished');assert.equal(ctx.state,'closed');
 await song.play(true);assert.equal(creates,1);assert.equal(ctx.notes.length,verse.length);
});
test('blocked autoplay waits for explicit play, then runs once',async()=>{
 const contexts=[];const states=[];
 const song=new BirthdayMelody(()=>{const ctx=fake('suspended');contexts.push(ctx);return ctx},s=>states.push(s));
 await song.play();assert.equal(contexts[0].resumeCalls,0);assert.equal(contexts[0].notes.length,0);assert.equal(states.at(-1),'ready');
 await song.play(true);assert.equal(contexts[1].resumeCalls,1);assert.equal(contexts[1].notes.length,25);
});
test('stopping on navigation prevents replay; reload uses a fresh player',async()=>{
 const ctx=fake();const song=new BirthdayMelody(()=>ctx,()=>{});await song.play();song.stop();await song.play(true);
 assert.equal(ctx.state,'closed');assert.equal(ctx.notes.length,25);
 const fresh=fake();await new BirthdayMelody(()=>fresh,()=>{}).play();assert.equal(fresh.notes.length,25);
});
test('duplicate taps while resuming cannot schedule two verses',async()=>{
 const ctx=fake('suspended');let resume;ctx.resume=()=>new Promise(resolve=>{resume=()=>{ctx.state='running';resolve()}});
 const song=new BirthdayMelody(()=>ctx,()=>{});const first=song.play(true);await song.play(true);resume();await first;assert.equal(ctx.notes.length,25);
});
test('dispose during pending resume prevents late playback',async()=>{
 const ctx=fake('suspended');let resume;ctx.resume=()=>new Promise(resolve=>{resume=()=>{ctx.state='running';resolve()}});
 const song=new BirthdayMelody(()=>ctx,()=>{});const first=song.play(true);song.dispose();resume();await first;assert.equal(ctx.notes.length,0);
});
test('unsupported audio fails gracefully',async()=>{
 const states=[];await new BirthdayMelody(()=>{throw Error('unsupported')},s=>states.push(s)).play();assert.equal(states.at(-1),'unavailable');
});
test('leaving the page during pending resume cancels audio permanently for this visit',async()=>{
 const ctx=fake('suspended');let resume;ctx.resume=()=>new Promise(resolve=>{resume=()=>{ctx.state='running';resolve()}});
 const song=new BirthdayMelody(()=>ctx,()=>{});const first=song.play(true);song.stop();resume();await first;await song.play(true);assert.equal(ctx.notes.length,0);
});
