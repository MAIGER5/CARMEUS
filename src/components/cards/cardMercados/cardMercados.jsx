import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom"
import styles from './cardMercados.module.css';
import DataContext from '../../dataContext/dataContext';




export const CardMercados = () => {

  const navigate = useNavigate();

  const data = useContext(DataContext);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const handleClickNavigate = (path)=>{
    navigate(path);
  }

  return (
    <div className={styles.container}>
      <h1>MERCADOS RELACIONADOS</h1>
      <section className={styles.contenedor}>
        {
          data?
          data.map((ele, index)=> (
            <div onClick={()=> handleClickNavigate(ele.link)} key={index} className={styles.cards}>
              {ele.icon}
              <p>{ele.title}</p>
            </div>
          )):''
        }
      </section>
    </div>
  )
}
