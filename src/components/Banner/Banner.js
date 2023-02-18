import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='d-flex align-items-end banner__section'>
      <div className='col-8'>
        <h2 className='banner__title mb-0'>We <br /> present <br /> innovations <br /> for hope</h2>
      </div>
      <div className='col'>
        <p className='banner__text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <button className='btn__secondary'>more about us</button>
      </div>
    </div>
  )
}

export default Banner