import React from 'react'

export default function PlvStudentList({onPlvStudentdelete,onStudentEdit,renderPlvstudentlist}) {
    const plvhandleEdit = (param) => {
        console.log("click edit:", param);
        onStudentEdit(param)
    }
    const plvhandleDelete = (param)=>{
        if(window.confirm('bạn có chắc chắn muốn xóa không')){
            onPlvStudentdelete(param);
        }
    }
    let Plvelementstudent = renderPlvstudentlist.map((student, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.plv_Id}</td>
                    <td>{student.plv_Name}</td>
                    <td>{student.plv_Age}</td>
                    <td>{student.plv_Phone}</td>
                    <td>{student.plv_Status}</td>
                    <td>
                        <button className='btn btn-success'
                            onClick={() => plvhandleEdit(student)}
                        >Sửa</button>
                        <button className='btn btn-danger'
                                onClick={()=>plvhandleDelete(student)}
                        >Xóa</button>
                    </td>
                </tr>
            </>
        )
    })
    return (
      <div>
        <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Id</th>
                        <th>name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Plvelementstudent}
                </tbody>
            </table>
      </div>
    )
}
