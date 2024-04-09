import logo from './logo.svg';
import './App.css';
import Phanlacviet_func from './components/Phanlacviet_func';
import Phanlacviet_class from './components/Phanlacviet_class'
function App() {
  return (
    <>
      <h2>phanlacviet</h2>
      <p>gjfgh</p>
      <Phanlacviet_func  />
      <Phanlacviet_func fullname="phan lac viet" diachi="HA TAY-HA NOI" />
      <Phanlacviet_class  />
      <Phanlacviet_class thongtin="hoc reactjs" thoigian="13h30pm" />
    </>
  );
}

export default App;
