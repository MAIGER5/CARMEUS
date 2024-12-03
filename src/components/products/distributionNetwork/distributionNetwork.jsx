import React from 'react';
import styles from './distributionNetwork.module.css'
import { Carousel } from './carousel/carousel';
import { CardProductEmpaque } from './cardProductEmpaque/cardProductEmpaque';
import dataProductEmpaque from '../../utils/data/dataProductEmpaque';


export const DistributionNetwork = () => {

  const dataProduct = dataProductEmpaque;

  return (
    <div className={styles.contenedor}>
      <Carousel/>
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
    </div>
  )
}
