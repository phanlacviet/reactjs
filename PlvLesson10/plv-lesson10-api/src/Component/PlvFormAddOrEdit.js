import React, { useEffect, useState } from 'react'
import axios from '../Api/PlvApi';

export default function PlvFormAddOrEdit({renderUser,onPlvClose,onPlvSubmitForm}) {
    const plvhandelclose = () =>{
        onPlvClose(false)
    }
    console.log(renderUser);
    const[plvid,setplvid] = useState(0);
    const[plvUserName,setplvUserName] = useState("");
    const[plvPassword,setplvPassWord] = useState("");
    const[plvEmail,setplvEmail] = useState("");
    const[plvPhone,setplPhone] = useState("");
    useEffect(()=>{
        setplvid(renderUser.id)
        setplvUserName(renderUser.UserName)
        setplvPassWord(renderUser.PassWord)
        setplvEmail(renderUser.Email)
        setplPhone(renderUser.Phone)
    },[renderUser])
    const plvhandlesubmit = async (event) =>{
        event.prevenDefault();
        console.log(plvid,plvUserName,plvPassword,plvEmail,plvPhone);
        let plvobjUser = {
            UserName: plvUserName,
            Password: plvPassword,
            Email: plvEmail,
            Phone: plvPhone,
            id: plvid
        }
        const plvres = await axios.post("PlvUser",plvobjUser);
        onPlvSubmitForm(false)
    }
  return (
    <div className=''>
        <form>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">PLVID</span>
            <input type="text" class="form-control" 
                   name='id' value={plvid} onChange={(ev)=>setplvid(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">PLVUserName</span>
            <input type="text" class="form-control" 
                   name='UserName' value={plvUserName} onChange={(ev)=>setplvUserName(ev.target.value)}
            placeholder="UserName" aria-label="UserName" aria-describedby="UserName"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">PLVPassword</span>
            <input type="text" class="form-control" 
                   name='Password' value={plvPassword} onChange={(ev)=>setplvPassWord(ev.target.value)}
            placeholder="Password" aria-label="Password" aria-describedby="Password"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">PLVEmail</span>
            <input type="text" class="form-control" 
                   name='Email' value={plvEmail} onChange={(ev)=>setplvEmail(ev.target.value)}
            placeholder="Email" aria-label="Email" aria-describedby="Email"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">PLVPhone</span>
            <input type="text" class="form-control" 
                   name='Phone' value={plvPhone} onChange={(ev)=>setplPhone(ev.target.value)}
            placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
            </div>
            <button className='btn btn-primary' name='btnPlvSave' onClick={(ev)=>plvhandlesubmit(ev)}>Thêm mới</button>
            <button className='btn btn-danger' onClick={plvhandelclose}>Đóng</button>
        </form>
    </div>
  )
}
