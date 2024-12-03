import React, { useState } from 'react';
import styles from './factura.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { number } from 'prop-types';
import { useSelector } from 'react-redux';


export const Factura = () => {

  const [formFactura, setformFactura] = useState({

    user:number,
    password:''

  });

  const selectorLoginClient = useSelector(state => state.login.tokenClient) || null
  const selectorLoginEmployee = useSelector(state => state.loginEmployee.tokenEmployee) || null

  const handleOptionView = ()=>{
    return selectorLoginClient
      ? '/sigIn/dashBoardClient'
      : selectorLoginEmployee
      ? '/sigIn/dashBoardEmployee'
      : '/carmeuseMas'
  }

  const nagivate = useNavigate();

  const handleNavigate = (path)=>{
    nagivate(path)
  }

  const HhandleChangeForm = (event)=>{
    event.preventDefault();

    const property = event.target.name;
    const value = event.target.value;

    setformFactura({...formFactura, [property]:value})
  }

  const handleSubmitForm = ()=>{

  }

  return (
    <div className={styles.contenedor}>
      <p onClick={()=> handleNavigate(handleOptionView())} >Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></p>
      <h1>Facturas</h1>

      <form action="">
        <input 
          type="number"
          name='user'
          value={formFactura.user}
          placeholder='Nit o Cédula'
          onChange={HhandleChangeForm}
          required
        />
        <input 
          type="text"
          name='password'
          value={formFactura.password}
          placeholder='Contraseña'
          onChange={HhandleChangeForm}
          required
        />
        <button>Buscar</button>

      </form>

      <span>Resultado ()</span>

      <div className={styles.resultado}> 

      </div>

    </div>
  )
}
