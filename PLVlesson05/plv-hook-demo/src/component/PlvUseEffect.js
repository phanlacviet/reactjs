import React, { useContext, useEffect } from 'react'

export default function PlvUseEffect() {
    const [count,setcount]=useContext(0);
    const plvhandleclick=()=>{
        setcount(prev =>prev + 1);
    }
    useEffect(()=>{
        document.title=`Phan Lạc Việt: You have clicked ${count} times`;
        console.log(`You have clicked ${count} times`);
    })
    useEffect(()=>{
        console.log("Chạy lần đầu tiên - một lần");
    },[]);
    useEffect(()=>{
        console.log(`useeffect count click: `,count);
    },[count])
  return (
    <div>
        <h2>Demo - use effect: You Clicked here {count} times</h2>
        <button onClick={plvhandleclick}>Click here</button>
    </div>
  )
}
