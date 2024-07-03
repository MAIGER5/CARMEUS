import React, { useContext } from 'react';
import styles from './productsByGroup.module.css';
import Data2Context from '../../dataContext/data2Context';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react'
import { Link } from 'react-router-dom';
import icon1 from '../../utils/icon/icon1.png'
import icon2 from '../../utils/icon/icon2.png'
import icon3 from '../../utils/icon/icon3.png'


export const ProductsByGroup = () => {

  const data = useContext(Data2Context);
  
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  });

  const myImage = cld.image(data[0].image)

  return (
    <div className={styles.contenedor}>
      
      <div className={styles.products}>
        <h1>{data[0].title1}</h1>
        <div className={styles.description}>
          <div className={styles.titles}>
            <div>
              <p>{data[0].title2}</p>
              <p>{data[0].title3}</p>
            </div>
          </div>
          <div className={styles.texto}>
            <p>{data[0].description}</p>
            {/* <ButtomOther infoboton={data[0].boton}/> */}
            <button className={styles.boton}>Conectate con Nuestros Expertos</button>
          </div>
        </div>
      </div>
      
      <section>
        <div>
          <AdvancedImage cldImg={myImage}/>
        </div>
        <div>
          {
            data[0].boxProduct.map((box, index)=>(
              <Link to={`/${box.link}`} key={index} className={`${styles.boxLink} ${index % 2 === 0? styles.colorBox1: styles.colorBox2}`}>
                {box.name}
              </Link>
            ))
          }
        </div>
      </section>

      <div className={styles.boxServices}>
        <div>
          <img src={icon1} alt="" />
          <h1>Materias Primas de Calidad</h1>
          <span>Suministramos materias primas de alta calidad y disponemos de los conocimientos técnicos necesarios para ayudarle a elegir el producto de cal adecuado para su proceso.</span>
        </div>
        <div>
          <img src={icon2} alt="" />
          <h1>Entregas Simplificadas</h1>
          <span>Nuestra red de plantas permite una amplia disponibilidad de productos y un suministro fiable, y nuestros equipos expertos en logística pueden ayudarle a encontrar la mejor solución para que su material llegue donde tiene que llegar.</span>
        </div>
        <div>
          <img src={icon3} alt="" />
          <h1>Mejora de Sistemas</h1>
          <span>Podemos evaluar y mejorar sus sistemas de manipulación de cal. Podemos ayudarle a minimizar los residuos y a mantener sus sistemas en perfecto funcionamiento mediante actualizaciones, adaptaciones, programación de mantenimiento y piezas.</span>
        </div>
      </div>


      
    </div>
  )
}
