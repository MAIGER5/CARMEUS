import React, { useEffect, useState } from 'react';
import styles from './dashBoardEmployee.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import dataCarmeuseMas from '../../utils/data/dataCarmeuseMas';
import { useSelector } from 'react-redux';


export const DashBoardEmployee = () => {

  const navigate = useNavigate();

  const data = dataCarmeuseMas.dataDashBoardEmployee

  const selectorStateTokenClient = useSelector(state => state.login.tokenClient);
  const selectorStateTokenEmployee = useSelector(state => state.loginEmployee.tokenEmployee);
  

  const hangleNavigate =(path)=>{
    navigate(path)
  };

  useEffect(()=>{
    selectorStateTokenClient === null && selectorStateTokenEmployee === null  ? navigate('/sigIn'):''
  },[selectorStateTokenClient, selectorStateTokenEmployee])

  return (
    <div className={styles.contenedor}>

      <div className={styles.firstColumn}>
        <p>Bienvenido al Módulo Empleados de Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></p>
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
