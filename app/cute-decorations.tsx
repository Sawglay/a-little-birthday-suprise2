export default function CuteDecorations(){
 return <div className="cute-decorations" aria-hidden="true">
   {Array.from({length:9},(_,i)=><span className="floating-heart" key={i} style={{left:`${7+i*11}%`,animationDelay:`${-i*1.7}s`,animationDuration:`${13+i%3*2}s`}}>{i%3===0?'♡':'♥'}</span>)}
   <span className="cute-butterfly butterfly-left"><i/><i/><b/></span>
   <span className="cute-butterfly butterfly-right"><i/><i/><b/></span>
   <div className="cute-gift gift-left"><div className="gift-bow">୨୧</div><div className="gift-lid"/><div className="gift-box"><span>♡</span></div></div>
   <div className="cute-gift gift-right"><div className="gift-bow">୨୧</div><div className="gift-lid"/><div className="gift-box"><span>✧</span></div></div>
   <span className="little-flower flower-left">✿</span><span className="little-flower flower-right">✿</span>
   <span className="twinkle twinkle-one">✧</span><span className="twinkle twinkle-two">✦</span>
 </div>
}
