import React from 'react';
import styles from './distributionNetwork.module.css'
import { CardProductEmpaque } from './cardProductEmpaque/cardProductEmpaque';
import dataProductEmpaque from '../../utils/data/dataProductEmpaque';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";



export const DistributionNetwork = () => {

  const dataProduct = dataProductEmpaque;

    const cld = new Cloudinary({
      cloud: {
          cloudName: 'dbn2bb4e2'
      }
    });

    const myImage1 = cld.image('carruselRDistribution3'); 
    const myImage2 = cld.image('carruselRDistribution2'); 
    const myImage3 = cld.image('carruselRDistribution1'); 

  return (
    <div className={styles.contenedor}>
      <div className={styles.divCarousel}>
        <AdvancedImage
          cldImg={myImage2} 
        />
      </div>
      <section className={styles.divProductos}>
        {
          dataProduct?
          dataProduct.map((ele)=>(
            <CardProductEmpaque key={ele.id} 
              nameProduct = {ele.nameProduct}
              peso = {ele.peso}
              imagen = {ele.imagen}
            />
          )):''
        }
      </section>
      <button className={styles.buttonRedDistribution}>CONTACTANOS</button>
    </div>
  )
}
