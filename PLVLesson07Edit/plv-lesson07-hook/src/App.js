import logo from './logo.svg';
import './App.css';
import PlvListTask from './component/PlvListTask';
import PlvTaskAddorEdit from './component/PlvTaskAddorEdit';
import React, { useEffect, useState } from 'react';

function App() {
  const plv_listTasks = [
    { plv_taskId: 2210900079, plv_taskName: "Phan Lạc Việt", plv_level: "Small" },
    { plv_taskId: 1, plv_taskName: "Học lập trình frontend", plv_level: "Small" },
    { plv_taskId: 2, plv_taskName: "Học lập trình reactjs", plv_level: "Medium" },
    { plv_taskId: 3, plv_taskName: "Lập trình với Frontend - Reactjs", plv_level: "High" },
    { plv_taskId: 4, plv_taskName: "Lập trình Fullstack (PHP, Java, NetCore)", plv_level: "Small" },
  ];
  console.log(plv_listTasks);
  const [plvListTasks, setPlvListTasks] = useState(plv_listTasks);
  useEffect(() => {
    console.log("use:", plvListTasks);
  }, [])
  //tạo state cho form (add,edit)
  const plvtaskobj = {
    plv_taskId: 0,
    plv_taskName: "NTU",
    plv_level: "High"
  };
  //tạo state
  const [plvtask, setPlvTask] = useState(plvtaskobj);
  //state để phân biệt trạng thái là thêm mới hay sửa
  const [PlvIsAddOrEdit, setPlvIsAddOrEdit] = useState(true);
  //nhận dữ liệu khi sửa
  const plvhandleEdit = (param) => {
    console.log("App - Edit:", param);
    setPlvTask(param);
    setPlvIsAddOrEdit(false);
  };
  const plvhandlesubmit = (plvparam) => {
    // console.log("App:",plvparam);
    if (PlvIsAddOrEdit === true) {
      setPlvTask(prev => {
        return {
            ...prev,
            [name]: value,
        }
    })
    }
    else {
      for (let i = 0; i < plvListTasks.length; i++) {
        if (plvListTasks[i].plv_taskId == plvparam.plv_taskId) {
          plvListTasks[i] = plvparam;
          break;
        }
      }
      setPlvListTasks((prev) => {
        return [
          ...prev
        ];
      })
    }
  };
  const plvhandleDelete = (param) =>{
    let plvResult = plvListTasks.filter(x=>x.plv_taskId!=param.plv_taskId);
    setPlvListTasks(plvResult);
  }
  return (
    <div className="container border">
      <h1>Phan Lạc Việt - K22CNT2</h1>
      <hr />
      <div>
        { }
        <PlvListTask renderPlvListTasks={plvListTasks}
          onPlvTaskEdit={plvhandleEdit}
          onPlvTaskdelete={plvhandleDelete}
        />

      </div>
      <div>
        <PlvTaskAddorEdit
          renderPlvTask={plvtask}
          renderPlvIsAddOrEdit={PlvIsAddOrEdit}
          plvonsubmit={plvhandlesubmit}
        />
      </div>
    </div>
  );
}

export default App;
