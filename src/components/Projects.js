import React from 'react'
import Project1 from './images/Project1.webp';
import Project2 from './images/Project2.webp';

export default function Projects() {
  return (
    <>
      <h1 className='text-center my-2'>Featured Projects</h1>
      <div className='container my-3 row'>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={Project1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">FINDMYGYM</h5>
            <p className="card-text">Find my gym is your go-to fitness discovery platform - helping you locate the best gyms near you based on distance.</p>
            <a href="https://findmygym.netlify.app/" className="btn btn-info">Checkout</a>
          </div>
        </div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={Project2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Notes</h5>
            <p className="card-text">A simple and intutive tool designed to help users quickly write, edit, and and organize their thoughts.</p>
            <a href="https://oursnote.netlify.app/" className="btn btn-info">Checkout</a>
          </div>
        </div>
      </div>
    </>
  )
}
