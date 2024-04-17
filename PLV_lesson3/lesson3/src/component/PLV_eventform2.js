import React from 'react'

export default function PLV_eventform2() {
    const Eventhandle1click=(content)=>{
        console.log('==================================');
        console.log(content);
        console.log('==================================');
    }
  return (
    <div className='alert alert-succes'>
        <h2>Event demo-function component</h2>
        {/*<button onClick={Eventhandle1click("Phan Lạc Việt")}>Gọi khi render</button>*/}
        <button onClick={()=>Eventhandle1click("K22CNT-Reactjs")}>Gọi khi click</button>
    </div>
  )
}
