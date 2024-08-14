import React, { useState } from 'react';
import styles from './carmeuseMas.module.css';
import dataScreen from '../utils/data/dataScreen';
import DataContext from '../dataContext/dataContext';
import { ScreenForm2 } from '../screens/screenForm2';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import dataCarmeuseMas from '../utils/data/dataCarmeuseMas';


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
        <form action="" className={styles.formPagos}>
          <h1>Pagos PayU</h1>
          <div className={styles.nameApellido}>
            <input 
              type="text"
              name='nombre'
              placeholder='Nombres'
              required
            />
            <input 
              type="text"
              name='apellido'
              placeholder='Apellidos'
              required
            />
          </div>
          <input 
            type="number"
            name='nit'
            placeholder='Nit o Cedula'
            required
            color='#fafafa'
          />
          <input 
            type="email"
            name='mail'
            placeholder='Correo electrónico'
            required
          />
          <input 
            type="number"
            name='monto'
            placeholder='Monto'
            required
          />
          <button>Pagar</button>
        </form>
      </div>
      
    </div>
  )
}
