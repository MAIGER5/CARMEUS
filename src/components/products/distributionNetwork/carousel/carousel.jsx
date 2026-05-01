import React from 'react';
import styles from './carousel.module.css';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";


export const Carousel = () => {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dbn2bb4e2'
        }
    });

    const myImage1 = cld.image('carruselRDistribution3'); 
    const myImage2 = cld.image('carruselRDistribution2'); 
    const myImage3 = cld.image('carruselRDistribution1'); 
  
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <AdvancedImage
              className={styles.screen} 
              cldImg={myImage1} 
          />
        </div>
        <div className="carousel-item">
          <AdvancedImage
              className={styles.screen} 
              cldImg={myImage2} 
          />
        </div>
        <div className="carousel-item">
          <AdvancedImage
              className={styles.screen} 
              cldImg={myImage3} 
          />
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
