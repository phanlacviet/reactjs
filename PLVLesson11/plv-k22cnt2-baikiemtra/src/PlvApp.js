import React, { useEffect, useState } from 'react'
import PlvSinhVienlist from './Component/PlvSinhVienlist'
import axios from './Api/PlvApi';
import PlvSinhVIenAddOrEdit from './Component/PlvSinhVIenAddOrEdit';
export default function PlvApp() {
  const[plvliststudent,setplvliststudent] = useState([]);
  const plvGetAllUsers = async ()=> {
    const plvResponse = await axios.get("PlvSinhVien");
    console.log("Api Data",plvResponse.data);
    setplvliststudent(plvResponse.data)
  }
  useEffect(()=>{
    plvGetAllUsers();
  },[])
  const plvStudent = {
    PlvHoSV: "Phan Lạc",
    PlvTenSV: "Việt",
    PlvPhai: "Nam",
    PlvNgaySinh: "17/06/2004",
    PlvNoiSinh: "Hà Tây",
    PlvMaKH: "CNTT",
    PlvHocBong: 5,
    PlvDiemTrungBinh: 66,
    PlvMaSV: 2210900079
  }
  const [plvstudent,setplvstudent] = useState(plvStudent)
  const [plvaddoredit,setplvaddoredit]=useState(false)
  //hàm xử lí nút thêm mới
  const plvhandleclick = () =>{
    setplvaddoredit(true)
  }
  const plvhandleclose=(param)=>{
    setplvaddoredit(param)
  }
  const plvhandlesubmit = (param) => {
    plvGetAllUsers();
    setplvaddoredit(param)
  }
  let plvelementform = plvaddoredit===true?<PlvSinhVIenAddOrEdit 
              renderstuden={plvstudent}
              onplvclose={plvhandleclose}
              onplvsubmitform={plvhandlesubmit}
              />:"";
  const plvhandledelete=()=>{
    plvGetAllUsers();
  }
  return (
    <div>
      <PlvSinhVienlist renderPlvlistStudent={plvliststudent} onplvdelete={plvhandledelete}/>
      <button className='btn btn-primary' name='btnplvthemomi' onClick={plvhandleclick} >Thêm mới</button>
      <hr></hr>
      {plvelementform}
    </div>
  )
}

