import React, { Component } from 'react'
import PLVproductlist from './component/PLVproductlist';
import PLVaddproduct from './component/PLVaddproduct';

export default class 
 extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        {title: 'Phan Lạc Việt',id: 2210900079,status:1},
        {title: 'Cabbage',id: 1,status:1},
        {title: 'Garlic',id: 2,status:0},
        {title: 'Apple',id: 3,status:0},
        {title: 'Banana',id: 4,status:1},
      ]
    }
  }
  plvhandlesubmit=(param)=>{
    console.log("app",param);
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
          <h1>Phan Lạc Việt - Render Data - Event Form</h1><hr/>
          <PLVproductlist renderproduct={this.state.products}/>
          <PLVaddproduct onsubmit={this.plvhandlesubmit} />
      </div>
    )
  }
}
