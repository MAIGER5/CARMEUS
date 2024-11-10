import React, { useState } from 'react';
import styles from './carmeuseMas.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import dataCarmeuseMas from '../utils/data/dataCarmeuseMas';
import { useNavigate } from 'react-router-dom';


export const CarmeuseMas = () => {

  const navigate = useNavigate();

  // const [data] = useState(dataScreen.carmeuseMasScreen);

  const dataServiceMas = dataCarmeuseMas.dataServiceMas

    const hangleNavigate =(path)=>{
      navigate(path)
    }

  return (
    <div className={styles.contenedor}>

      {/* <DataContext.Provider value={data}>
        <ScreenForm2/>
      </DataContext.Provider> */}

      <div className={styles.firstColumn}>
        <p>Bienvenido a Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></p>
        <span>Todos los servicios en un solo lugar</span>
        <div className={styles.servicesColumn}>
          {
            dataServiceMas?
            dataServiceMas.map((ele)=>(
              <div key={ele.id} onClick={()=>hangleNavigate(ele.link)} className={styles.cardServices}>
                <div className={styles.containerIcon}>
                  <img src={ele.icon} alt="" />
                </div>
                <p>{ele.title}</p>
              </div>
            )) :''
          }
        </div>
      </div>
      
    </div>
  )
}
