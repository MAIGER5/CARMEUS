import React, { useState } from 'react';
import styles from './retencion.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { number } from 'prop-types';


export const Retencion = () => {

  const [formRetencion, setFormRetencion] = useState({

    user:number,
    password:''

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
      <h1>Documento de Retención</h1>

      <form action="">
        <input 
          type="number"
          name='user'
          value={formRetencion.user}
          placeholder='Nit o Cédula'
          onChange={HhandleChangeForm}
          required
        />
        <input 
          type="text"
          name='password'
          value={formRetencion.password}
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
