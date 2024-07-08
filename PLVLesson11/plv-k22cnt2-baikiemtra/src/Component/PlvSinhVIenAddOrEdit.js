import React, { useEffect, useState } from 'react'
import axios from '../Api/PlvApi'
export default function PlvSinhVIenAddOrEdit({renderstuden,onplvclose,onplvsubmitform}) {
    
    const plvhandleclose = () =>{
        onplvclose(false)
    }
    const [PlvMaSV,setplvmasv] = useState(0);
    const [PlvHoSV,setplvhosv] = useState("");
    const [PlvTenSV,setplvtenv] = useState("");
    const [PlvPhai,setplvphai] = useState("");
    const [PlvNgaySinh,setplvngaysinh] = useState("");
    const [PlvNoiSinh,setplvnoisinh] = useState("");
    const [PlvMaKH,setplvmakh] = useState("");
    const [PlvHocBong,setplvhocbong] = useState(0);
    const [PlvDiemTrungBinh,setplvdtb] = useState(0);

    useEffect(()=>{
        setplvmasv(renderstuden.PlvMaSV)
        setplvhosv(renderstuden.PlvHoSV)
        setplvtenv(renderstuden.PlvTenSV)
        setplvphai(renderstuden.PlvPhai)
        setplvngaysinh(renderstuden.PlvNgaySinh)
        setplvnoisinh(renderstuden.PlvNoiSinh)
        setplvmakh(renderstuden.PlvMaKH)
        setplvhocbong(renderstuden.PlvHocBong)
        setplvdtb(renderstuden.PlvDiemTrungBinh)
    },[renderstuden])

    const plvhandlesubmit = async (event)=>{
        event.preventDefault();
        let plvobjstudent = {
            PlvHoSV: PlvHoSV,
            PlvTenSV: PlvTenSV,
            PlvPhai: PlvPhai,
            PlvNgaySinh: PlvNgaySinh,
            PlvNoiSinh: PlvNoiSinh,
            PlvMaKH: PlvMaKH,
            PlvHocBong: PlvHocBong,
            PlvDiemTrungBinh: PlvDiemTrungBinh,
            PlvMaSV: PlvMaSV
        }
        const plvRes = await axios.post("PlvSinhVien",plvobjstudent);
        onplvsubmitform(false);
    }

  return (
    <div>
        <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Mã Sinh viên</span>
            <input type="text" class="form-control" 
                   name='id' value={PlvMaSV} onChange={(ev)=>setplvmasv(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Họ Sinh Viên</span>
            <input type="text" class="form-control" 
                   name='id' value={PlvHoSV} onChange={(ev)=>setplvhosv(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Tên Sinh Viên</span>
            <input type="text" class="form-control" 
                   name='id' value={PlvTenSV} onChange={(ev)=>setplvtenv(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Giới Tính</span>
            <input type="text" class="form-control" 
                   name='id' value={PlvPhai} onChange={(ev)=>setplvphai(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Ngày Sinh</span>
            <input type="text" class="form-control" 
                   name='id' value={PlvNgaySinh} onChange={(ev)=>setplvngaysinh(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nơi Sinh</span>
            <input type="text" class="form-control" 
                   name='id' value={PlvNoiSinh} onChange={(ev)=>setplvnoisinh(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Mã Khoa</span>
            <input type="text" class="form-control" 
                   name='id' value={PlvMaKH} onChange={(ev)=>setplvmakh(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Học Bổng</span>
            <input type="text" class="form-control" 
                   name='id' value={PlvHocBong} onChange={(ev)=>setplvhocbong(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Điểm Trung Bình</span>
            <input type="text" class="form-control" 
                   name='id' value={PlvDiemTrungBinh} onChange={(ev)=>setplvdtb(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
            </div>
            <button className='btn btn-primary' name='btnplvsave' onClick={(ev)=>plvhandlesubmit(ev)}>Ghi lại</button>
        </form>
    </div>
  )
}
