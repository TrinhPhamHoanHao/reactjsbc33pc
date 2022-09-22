import React, { Component } from 'react'

export default class ChangeCarColor extends Component {
    state = {
        imgSrc: "./image/products/black-car.jpg"
    }
  render() {
    return (
      <div className='row'>
            <div className='col-4'>
                <img src={this.state.imgSrc}  alt="" className='w-100'/>
            </div>
            <div className='col-8'>
                <button className='btn btn-dark mx-2' onClick={(()=>{
                    this.setState({
                        imgSrc:"./image/products/black-car.jpg"
                    })
                })}>Black Car</button>
                <button className='btn btn-danger mx-2' onClick={(()=>{
                    this.setState({
                        imgSrc:"./image/products/red-car.jpg"
                    })
                })}>Red Car</button>
                <button className='btn btn-secondary mx-2' onClick={(()=>{
                    this.setState({
                        imgSrc:"./image/products/silver-car.jpg"
                    })
                })}>Silver Car</button>
                <button className='btn btn-light mx-2' onClick={(()=>{
                    this.setState({
                        imgSrc:"./image/products/steel-car.jpg"
                    })
                })}>Steel Car</button>
            </div>
      </div>
    )
  }
}
