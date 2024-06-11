import React from 'react'

export default function PlvListTask({ renderPlvListTasks, onPlvTaskdelete,onPlvTaskEdit }) {
    console.log(renderPlvListTasks);
    //hàm xử lí khi sửa
    const plvhandleEdit = (param) => {
        console.log("click edit:", param);
        onPlvTaskEdit(param)
    }
    const plvhandleDelete = (param)=>{
        if(window.confirm('bạn có chắc chắn muốn xóa không')){
            onPlvTaskdelete(param);
        }
    }
    let PlvelementTask = renderPlvListTasks.map((task, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.plv_taskId}</td>
                    <td>{task.plv_taskName}</td>
                    <td>{task.plv_level}</td>
                    <td>
                        <button className='btn btn-success'
                            onClick={() => plvhandleEdit(task)}
                        >Sửa</button>
                        <button className='btn btn-danger'
                                onClick={()=>plvhandleDelete(task)}
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
                        <th>STT</th>
                        <th>Task ID</th>
                        <th>Task name</th>
                        <th>Task level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {PlvelementTask}
                </tbody>
            </table>
        </div>
    )
}
