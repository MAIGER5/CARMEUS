import React from 'react';
import styles from './formPay.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




export const FormPay = () => {

  const navigate = useNavigate();
  
  const handleNavigate = (path)=>{
    navigate(path)
  }

  const selectorLoginClient = useSelector(state => state.login.tokenClient) || null
  const selectorLoginEmployee = useSelector(state => state.loginEmployee.tokenEmployee) || null

  const handleOptionView = ()=>{
    if (selectorLoginClient) {
      return '/sigIn/dashBoardClient'
    } else if (selectorLoginEmployee) {
      return '/sigIn/dashBoardEmployee'
    } else {
      return '/carmeuseMas'
    }
    
    // selectorLoginClient
    //   ? '/sigIn/dashBoardClient'
    //   : selectorLoginEmployee
    //   ? '/sigIn/dashBoardEmployee'
    //   : '/carmeuseMas'
  }
  const opcionViewCarmeuse = handleOptionView()

  return (
    <div className={styles.contenedor}>
      <p><Link to={opcionViewCarmeuse} className={styles.linkes}>Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></Link></p>
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
