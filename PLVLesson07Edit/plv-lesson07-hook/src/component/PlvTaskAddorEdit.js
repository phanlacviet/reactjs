import React, { useEffect, useState } from 'react'

export default function PlvTaskAddorEdit({renderPlvTask,renderPlvIsAddOrEdit,plvonsubmit}) {
    
    const [plvtask,setPlvTask] = useState(renderPlvTask);
    useEffect(()=>{
        setPlvTask(renderPlvTask)
    },[renderPlvTask])
//tạo tiêu đề form
    const plvtitle= renderPlvIsAddOrEdit==true?"Thêm mới Task":"Sửa thông tin Task"


    const plvhandlechange = (plvevent)=>{
        let name = plvevent.target.name;
        let value = plvevent.target.value;

        setPlvTask(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
        console.log(plvtask);
    }
    const plvhandlesubmit = (plvevent)=>{
        plvevent.preventDefault();
        plvonsubmit(plvtask);
    }
  return (
    <div>
        <h2>{plvtitle}</h2>
        <form>
            <div>
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Task ID:</span>
                <input name='plv_taskId' value={plvtask.plv_taskId} onChange={plvhandlechange} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            <div>
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Name:</span>
                <input name='plv_taskName' value={plvtask.plv_taskName} onChange={plvhandlechange} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            <div>
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task Level:</span>
                <select name='plv_level' value={plvtask.plv_level} onChange={plvhandlechange}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
                </div>
            </div>
            <button className='btn btn-success' onClick={plvhandlesubmit}>Lưu</button>
        </form>
    </div>
  )
}
