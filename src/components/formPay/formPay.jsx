import React from 'react';
import styles from './formPay.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




export const FormPay = () => {

  const navigate = useNavigate();
  
  const handleNavigate = (path)=>{
    navigate(path)
  }

  const selectorLoginClient = useSelector(state => state.login.tokenClient) || null
  const selectorLoginEmployee = useSelector(state => state.loginEmployee.tokenEmployee) || null

  const handleOptionView = ()=>{
    return selectorLoginClient
      ? '/sigIn/dashBoardClient'
      : selectorLoginEmployee
      ? '/sigIn/dashBoardEmployee'
      : '/carmeuseMas'
  }

  return (
    <div className={styles.contenedor}>
      <p onClick={()=> handleNavigate(handleOptionView())}>Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></p>
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
          placeholder='Nit o Cédula'
          required

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
  )
}
