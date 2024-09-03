import React, { useState } from 'react';
import styles from './soportePago.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { number } from 'prop-types';


export const SoportePago = () => {

  const [formRetencion, setFormRetencion] = useState({

    client:'',
    user:number,
    producto:'',
    soporte:''

  });

  const nagivate = useNavigate();

  const handleNavigate = (path)=>{
    nagivate(path)
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
      <p onClick={()=> handleNavigate('/carmeuseMas')} >Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></p>
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
