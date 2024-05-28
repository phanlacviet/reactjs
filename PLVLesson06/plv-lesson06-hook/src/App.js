import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import PlvListTask from './component/PlvListTask';
import PlvTaskAddorEdit from './component/PlvTaskAddorEdit';

function App() {
  const plv_listTasks = [
    { plv_taskId:2210900079,plv_taskName:"Phan Lạc Việt", plv_level:"Small" },
    { plv_taskId:1,plv_taskName:"Học lập trình frontend", plv_level:"Small" },
    { plv_taskId:2, plv_taskName:"Học lập trình reactjs",plv_level:"Medium"},
    { plv_taskId:3, plv_taskName:"Lập trình với Frontend - Reactjs",plv_level:"High"},
    { plv_taskId:4, plv_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",plv_level:"Small"},
   ];
   console.log(plv_listTasks);
   const [plvListTasks, setPlvListTasks] = useState(plv_listTasks);
   useEffect(()=>{
      console.log("use:",plvListTasks);
   },[])

   const plvhandlesubmit = (plvparam)=>{
    // console.log("App:",plvparam);
    setPlvListTasks(prev =>{
      return [
        ...prev,
        plvparam
      ]
    })
   }
  return (
    <div className="container border">
        <h1>Phan Lạc Việt - K22CNT2</h1>
        <hr/>
        <div>
          {}
          <PlvListTask renderPlvListTasks = {plvListTasks}/>
          
        </div>
        <div>
          <PlvTaskAddorEdit plvonsubmit={plvhandlesubmit}/>
        </div>
    </div>
  );
}

export default App;
