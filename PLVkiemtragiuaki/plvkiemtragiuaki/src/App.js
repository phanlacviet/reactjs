import logo from './logo.svg';
import './App.css';
import PlvStudentList from './Component/PlvStudentList';
import PlvStudentAddOrEdit from './Component/PlvStudentAddOrEdit';
import React, { useEffect, useState } from 'react';

function App() {
  const plv_studentlist = [
    {plv_Id:2210900079,plv_Name:"Phan Lạc Việt",plv_Age:20,plv_Phone:989930824,plv_Status:"true"},
    {plv_Id:3213,plv_Name:"Nguyễn Văn A",plv_Age:32,plv_Phone:4321431,plv_Status:"false"},
    {plv_Id:432321,plv_Name:"Phan Văn D",plv_Age:21,plv_Phone:123466,plv_Status:"false"},
    {plv_Id:2132,plv_Name:"Đỗ Văn 2",plv_Age:43,plv_Phone:53763,plv_Status:"false"},
    {plv_Id:545664,plv_Name:"Kíea",plv_Age:21,plv_Phone:6534634,plv_Status:"false"}
  ];
  const [plvStudentlist, setPlvStudentList] = useState(plv_studentlist)
  const plvstudentobj = {
    plv_Id: 0,
    plv_Name: "NTU",
    plv_Age: 0,
    plv_Phone:424321,
    plv_Status:"false"
  };
  const [plvstudent, setPlvStudent] = useState(plvstudentobj);
  const [PlvIsAddOrEdit, setPlvIsAddOrEdit] = useState(true);
  const plvhandleEdit = (param) => {
    console.log("App - Edit:", param);
    setPlvStudent(param);
    setPlvIsAddOrEdit(false);
  };
  const plvhandleDelete = (param) =>{
    let plvResult = plvStudentlist.filter(x=>x.plv_Id!=param.plv_Id);
    setPlvStudentList(plvResult);
  };
  const plvhandlesubmit = (plvparam) => {
    // console.log("App:",plvparam);
    if (PlvIsAddOrEdit === true) {
      setPlvStudent((prev) => {
        return [...prev, plvparam];
      });
    }
    else {
      for (let i = 0; i < plvStudentlist.length; i++) {
        if (plvStudentlist[i].plv_Id == plvparam.plv_Id) {
          plvStudentlist[i] = plvparam;
          break;
        }
      }
      setPlvStudentList((prev) => {
        return [
          ...prev
        ];
      })
    }
  };
  let data = JSON.parse(localStorage.getItem("PlvK22CNT2DataTask"));
  console.log("data:",data);
  if(data === null || data.length ===0){
    data = plv_studentlist;
    localStorage.setItem("PlvK22CNT2DataTask", JSON.stringify(data));
  }
  const [plvstudentlist, setPlvStudents] = useState(data);
  useEffect(()=>{
    localStorage.setItem("PlvK22CNT2DataTask", JSON.stringify(plvstudentlist));
  },[plvstudentlist]);
  return (
    <div className="container border">
      <h1>Phan Lạc Việt - K22CNT2</h1>
      <hr />
      <div>
      <PlvStudentList 
          renderPlvstudentlist={plvStudentlist}
          onStudentEdit={plvhandleEdit}
          onPlvStudentdelete={plvhandleDelete}
      />
      </div>
      <div>
        <PlvStudentAddOrEdit
        renderPlvStudent={plvstudent}
        renderPlvIsAddOrEdit={PlvIsAddOrEdit}
        plvonsubmit={plvhandlesubmit}
        />
      </div>
    </div>
  );
}

export default App;
