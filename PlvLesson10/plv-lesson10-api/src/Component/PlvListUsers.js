import React from 'react'
import axios from '../Api/PlvApi';
export default function PlvListUsers({renderplvlistuser,onplvdelete}) {
    console.log("PLVlistUser",renderplvlistuser);
    let plvElementUser = renderplvlistuser.map((plvuser,index)=>{
        return(
            <>
            <tr key={index}>
            <td>{plvuser.id}</td>
            <td>{plvuser.UserName}</td>
            <td>{plvuser.Password}</td>
            <td>{plvuser.Email}</td>
            <td>{plvuser.Phone}</td>
            <td>
                <button className='btn btn-danger' onClick={()=>plvhandledelete(plvuser)}>Xóa</button>
            </td>
            </tr>
        </>
        )
    })
    const plvhandledelete= async (param)=>{
        if(window.confirm('bạn có muốn xóa không')){
            const plvres = await axios.delete("PlvUser/"+param.id);
        }
        onplvdelete();
    }
  return (
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                <th>Id</th>
                <th>User Name</th>
                <th>Password</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {plvElementUser}
            </tbody>
        </table>
    </div>
  )
}
