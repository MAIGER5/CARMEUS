import React, { useState } from 'react';
import styles from './signIn.module.css'
import { useNavigate } from 'react-router-dom';

export const FormEmployees = ({setRegister}) => {

  const navigate = useNavigate()

  const [ titleEmployee, setTitleEmployee ] = useState(false);
  const [ titleClient, setTitleClient ] = useState(true);

  const [formSignIn, setFormSignIn] = useState({

    mail:'',
    password:''

  });

  const handleFormSignIn = (event)=>{

    event.preventDefault()

    const property = event.target.name;
    const value = event.target.value

    setFormSignIn({
      ...formSignIn,
      [property]:value
    })

  }

  const handleTitleEmployee = () =>{
    setTitleEmployee(true)
    setTitleClient(false)
  }

  const handleTitleClient = () =>{
    setTitleClient(true)
    setTitleEmployee(false)
  }

  const HhandleChangeForm = (event)=>{
    event === 'no'
    ? setRegister(true)
    : setRegister(false)
  }

  const handleNavigate = (path) =>{
    navigate(path)
  }

  return (
    <form action="" className={styles.textForm}>
      <div className={styles.titles}> 
        <h1 onClick={handleTitleClient} className={titleClient? styles.titlesAltern:styles.titlesAltern2}>Clientes</h1>
        <h1 onClick={handleTitleEmployee} className={titleEmployee? styles.titlesAltern: styles.titlesAltern2} >Empleados</h1>
      </div>
      <input 
        type="email"
        name='mail'
        placeholder='Correo electrónico'
        value={formSignIn.mail}
        onChange={handleFormSignIn}
        required
      />
      <input 
        type="password"
        name='password'
        placeholder='***********'
        value={formSignIn.password}
        onChange={handleFormSignIn}
        required
      />
      <button>Iniciar</button>
      <p>Si es <strong className={styles.strong}>Empelado</strong> y no tiene una cuenta? <span onClick={()=> HhandleChangeForm("no")}>Registrese aquí</span></p>
      <p>Si es <strong className={styles.strong}>Cliente</strong> y no tiene una cuenta? <span onClick={()=> handleNavigate('/registerClients')}>Registrese aquí</span></p>
    </form>
  )
}
