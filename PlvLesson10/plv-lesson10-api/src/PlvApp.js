
import './App.css';
import axios from './Api/PlvApi';
import { useEffect, useState } from 'react';
import PlvListUsers from './Component/PlvListUsers';
function PlvApp() {
  const[plvlistuser,setplvlistuser]=useState([]);
  const plvGetAllUsers = async ()=> {
    const plvResponse = await axios.get("PlvUser");
    console.log("Api Data",plvResponse.data);
    setplvlistuser(plvResponse.data)
  }

  useEffect(()=>{
    plvGetAllUsers();
    console.log("State Data",plvlistuser)
  },[])
  return (
    <div className="Container border my-3">
       <h1>Làm việc với mockapi</h1>
       <PlvListUsers renderplvlistuser={plvlistuser} />
    </div>
  );
}

export default PlvApp;
