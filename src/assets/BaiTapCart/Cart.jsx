import React, { Component } from 'react'
import CartItem from './CartItem';
import CartList from './CartList'

// const data = {}
export default class Cart extends Component {

  state ={
    soLuong: 1,
}

  render() {
    const {spChiTiet,prod,delProduct,spAddCart} = this.props;
    return (
      <div>
        
      <div>
  {/* Modal trigger button */}
  {/* <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
    Lauch
  </button> */}
  {/* Modal Body */}
  {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
  <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="modalTitleId">Giỏ Hàng</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className='table'>
            <thead>
                <tr className='d-flex align-items-center flex-wrap'>
                    <th className='ps-4'>Mã sản phẩm</th>
                    <th className='ps-4'>Hình ảnh</th>
                    <th className='ps-4'>Tên sản phẩm</th>
                    <th className='ps-4'>Số lượng</th>
                    <th className='ps-4'>Đơn giá</th>
                    <th className='ps-4'>Thành tiền</th>
                </tr>
                <tr className='d-flex align-items-center  flex-wrap'>
                    <td className='px-5'>{spAddCart.maSP}</td>
                    <td className='ps-5'><img src={spAddCart.hinhAnh} className="w-100" style={{objectFit:"contain",height:"100px"}}/></td>
                    <td className=''>{spAddCart.tenSP}</td>
                    <td className='ps-3'>
                        <button className='btn btn-primary text-white me-1' onClick={(()=>{
                          this.setState({
                            soLuong: this.state.soLuong + 1
                          })
                        })}>+</button>
                        {this.state.soLuong}
                        <button className='btn btn-primary text-white ms-1' onClick={(()=>{
                          this.setState({
                            soLuong: this.state.soLuong - 1
                          })
                        })}>-</button>
                        </td>
                    <td className='px-2'>{spAddCart.giaBan.toLocaleString()}</td>
                    <td className='px-4'>{(spAddCart.giaBan * this.state.soLuong).toLocaleString()}</td>
                    <td><button className='btn btn-danger text-white' onClick={(()=>{
                        delProduct(prod)
                    })}>Xóa</button></td>
                </tr>
            </thead>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
  {/* Optional: Place to the bottom of scripts */}
</div>

      </div>
    )

  }
}
