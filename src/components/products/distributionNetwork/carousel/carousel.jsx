import React from 'react';
import styles from './carousel.module.css'

export const Carousel = () => {
  
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://media.licdn.com/dms/image/v2/D4E3DAQHgtRBqc_L9Cw/image-scale_191_1128/image-scale_191_1128/0/1715089995106/carmeuse_cover?e=2147483647&v=beta&t=8jVLotAS-5Ui8dM-u-RgAwdRL6TmdVlYUtdSgRTumi0" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://media.licdn.com/dms/image/v2/D4E3DAQHgtRBqc_L9Cw/image-scale_191_1128/image-scale_191_1128/0/1715089995106/carmeuse_cover?e=2147483647&v=beta&t=8jVLotAS-5Ui8dM-u-RgAwdRL6TmdVlYUtdSgRTumi0" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://media.licdn.com/dms/image/v2/D4E3DAQHgtRBqc_L9Cw/image-scale_191_1128/image-scale_191_1128/0/1715089995106/carmeuse_cover?e=2147483647&v=beta&t=8jVLotAS-5Ui8dM-u-RgAwdRL6TmdVlYUtdSgRTumi0" className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
