import React, { Component } from 'react'
import PLV_eventform1 from './component/PLV_eventform1'
import PLV_eventform2 from './component/PLV_eventform2'
import PLV_eventform3 from './component/PLV_eventform3'
import PLV_eventform4 from './component/PLV_eventform4'

export default class 
 extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event form Demo</h1>
        <PLV_eventform1/>
        <PLV_eventform2/>
        <PLV_eventform3/>
        <PLV_eventform4 name="Phan Lạc Việt" />
      </div>
    )
  }
}
