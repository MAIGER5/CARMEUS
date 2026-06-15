import React from 'react';
import styles from './buttomProduct.module.css'
import { useNavigate } from 'react-router-dom';

export const ButtomProduct = ( { infoboton }) => {

  const navigate = useNavigate();

  const handleClickNavigate = (path) => {
    navigate(path);
    setOpenMenuMobil(false)
    resetStates()
  };


  return (
    <button 
      onClick={()=> handleClickNavigate('/contact')}  
      className={`btn btn-primary ${styles.contenedor}`}type="submit">{infoboton} 
    </button>
  )
}
