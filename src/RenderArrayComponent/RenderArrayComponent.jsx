import React, { Component } from 'react'

const arrProduct = [
    {id:1,name:'black car',img:"./image/products/black-car.jpg",price: 1000},
    {id:2,name:'red car',img:"./image/products/red-car.jpg",price: 2000},
    {id:3,name:'silver car',img:"./image/products/silver-car.jpg",price: 3000},
    {id:4,name:'steel car',img:"./image/products/steel-car.jpg",price: 4000}
];

export default class 
 extends Component {
    renderCardProduct = () =>{
        return arrProduct.map((item) =>{
            return(
                <div className='col-3' key={item.id}>
                    <div className='card'>
                        <img src={item.img} alt="" className='w-100'/>
                        <div className='card-body'>
                            <h3>{item.name}</h3>
                            <h3>{item.price}</h3>
                            <button className='btn btn-success'>Add to cart</button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    renderProduct = () =>{
        // let arrTr = [];
        // for(let prod of arrProduct){
        //     let trx = <tr>
        //         <td>{prod.id}</td>
        //         <td>{prod.name}</td>
        //         <td><img src={prod.img} alt="..." width={50} height={50}></img></td>
        //         <td>{prod.price}</td>
        //         <td>
        //             <button className='btn btn-danger'>Del</button>
        //         </td>
        //     </tr>
        //     arrTr.push(trx);
        // }
        // return arrTr;
        return arrProduct.map((item)=>{
            return( 
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><img src={item.img} alt="..." width={50} height={50}></img></td>
                <td>{item.price}</td>
                <td>
                    <button className='btn btn-danger'>Del</button>
                </td>
            </tr>
            )
        })
    }
  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>Product List</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>img</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {this.renderProduct()}
                {this.renderCardProduct()}
            </tbody>
        </table>
      </div>
    )
  }
}
