
import './App.css';
import axios from './Api/PlvApi';
import { useEffect, useState } from 'react';
import PlvListUsers from './Component/PlvListUsers';
import PlvFormAddOrEdit from './Component/PlvFormAddOrEdit';
function PlvApp() {
  const[plvlistuser,setplvlistuser]=useState([]);
  const plvGetAllUsers = async ()=> {
    const plvResponse = await axios.get("PlvUser");
    console.log("Api Data",plvResponse.data);
    setplvlistuser(plvResponse.data)
  }
  //hàm xử lí thêm mới
  const[plvAddOrEdit,setplvAddOrEdit] = useState(false)
  const plvInitUser = {
    UserName: "Phan Lạc Việt",
    Password: "17/06/2004",
    Email: "lacvietphan578@gmail.com",
    Phone: "0989930824",
    id: "2210900079"
  }
  const[plvUser,setplvUser] = useState(plvInitUser)
  const plvhandleAddNew= () => {
    setplvAddOrEdit(true);
  }
  useEffect(()=>{
    plvGetAllUsers();
    console.log("State Data",plvlistuser)
  },[])
  const plvhandleclose=()=>{
    onPlvClose(false)
  }
  const plvhandlesubmit =(param)=>{
    plvGetAllUsers();
    setplvAddOrEdit(param);
  }
  let plvElementForm = plvAddOrEdit===true?<PlvFormAddOrEdit renderUser={plvUser} 
                                                             onPlvClose={plvhandleclose}
                                                             onPlvSubmitForm={plvhandlesubmit}
                                                             />:"";
  const plvhandledelete = ()=>{
    plvGetAllUsers();
  }
  return (
    <div className="Container border my-3">
       <h1>Làm việc với mockapi</h1>
       <PlvListUsers renderplvlistuser={plvlistuser} onplvdelete={plvhandledelete}/>
       <button className='btn btn-primary' name='btnPlvThemMoi' onClick={plvhandleAddNew}>Thêm mới</button>
       <hr/>
       {plvElementForm}
    </div>
  );
}

export default PlvApp;
