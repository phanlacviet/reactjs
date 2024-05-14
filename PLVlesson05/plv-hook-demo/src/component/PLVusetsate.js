import React, { useState } from 'react'

export default function PLVusetsate() {
  const [count,setcount]=useState(0);
  const [list,setlist]=useState([3,2]);
  const plvhandlelist=()=>{
    let num =parseInt(Math.random()*100);
    setlist([
      ...list,
      num
    ])
  }
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={()=>setcount(count+1)}>Click me</button>
      <hr/>
      <h3>List: {list.toString()}</h3>
      <button onClick={plvhandlelist}>Thêm ngẫu nhiên</button>
    </div>
  )
}
