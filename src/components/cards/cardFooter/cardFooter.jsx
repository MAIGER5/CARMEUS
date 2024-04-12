import React, { useContext } from 'react';
import styles from './cardFooter.module.css'
import DataContext from '../../dataContext/dataContext';
import { ButtomProduct } from '../../buttoms/buttomProducts/buttomProduct';
// import { ButtomProduct } from '../../buttoms/buttomProducts/buttomProduct';

export const CardFooter = () => {

  const data = useContext(DataContext)


  return (
    <div className={styles.contenedor}>

      {
        data.map((dt)=> 
          dt.view === "contact"
          ? (
              <div key={dt.id}>
                <h2>{dt.title}</h2>
                <p>{dt.title}</p>
                <ButtomProduct infoboton={dt.buttomInfo}/>
              </div>
            )
          : null)
      }
        
        
        {/* <ButtomProduct infoboton={dataInfo.buttomInfo}/> */}
    </div>
  )
}
