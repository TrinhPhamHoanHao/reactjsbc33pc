import React, { Component } from "react";
import Cart from "./Cart";
import CartItem from "./CartItem";
export default class extends Component {
  renderProduct = () => {
    const {dataPhone,xemChiTiet,addCart} = this.props;
    return dataPhone.map((prod, index) => {
      return <div className="col-4" key={index}>
          <CartItem prod={prod} xemChiTiet={xemChiTiet} addCart={addCart}/>
        </div>
    });
  };
  render() {
    return (
      <div className='row'> 
        {this.renderProduct()}
      </div>
    );
  }
}
