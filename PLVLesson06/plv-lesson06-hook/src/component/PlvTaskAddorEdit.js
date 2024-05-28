import React, { useState } from 'react'

export default function PlvTaskAddorEdit(plvonsubmit) {
    const plvtaskobj={
        plv_taskId:0,
        plv_taskName:"",
        plv_level:""
    }
    const [plvtask,setPlvTask] = useState(plvtaskobj);
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
        <h2>Thêm mới Task</h2>
        <form>
            <div>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Task ID:</span>
                <input name='plv_taskid' value={plvtaskobj.plv_taskId} onChange={plvhandlechange} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            <div>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Task Name:</span>
                <input name='plv_taskname' value={plvtaskobj.plv_taskName} onChange={plvhandlechange} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            <div>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Task Level:</span>
                <select name='plv_tasklevel' value={plvtaskobj.plv_level} onChange={plvhandlechange}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
                </div>
            </div>
            <button className='' onClick={plvhandlesubmit}>Lưu</button>
        </form>
    </div>
  )
}
