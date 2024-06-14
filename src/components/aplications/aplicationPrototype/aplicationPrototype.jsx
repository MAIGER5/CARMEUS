import React, { useContext, useEffect, useRef, useState } from 'react';
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
  

  useEffect(() => {
    const handleScroll = () => {
      const menu = document.getElementById('menuFijar');
      if (window.scrollY > 500 && window.scrollY <= 2200 && window.innerWidth >= 1240) {
        menu.classList.add(styles.fixedUp);
      } else {
        menu.classList.remove(styles.fixedUp);
        menu.classList.remove(styles.fixedDown);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const caracteristicasRef = useRef(null);
    const productosRef = useRef(null);
    const serviciosRef = useRef(null);
  
    const [activeRef, setActiveRef] = useState(null);

    const scrollToRef = (ref) => {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target) {
              case caracteristicasRef.current:
                setActiveRef(caracteristicasRef);
                break;
              case productosRef.current:
                setActiveRef(productosRef);
                break;
              case serviciosRef.current:
                setActiveRef(serviciosRef);
                break;
              default:
                break;
            }
          }
        });
      }, options);
  
      if (caracteristicasRef.current) observer.observe(caracteristicasRef.current);
      if (productosRef.current) observer.observe(productosRef.current);
      if (serviciosRef.current) observer.observe(serviciosRef.current);
  
      // Cleanup observer on component unmount
      return () => {
        if (caracteristicasRef.current) observer.unobserve(caracteristicasRef.current);
        if (productosRef.current) observer.unobserve(productosRef.current);
        if (serviciosRef.current) observer.unobserve(serviciosRef.current);
      };
    }, []);

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
      <h1 className={styles.titlesComponents} ref={caracteristicasRef}>Caracteristicas & Beneficios</h1>
      <div className={styles.contSecondCard}>
        {/**Barra lateral Izquierda**/}
        <div id='menuFijar' className={styles.menuLeft}>
          <div>
            <p 
              onClick={() => scrollToRef(caracteristicasRef)} 
              className={activeRef === caracteristicasRef ? styles.activeMenuLeftItem: styles.menuLeftItem}>
              Características & Beneficios
            </p>
            <p 
              onClick={() => scrollToRef(productosRef)} 
              className={activeRef === productosRef ? styles.activeMenuLeftItem: styles.menuLeftItem}>
              Productos Relacionados
            </p>
            <p 
              onClick={() => scrollToRef(serviciosRef)} 
              className={activeRef === serviciosRef ? styles.activeMenuLeftItem: styles.menuLeftItem}>
              Servicios Relacionados
            </p>          </div>
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
      <h1 className={styles.titlesComponents} ref={productosRef}>Productos Relacionados</h1>
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
      <h1 className={styles.titlesComponents} ref={serviciosRef}>Servicios Relacionados</h1>
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
