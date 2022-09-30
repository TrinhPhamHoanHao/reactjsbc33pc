import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
    const {prod,xemChiTiet,addCart} = this.props;
    return (
        <div className="card">
        <img
          src={prod.hinhAnh}
          className="w-100"
          style={{ objectFit: "contain", height: "350px" }}
        />
        <div className="card-body">
          <p>{prod.tenSP}</p>
          <p>{prod.giaBan.toLocaleString()}</p>
          <button className="btn btn-success mx-3" onClick={()=>{
                xemChiTiet(prod)
          }}>Xem chi tiết</button>
          <button className="btn btn-danger" onClick={()=>{
                addCart(prod)
          }}>Thêm vào giỏ hàng</button>
        </div>
      </div>
    )
  }
}
