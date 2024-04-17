import React, { Component } from 'react'

export default class PLV_eventform3 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Phan Lạc Việt",
            job:"stduent"
        }
    }
handlchagename=(ev)=>{
    this.setState({
        name:"Nguyễn Văn A"
    })
}
handlchagejob=()=>{
    this.setState({
        job:"CNTT"
    })
}
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay đổi dữ liệu trong state</h2>
        <p>Dữ liệu{this.state.name}-{this.state.job}</p>
        <button onClick={this.handlchagename}>Thay đổi tên</button>
        <button onClick={this.handlchagejob}>Thay đổi job</button>
      </div>
    )
  }
}
