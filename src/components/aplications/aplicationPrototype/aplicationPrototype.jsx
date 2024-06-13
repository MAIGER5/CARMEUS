import React, { useContext } from 'react';
import styles from './aplicationPrototype.module.css';
import Data2Context from '../../dataContext/data2Context';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';




export const AplicationPrototype = () => {

  const info = useContext(Data2Context);
  
  if (!info || !Array.isArray(info) || info.length === 0) {
    return <div>No data available</div>;
  }


  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  })

  const myimage = cld.image(info[0].image)
  

  return (
    <div className={styles.contenedor}>

      {/* este primer componente es la card con titulo plastico & caucho*/}
      <div className={styles.firstCard}>
        <div>
          <h1>{info[0].title}</h1>
          <span>{info[0].description}</span>
          <div className={styles.boton}>
            <button>Pregunta por un Especialista</button>
          </div>
        </div>
        <div>
          <AdvancedImage cldImg={myimage}/>
        </div>
      </div>

      {/* este es la segunda card donde esta la barra de menu  a la izquierda*/}
      <h1 className={styles.titlesComponents}>Caracteristicas & Beneficios</h1>
      <div className={styles.contSecondCard}>
        {/**Barra lateral Izquierda**/}
        <div id={styles.menuFijar} className={styles.menuLeft}>
          <div>
            <p>Características & Beneficios</p>
            <p>Diseño Técnico</p>
            <p>Productos Relacionados</p>
          </div>
          <div>
            <span>¿Tiene alguna pregunta sobre esta aplicación? Pregunte a nuestros especialistas.  </span>
            <button>CONTACTANOS</button>
          </div>
        </div>
        {/**Termina aqui**/}

        {/**Empieza aqui Componente de la derecha feature and benefits**/}
        <div className={styles.featureBenefit}>
          <div className={styles.feuatures}>
            <h1>Caracteristicas</h1>
            <ul>
              {
                info[1].caracteristic.length > 0 ?
                info[1].caracteristic.map((ele, index)=> ( <li key={index}>{ele}</li>))
                : <li>No hay Caracteristicas</li>
              }
            </ul>
          </div>
          <div className={styles.benefits}>
            <h1>Beneficios</h1>
            <ul>
              {
                info[1].benefits.length > 0 ?
                info[1].benefits.map((ele, index)=> ( <li key={index}>{ele}</li>))
                : <li>No hay benefits</li>
              }
            </ul>
          </div>
        </div>
        {/**Termina aqui**/}
      </div>

      {/**Empieza aqui componente de productos relacionados**/}
      <h1 className={styles.titlesComponents}>Productos Relacionados</h1>
      <div className={styles.productRelationed}>
        {
          info[2].data.length > 0?
          info[2].data.map((ele, index)=> (
            <div className={styles.cardProductRelationed} key={index}>
              <div> 
                <AdvancedImage cldImg={cld.image(ele.image)}/>
              </div>
              <div>
                <h1>{ele.title}</h1>
                <span>{ele.description}</span>
              </div>
            </div>
          ))
          : <p>Error No hay Informacion</p>
        }
      </div>
      {/**Termina aqui**/}

      {/**Empieza aqui componente de servicos relacionados**/}
      <h1 className={styles.titlesComponents}>Servicios Relacionados</h1>
      <div className={styles.productRelationed}>
      {
          info[3].data.length > 0?
          info[3].data.map((ele, index)=> (
            <div className={styles.cardProductRelationed} key={index}>
              <div> 
                <AdvancedImage cldImg={cld.image(ele.image)}/>
              </div>
              <div>
                <h1>{ele.title}</h1>
                <span>{ele.description}</span>
              </div>
            </div>
          ))
          : <p>Error No hay Informacion</p>
        }
      </div>
      {/**Termina aqui**/}


    </div>
  )
}
