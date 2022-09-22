import React, { Component } from 'react'

export default class Body extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title text-center py-5'>
            <h3 className='fs-1 fw-bold'>A warm welcome!</h3>
            <p className='fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <button className='btn btn-primary fs-5'>Call to action</button>
        </div>
        <div className='content pt-4'>
            <div className='row'>
            <div className='card-body col-4 text-center p-5'>
                <i class="fa fa-chalkboard fs-1 p-3 bg-primary rounded-2 mb-4 text-white"></i>
                <h4 className='fw-bold'>Fresh new layout</h4>
                <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
            </div>
            <div className='card-body col-4 text-center p-5'>
                <i class="fa fa-cloud-download-alt fs-1 p-3 bg-primary rounded-2 mb-4 text-white"></i>
                <h4 className='fw-bold'>Fresh new download</h4>
                <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
            </div>
            <div className='card-body col-4 text-center p-5'>
                <i class="fa fa-address-card fs-1 p-3 bg-primary rounded-2 mb-4 text-white"></i>
                <h4 className='fw-bold'>Jumbotron hero header</h4>
                <p>The heroic part of this template is the jumbotron hero header!</p>
            </div>
            <div className='card-body col-4 text-center p-5'>
                <i class="fab fa-bootstrap fs-1 p-3 bg-primary rounded-2 mb-4 text-white"></i>
                <h4 className='fw-bold'>Feature boxes</h4>
                <p>We've created some custom feature boxes using Bootstrap icons!</p>
            </div>
            <div className='card-body col-4 text-center p-5'>
                <i class="fa fa-code fs-1 p-3 bg-primary rounded-2 mb-4 text-white"></i>
                <h4 className='fw-bold'>Simple clean code</h4>
                <p>We keep our dependencies up to date and squash bugs as they come!</p>
            </div>
            <div className='card-body col-4 text-center p-5'>  
                <i class="fab fa-python fs-1 p-3 bg-primary rounded-2 mb-4 text-white"></i>
                <h4 className='fw-bold'>A name you trust</h4>
                <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
