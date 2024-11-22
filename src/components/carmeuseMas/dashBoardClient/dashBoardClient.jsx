import React, { useEffect, useState } from 'react';
import styles from './dashBoardClient.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import dataCarmeuseMas from '../../utils/data/dataCarmeuseMas';
import { useSelector } from 'react-redux';


export const DashBoardClient = () => {

  const navigate = useNavigate();

  const data = dataCarmeuseMas.dataDashBoardClient

  const selectorStateTokenClient = useSelector(state => state.login.tokenClient)

  const hangleNavigate =(path)=>{
    navigate(path)
  };

  useEffect(()=>{
    selectorStateTokenClient === null ? navigate('/sigIn'):''
  },[selectorStateTokenClient])

  return (
    <div className={styles.contenedor}>

      <div className={styles.firstColumn}>
        <p>Bienvenido al Módulo Clientes de Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></p>
        <span>Todos los servicios en un solo lugar</span>
        <div className={styles.servicesColumn}>
          {
            data?
            data.map((ele)=>(
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
