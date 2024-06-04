import React, { Component } from 'react'

export default class PLVproductlist extends Component {
  render() {
    let {renderproduct} = this.props;
    console.log("products",renderproduct);
    let fnstatus = (pram)=>{
      if(pram===1){
        return 'Active';
      }
      return 'Non Active';
    }
    let elementproduct = renderproduct.map((item,index)=>{
        return (
            <>
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{fnstatus(item.status)}</td>
                </tr>
            </>
        )
    })
    return (

      <div>
        <h2>Danh sách hiển thị sản phẩm</h2>
        <table className='table table-bordered'>
            <thead>
            <tr>
                <th>ID</th>
                <th>title</th>
                <th>status</th>
            </tr>
            </thead>
            <tbody>
                {elementproduct}
            </tbody>
        </table>
      </div>
    )
  }
}
