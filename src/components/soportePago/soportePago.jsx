import React, { useState } from 'react';
import styles from './soportePago.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { number } from 'prop-types';
import { useSelector } from 'react-redux';


export const SoportePago = () => {

  const [formRetencion, setFormRetencion] = useState({

    client:'',
    user:number,
    producto:'',
    soporte:''

  });

  const selectorLoginClient = useSelector(state => state.login.tokenClient) || null
  const selectorLoginEmployee = useSelector(state => state.loginEmployee.tokenEmployee) || null

  const handleOptionView = ()=>{

    if (selectorLoginClient) {
      return '/sigIn/dashBoardClient'
    } else if(selectorLoginEmployee){
      return '/sigIn/dashBoardEmployee'
    } else {
      return '/carmeuseMas'
    }

  }


  const HhandleChangeForm = (event)=>{
    event.preventDefault();

    const property = event.target.name;
    const value = event.target.value;

    setFormRetencion({...formRetencion, [property]:value})
  }

  const handleSubmitForm = ()=>{

  }

  return (
    <div className={styles.contenedor}>
      <p><Link to={handleOptionView()} className={styles.linkes}>Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></Link></p>
      <h1>Envía tu Soporte de Pago</h1>

      <form action="">
        <input className={styles.celdasInputs}
          type="text"
          name='client'
          value={formRetencion.client}
          placeholder='Nombre completo'
          onChange={HhandleChangeForm}
          required
        />
        <input className={styles.celdasInputs}
          type="number"
          name='user'
          value={formRetencion.user}
          placeholder='Nit o Cédula'
          onChange={HhandleChangeForm}
          required
        />
        <input className={styles.celdasInputs}
          type="text"
          name='producto'
          value={formRetencion.producto}
          placeholder='Producto'
          onChange={HhandleChangeForm}
          required
        />
        <span>Adjuntar soporte de pago</span>
        <input id={styles.adjuntar}
          type='file'
          capture='environment'
          name='soporte'
          value={formRetencion.soporte}
          onChange={HhandleChangeForm}
          required
        />
      <button>Envíar</button>
      </form>



    </div>
  )
}
