import React from 'react'
import axios from '../Api/PlvApi'
export default function PlvSinhVienlist({renderPlvlistStudent,onplvdelete}) {
    let plvElementUser = renderPlvlistStudent.map((PlvSinhVien,index)=>{
        return(
            <>
            <tr key={index}>
            <td>{PlvSinhVien.PlvMaSV}</td>
            <td>{PlvSinhVien.PlvHoSV}</td>
            <td>{PlvSinhVien.PlvTenSV}</td>
            <td>{PlvSinhVien.PlvPhai}</td>
            <td>{PlvSinhVien.PlvNgaySinh}</td>
            <td>{PlvSinhVien.PlvNoiSinh}</td>
            <td>{PlvSinhVien.PlvMaKH}</td>
            <td>{PlvSinhVien.PlvHocBong}</td>
            <td>{PlvSinhVien.PlvDiemTrungBinh}</td>
            <td>
                <button className='btn btn-success' onClick={plvhandleedit}>Sửa</button>
                <button className='btn btn-danger' onClick={()=>plvhandledelete(PlvSinhVien)}>Xóa</button>
            </td>
            </tr>
        </>
        )
    })
    const plvhandledelete= async (param)=>{
        if(window.confirm('bạn có muốn xóa không')){
            const plvres = await axios.delete("PlvSinhVien/"+param.PlvMaSV);
        }
        onplvdelete();
    }
    const handleEditChange = (event) => {
        const { name, value } = event.target;
        setEditingStudent({
            ...editingStudent,
            [name]: value
        });
    };
    const handleEditSubmit = async () => {
        const plvRes = await axios.put("PlvSinhVien/" + editingStudent.PlvMaSV, editingStudent);
    }
  return (
        <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                <th>Mã Sinh viên</th>
                <th>Họ Sinh Viên</th>
                <th>Tên Sinh Viên</th>
                <th>Phái</th>
                <th>Ngày Sinh</th>
                <th>Nơi Sinh</th>
                <th>Mã Khoa</th>
                <th>Học Bổng</th>
                <th>Điểm Trung Bình</th>
                <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {plvElementUser}
            </tbody>
        </table>
    </div>
  )
}
