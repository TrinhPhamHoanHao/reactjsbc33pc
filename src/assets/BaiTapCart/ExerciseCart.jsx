import React, { Component } from 'react'
import Cart from './Cart'
import CartList from './CartList'

const dataPhone = [
  { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./image/vsphone.jpg", "soLuong": 1, "thanhTien": 5700000 },
  { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./image/meizuphone.jpg", "soLuong": 1, "thanhTien": 5700000 },
  { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./image/applephone.jpg", "soLuong": 1, "thanhTien": 5700000 }
]
export default class ExerciseCart extends Component {

    state ={
        spChiTiet:  { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./image/vsphone.jpg"},

        spAddCart:  [{ "maSP": 1, "tenSP": "VinSmart Live", "giaBan": 5700000, "hinhAnh": "./image/vsphone.jpg", "soLuong": 1}],

        clear: {"maSP": "", "tenSP": "","giaBan": " ", "hinhAnh": " ", "soLuong": "", "thanhTien": "",}
    }

      xemChiTiet = (prodClick) =>{
        this.setState({
            spChiTiet: prodClick
        })
      }
      addCart = (addClick) =>{
        let addProd = {
            maSP: addClick.maSP,
            tenSP: addClick.tenSP,
            giaBan: addClick.giaBan,
            hinhAnh: addClick.hinhAnh,
            soLuong:1}
            var updateCart = [...this.state.spAddCart]
            let index = updateCart.findIndex(prod => prod.maSP === addProd.maSP);
            if(index !== -1){
                updateCart[index].soLuong += 1;
            }else{
                updateCart.push(addProd);
            }
            this.setState({
                spAddCart: updateCart
            })
      }

      delProduct = (delClick)=>{
        var newCart = this.state.spAddCart.filter(prod => prod.maSP !== delClick);
        this.setState({
            spAddCart: newCart
        })
    }

    tangGiamSoLuong = (click,tangGiam)=>{
        var updateCart = [...this.state.spAddCart];
        let index = updateCart.findIndex(prod => prod.maSP === click)
        if(tangGiam){
            updateCart[index].soLuong += 1;
        }else{
            if(updateCart[index].soLuong > 1){
                updateCart[index].soLuong -= 1;
            }
        }
        this.setState({
            spAddCart: updateCart
        })
    }


  render() {
    let {maSP,tenSP,manHinh,heDieuHanh,cameraTruoc,cameraSau,ram,rom,giaBan,hinhAnh} = this.state.spChiTiet;
    let tongSoLuong = this.state.spAddCart.reduce((tsl,prod,index)=>{
        return tsl += prod.soLuong;
    },0)
    return (
        <div className='container'>
            <h3 className='text-center text-success mb-1'>Bài tập giỏ hàng</h3>
            <p className='text-end text-danger' style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#modalId">Giỏ hàng ({tongSoLuong})</p>
            <div>
                <CartList dataPhone={dataPhone} xemChiTiet={this.xemChiTiet} addCart={this.addCart}/>
                <Cart spChiTiet={this.state.spChiTiet} delProduct={this.delProduct} spAddCart={this.state.spAddCart} tangGiamSoLuong={this.tangGiamSoLuong}/>
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
