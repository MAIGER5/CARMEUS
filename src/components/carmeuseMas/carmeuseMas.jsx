import React, { useState } from 'react';
import styles from './carmeuseMas.module.css';
import dataScreen from '../utils/data/dataScreen';
import DataContext from '../dataContext/dataContext';
import { ScreenForm2 } from '../screens/screenForm2';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import dataCarmeuseMas from '../utils/data/dataCarmeuseMas';
import imagenis from '../utils/icon/fer.jpeg'
import imagenis2 from '../utils/icon/ferreter.jpg'
import { FormPay } from './formPay/formPay';


export const CarmeuseMas = () => {

  // const [data] = useState(dataScreen.carmeuseMasScreen);

  const dataServiceMas = dataCarmeuseMas.dataServiceMas


  return (
    <div className={styles.contenedor}>

      {/* <DataContext.Provider value={data}>
        <ScreenForm2/>
      </DataContext.Provider> */}

      <div className={styles.firstColumn}>
        <p>Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></p>
        <h1>Todos los servicios en</h1>
        <h1>un solo lugar</h1>
        <span>Selecciona el servicio que se ajuste a su necesidad</span>
        <div className={styles.servicesColumn}>
          {
            dataServiceMas?
            dataServiceMas.map((ele)=>(
              <div className={styles.cardServices}>
                <div>
                  <div className={styles.containerIcon}>
                    <img src={ele.icon} alt="" />
                  </div>
                </div>
                <div className={styles.contentServices}>
                  <p>{ele.title}</p>
                  {/* <p>{ele.description}</p> */}
                  <p>Leer mas</p>
                </div>
              </div>
            )) :''
          }
        </div>
      </div>


      <div className={styles.secondColumn}>
        {/* <div className={styles.ferretero}>
          <div className={styles.screenFerretero}></div>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={imagenis} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={imagenis2} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={imagenis} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}
        <FormPay/>
      </div>
      
    </div>
  )
}
