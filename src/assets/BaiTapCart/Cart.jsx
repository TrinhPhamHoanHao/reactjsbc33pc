import React, { Component } from 'react'
import CartItem from './CartItem';
import CartList from './CartList'

export default class Cart extends Component {

  render() {
    const {spChiTiet,prod,delProduct,spAddCart,tangGiamSoLuong} = this.props;
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
                <tr className=''>
                    <th className='ps-4'>Mã sản phẩm</th>
                    <th className='ps-4'>Hình ảnh</th>
                    <th className='ps-4'>Tên sản phẩm</th>
                    <th className='ps-4'>Số lượng</th>
                    <th className='ps-4'>Đơn giá</th>
                    <th className='ps-4'>Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                {spAddCart.map((prod,index)=>{
                  return <tr key={index} className="text-center">
                      <td>{prod.maSP}</td>
                      <td><img src={prod.hinhAnh} width={50} height={50}/></td> 
                      <td>{prod.tenSP}</td>
                      <td><button className='btn btn-primary text-white me-1' onClick={(()=>{
                          tangGiamSoLuong(prod.maSP,true)
                        })}>+</button>
                        {prod.soLuong}
                        <button className='btn btn-primary text-white ms-1' onClick={(()=>{
                          tangGiamSoLuong(prod.maSP,false)
                        })}>-</button>
                        </td>
                      <td>{prod.giaBan.toLocaleString()}</td>
                      <td>{(prod.giaBan * prod.soLuong).toLocaleString()}</td>
                      <td><button className='btn btn-danger text-white' onClick={(()=>{
                        delProduct(prod.maSP)
                    })}>Xóa</button></td>
                  </tr>
                })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5}></td>
                <th>Tổng tiền: {this.props.spAddCart.reduce((tongTien,prod)=>{
                  return tongTien += prod.soLuong * prod.giaBan; 
                },0).toLocaleString()}
                </th>
                
              </tr>
            </tfoot>
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
