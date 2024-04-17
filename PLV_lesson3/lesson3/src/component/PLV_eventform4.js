import React, { Component } from 'react'

export default class PLV_eventform4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Phan Phan"
        }
    }
    handlegetname=()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Lấy dữ từ props</h2>
        <button onClick={this.handlegetname}>Lấy tên</button>
        <h2>Welcome to {this.state.name}</h2>
      </div>
    )
  }
}
