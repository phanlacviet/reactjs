import React, { Component } from 'react'

export default class 
 extends Component {
 Eventhandle1click=()=>{
    alert("event handle 1");
}
Eventhandle2click(){
    alert("event click 2");
}
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Event handle</h2>
        <button onClick={this.Eventhandle1click()}>Click1</button>
        <button onClick={this.Eventhandle2click}>Click2</button>
      </div>
    )
  }
}
