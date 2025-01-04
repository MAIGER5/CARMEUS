import React, { useEffect, useState } from 'react';
import styles from '../signIn/signIn.module.css';
import { number } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { postEmplyeeAction } from '../../../Redux/Actions/postEmployeeAction';
import { Modals } from '../../modals/modals';
import { ModalsError } from '../../modals/modalsError';
import { IoCloseOutline } from "react-icons/io5";
import { cleanClient } from '../../../Redux/Actions/postClientAction';
import { useNavigate } from 'react-router-dom';


export const RegisterUser = ({HhandleChangeForm}) => {

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const selectorResponseEmployee = useSelector(state => state.employee.response)
  const selectorErrorEmployee = useSelector(state => state.employee.ResponseError) || []

  const [ responseEmployee, setResponseEmployee ] = useState()
  const [ errorEmployee, setErrorEmployee ] = useState()
  
  const [formSignUp, setFormSignUp] = useState({
    
    name:'',
    cedula: number,
    mail:'',
    phone: number,
    password:'',

  });

  const handleFormSignUp = (event)=>{
    event.preventDefault()

    const property = event.target.name;
    const value = event.target.value;

    setFormSignUp({
      ...formSignUp,
      [property]:value,
    })
  }


  const handleLogin = (event)=>{
    event.preventDefault();

    dispatch(postEmplyeeAction(formSignUp))

    setFormSignUp({
    
      name:'',
      cedula: number,
      mail:'',
      phone: number,
      password:'',
  
    })
  }

  const handleNavigate = (path)=>{
    navigate(path)
  }

  const handleClickCloseModal = ()=>{
    setResponseEmployee(undefined)
    setErrorEmployee(undefined)
    navigate('/sigIn')
  }

  useEffect(()=>{
    if (selectorResponseEmployee) {
      setResponseEmployee(selectorResponseEmployee)
    }
  }, [selectorResponseEmployee]);

  useEffect(()=>{
    if (selectorErrorEmployee.length) {
      setErrorEmployee(selectorErrorEmployee)
    }
    
  }, [selectorErrorEmployee]);

  useEffect(()=>{
    return () => {
      setErrorEmployee(undefined);
      dispatch(cleanClient())
    };
    
  }, [dispatch]);

  const infoModal = {
    text1:'Empleado creado', 
    text2:'Muchas gracias por registrarse. Usted recibira un mensaje de confirmaciòn a su correo'
  }

  const infoModalError = {
    text1:'Error en la creación del Empleado', 
    text2:'Tener en cuenta los siguientes parametros'
  }
  
  return (
    <form onSubmit={handleLogin} action="" className={styles.textForm} id={styles.resgistro}>
      <div>
        <h1 className={styles.titleRegister}>Registro de Empleados</h1>
      </div>
      <input 
        type="text"
        name='name'
        placeholder='Nombre completo'
        value={formSignUp.name}
        onChange={handleFormSignUp}
        required
      />
      <input 
        type="number"
        name='cedula'
        placeholder='Número de cédula'
        value={formSignUp.cedula}
        onChange={handleFormSignUp}
        required
      />
      <input 
        type="email"
        name='mail'
        placeholder='Correo electrónico'
        value={formSignUp.mail}
        onChange={handleFormSignUp}
        required
      />
      <input 
        type="number"
        name='phone'
        placeholder='Número de contacto'
        value={formSignUp.phone}
        onChange={handleFormSignUp}
        required
      />
      <input 
        type="password"
        name='password'
        placeholder='Contraseña mínimo 8 caracteres'
        value={formSignUp.password}
        onChange={handleFormSignUp}
        required
      />
      <button type='submit'>Registrar</button>
      <span>Sujeto a validación del Administrador</span>
      <p>Tiene una cuenta? <span onClick={()=> HhandleChangeForm("si")}>Inicie sesión aquí</span></p>
      <div className={`${responseEmployee? styles.modals: styles.modals1}`}>
          <Modals response={responseEmployee} infoModal={infoModal} />
          <div className={styles.close} onClick={handleClickCloseModal}>
            <IoCloseOutline onClick={()=>handleNavigate('/sigIn')}/>
          </div>
        </div>
        <div className={`${errorEmployee? styles.modals: styles.modals1}`}>
          <ModalsError errors={errorEmployee} infoModalError={infoModalError} />
          <div className={styles.close} onClick={handleClickCloseModal}>
            <IoCloseOutline />
          </div>
        </div>
    </form>
  )
}
