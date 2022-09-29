import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    const {arrSV,delSV,editSV} = this.props;
    return (
      <table className='table'>
        <thead>
            <tr>
                <th>Mã SV</th>
                <th>Số điện thoại</th>
                <th>Họ tên</th>
                <th>Email</th>
            </tr>
        </thead>    
            <tbody>
                {arrSV.map((prod,index)=>{
                    return <tr key={index}>
                    <td>{prod.id}</td>
                    <td>{prod.phone}</td>
                    <td>{prod.name}</td>
                    <td>{prod.email}</td>
                    <td> 
                        <button className='btn btn-danger' onClick={()=>{
                            delSV(prod.id);
                        }}>Xóa</button>
                        <button className='btn btn-primary mx-2' onClick={()=>{
                            editSV(prod);
                        }}>Sửa</button>
                    </td>
                </tr>
                })}  
            </tbody>
      </table>
    )
  }
}
