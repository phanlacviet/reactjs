import React, { useEffect, useState } from 'react'

export default function PlvStudentAddOrEdit({renderPlvStudent,renderPlvIsAddOrEdit,plvonsubmit}) {
    const [plvstudent,setplvstudent] = useState(renderPlvStudent);
    useEffect(()=>{
        setplvstudent(renderPlvStudent)
    },[renderPlvStudent])
    const plvtitle= renderPlvIsAddOrEdit==true?"Thêm mới Task":"Sửa thông tin Task";
    const plvhandlechange = (plvevent)=>{
        let name = plvevent.target.name;
        let value = plvevent.target.value;

        setplvstudent(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
        console.log(plvstudent);
    }
    const plvhandlesubmit = (plvevent)=>{
        plvevent.preventDefault();
        plvonsubmit(plvstudent);
    }
  return (
    <div>
        <h2>{plvtitle}</h2>
        <form>
            <div>
                <div className="input-group mb-3">
                <span className="input-group-text">Student ID:</span>
                <input name='plv_Id' value={plvstudent.plv_Id} onChange={plvhandlechange} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            <div>
                <div className="input-group mb-3">
                <span className="input-group-text">Student Name:</span>
                <input name='plv_Name' value={plvstudent.plv_Name} onChange={plvhandlechange} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            <div>
                <div className="input-group mb-3">
                <span className="input-group-text">Student Age:</span>
                <input name='plv_Age' value={plvstudent.plv_Age} onChange={plvhandlechange} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            <div>
                <div className="input-group mb-3">
                <span className="input-group-text">Student Phone:</span>
                <input name='plv_Phone' value={plvstudent.plv_Phone} onChange={plvhandlechange} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            <div>
                <div className="input-group mb-3">
                <span className="input-group-text">Student Status:</span>
                <select name='plv_Status' value={plvstudent.plv_Status} onChange={plvhandlechange}>
                    <option value={'true'}>true</option>
                    <option value={'false'}>false</option>
                </select>
                </div>
            </div>
            <button className='btn btn-success' onClick={plvhandlesubmit}>Lưu</button>
        </form>
    </div>
  )
}
