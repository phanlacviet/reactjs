import React, { Component } from 'react'

export default class Phanlacviet_class extends Component {
  constructor(props){
    super(props);
    this.state={
      fullname:"phan lac viet",
      class:"K22-CNT2"
    }
  }
    users = {
        name:"phan lac viet",
        age:"20"
    }
    handlename = (event)=>{
      this.setState({
        fullname:"Nguyen Van A"
      })
    }
  render() {
    return (
      <div>
        <h2>Class components demo</h2>
        {this.users.name} - {this.users.age}
        <hr></hr>
        <h3>thongtin: {this.props.thongtin}</h3>
        <h3>thoigian: {this.props.thoigian}</h3>
        <hr></hr>
        <h3>State:
          fullname:{this.state.fullname}
          class:{this.state.fullname}
        </h3>
        <button onClick={this.handlename}>Change Name</button>
      </div>
    )
  }
}
