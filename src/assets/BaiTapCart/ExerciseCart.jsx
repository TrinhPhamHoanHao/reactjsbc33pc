import React, { Component } from 'react'
import Cart from './Cart'
import CartList from './CartList'

const dataPhone = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./image/vsphone.jpg" },
  { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./image/meizuphone.jpg" },
  { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./image/applephone.jpg" }
]
export default class ExerciseCart extends Component {

    state ={
        spChiTiet:  { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./image/vsphone.jpg", "soLuong": 1, "thanhTien": 5700000},
        spAddCart:  { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./image/vsphone.jpg", "soLuong": 1, "thanhTien": 5700000},
        clear: {"maSP": "", "tenSP": "","giaBan": " ", "hinhAnh": " ", "soLuong": "", "thanhTien": "",}
    }

      xemChiTiet = (prodClick) =>{
        this.setState({
            spChiTiet: prodClick
        })
      }
      addCart = (addClick) =>{
        this.setState({
            spAddCart: addClick
        })
      }

      delProduct = ()=>{
        this.setState({
            spAddCart: this.state.clear
      })
    }

  render() {
    let {maSP,tenSP,manHinh,heDieuHanh,cameraTruoc,cameraSau,ram,rom,giaBan,hinhAnh} = this.state.spChiTiet;
    return (
        <div className='container'>
            <h3 className='text-center text-success mb-1'>Bài tập giỏ hàng</h3>
            <p className='text-end text-danger'>Giỏ hàng (0)</p>
            <div>
                <CartList dataPhone={dataPhone} xemChiTiet={this.xemChiTiet} addCart={this.addCart}/>
                <Cart spChiTiet={this.state.spChiTiet} delProduct={this.delProduct} spAddCart={this.state.spAddCart}/>
            </div>
            <div className='mt-5'>
                <div className='row'>
                    <div className='col-4'>
                        <h3 className='text-center'>VinSmart Live</h3>
                        <img src={hinhAnh} className="w-100" style={{objectFit:"contain",height:"350px"}}/>
                    </div>
                    <div className='col-8'>
                        <h3>Thông số kỹ thuật</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <td>{manHinh}</td>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <td>{rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
