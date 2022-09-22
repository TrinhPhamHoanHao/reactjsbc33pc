import React, { Component } from 'react'

const arrProduct = [{
    "id": 1,
    "price": 30,
    "name": "GUCCI G8850U",
    "url": "./glassesImage/v1.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 2,
    "price": 50,
    "name": "GUCCI G8759H",
    "url": "./glassesImage/v2.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 3,
    "price": 30,
    "name": "DIOR D6700HQ",
    "url": "./glassesImage/v3.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 4,
    "price": 70,
    "name": "DIOR D6005U",
    "url": "./glassesImage/v4.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 5,
    "price": 40,
    "name": "PRADA P8750",
    "url": "./glassesImage/v5.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 6,
    "price": 60,
    "name": "PRADA P9700",
    "url": "./glassesImage/v6.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 7,
    "price": 80,
    "name": "FENDI F8750",
    "url": "./glassesImage/v7.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 8,
    "price": 100,
    "name": "FENDI F8500",
    "url": "./glassesImage/v8.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 9,
    "price": 60,
    "name": "FENDI F4300",
    "url": "./glassesImage/v9.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
}]

export default class BaiTapGlasses extends Component {
    state = {
        imgSrc: "./image/v9.png",
        name: "FENDI F4300",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        display: "none"
    }
    // changeGlasses = (img) =>{
    //     this.setState({
    //         imgSrc: `./image/${img}.png`,
    //     })
    // }
 
  render() {
    return (
      <div className='glasses'>
        <div className='title p-4'>
            <h3 className='text-white text-center'>TRY GLASSES APP ONLINE</h3>
        </div>
        <div className='img text-center p-4'>
            <img src="./image/model.jpg" alt=""/>
            <img style={{display:this.state.display}} src={this.state.imgSrc} alt="" className='glass'/>
            <div className='info'>
                <h3 style={{display:this.state.display}} className='text-primary px-2'>{this.state.name}</h3>
                <p style={{display:this.state.display}} className='text-white fs-5 px-2'>{this.state.desc}</p>
            </div>
        </div>
        <div className='container'>
            <div className='row p-5'>
                    <img src="./image/g1.jpg" alt="" onClick={()=>{
                        this.setState({
                            imgSrc: `./image/v1.png`,
                            display: "block"
                        })
                        this.setState({
                            name: "GUCCI G8850U",
                            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
                            display: "block"
                        })
                    }}/>
                    <img src="./image/g2.jpg" alt="" onClick={()=>{
                        this.setState({
                            imgSrc: `./image/v2.png`,
                            display: "block"
                        })
                        this.setState({
                            name: "GUCCI G8759H",
                            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
                            display: "block"
                        })
                    }}/>
                    <img src="./image/g3.jpg" alt="" onClick={()=>{
                        this.setState({
                            imgSrc: `./image/v3.png`,
                            display: "block"
                        })
                        this.setState({
                            name: "DIOR D6700HQ",
                            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
                            display: "block"
                        })
                    }}/>
                    <img src="./image/g4.jpg" alt="" onClick={()=>{
                        this.setState({
                            imgSrc: `./image/v4.png`,
                            display: "block"
                        })
                        this.setState({
                            name: "DIOR D6005U",
                            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
                            display: "block"
                        })
                    }}/>
                    <img src="./image/g5.jpg" alt="" onClick={()=>{
                        this.setState({
                            imgSrc: `./image/v5.png`,
                            display: "block"
                        })
                        this.setState({
                            name: "PRADA P8750",
                            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
                            display: "block"
                        })
                    }}/>
                    <img src="./image/g6.jpg" alt="" onClick={()=>{
                        this.setState({
                            imgSrc: `./image/v6.png`,
                            display: "block"
                        })
                        this.setState({
                            name: "PRADA P9700",
                            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
                            display: "block"
                        })
                    }}/>
                    <img src="./image/g7.jpg" alt="" onClick={()=>{
                        this.setState({
                            imgSrc: `./image/v7.png`,
                            display: "block"
                        })
                        this.setState({
                            name: "FENDI F8750",
                            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
                            display: "block"
                        })
                    }}/>
                    <img src="./image/g8.jpg" alt="" onClick={()=>{
                        this.setState({
                            imgSrc: `./image/v8.png`,
                            display: "block"
                        })
                        this.setState({
                            name: "FENDI F8500",
                            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
                            display: "block"
                        })
                    }}/>
                    <img src="./image/g9.jpg" alt="" onClick={()=>{
                        this.setState({
                            imgSrc: `./image/v9.png`,
                            display: "block"
                        })
                        this.setState({
                            name: "FENDI F4300",
                            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
                            display: "block"
                        })
                    }}/>
            </div>
        </div>
      </div>
    )
  }
}
