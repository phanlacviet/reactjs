import React from 'react'

export default function PlvListTask({renderPlvListTasks}) {
    console.log(renderPlvListTasks);
    let PlvelementTask = renderPlvListTasks.map((task,index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{task.plv_taskId}</td>
                    <td>{task.plv_taskName}</td>
                    <td>{task.plv_level}</td>
                    <td>
                        <button className='btn btn success'>Sửa</button>
                        <button className='btn btn danger'>Xóa</button>
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
