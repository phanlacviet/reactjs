import React from 'react'

export default function PlvListUsers({renderplvlistuser}) {
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
            <td>...</td>
            </tr>
        </>
        )
    })
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
