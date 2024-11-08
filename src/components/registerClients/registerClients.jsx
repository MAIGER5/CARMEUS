import React, { useEffect, useState } from 'react';
import styles from './registerClients.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { postClientAction } from '../../Redux/Actions/postClientAction';
import { Modals } from '../modals/modals';
import { IoCloseOutline } from "react-icons/io5";




export const RegisterClients = () => {

  const nagivate = useNavigate();

  const dispatch = useDispatch();

  const selectorSuccessClient = useSelector(state => state.client.success)
  const selectorResponseClient = useSelector(state => state.client.response)
  


  const [ register, setRegister] = useState(false)

  const [ responseClient, setResponseClient ] = useState()

  const [formSignIn, setFormSignIn] = useState({

    mail:'',
    password:''

  });

  const [formSignUp, setFormSignUp] = useState({
    
    firstName:'',
    secondName:'',
    firstLastName:'',
    secondLastName:'',
    company:'',
    nit: '',
    mail:'',
    phone: '',
    password1:'',
    password2:'',
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

  const handleLogin = (event)=>{
    event.preventDefault();

    dispatch(postClientAction(formSignUp))

    setFormSignUp({
    
      firstName:'',
      secondName:'',
      firstLastName:'',
      secondLastName:'',
      company:'',
      nit: '',
      mail:'',
      phone: '',
      password1:'',
      password2:'',
    })
  }

  const handleFormSignUp = (event)=>{
    event.preventDefault()

    const property = event.target.name;
    const value = event.target.value;

    setFormSignUp({
      ...formSignUp,
      [property]:value,
    })
  }

  const HhandleChangeForm = (event)=>{
    event === 'no'
    ? setRegister(true)
    : setRegister(false)
  }

  const handleNavigate = (path)=>{
    nagivate(path)
  }

  const handleClickCloseModal = ()=>{
    setResponseClient(undefined)
  }

  useEffect(()=>{
    if (selectorResponseClient) {
      setResponseClient(selectorResponseClient)
    }
  }, [selectorResponseClient]);

  useEffect(() => {
    if (responseClient) {
      console.log(responseClient);
    }
  }, [responseClient]); // Se ejecuta solo cuando cambia responseClient

  const cld = new Cloudinary({
    cloud:{
      cloudName:'dbn2bb4e2'
    }
  });

  const myImage = cld.image('contacto2')


  return (
    <main className={styles.contenedor}>

      <p onClick={()=> handleNavigate('/carmeuseMas')} >Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></p>

      <section className={styles.contSection}>

        <div className={styles.screenForm} id={styles.inicio}> 
          <AdvancedImage cldImg={myImage}/>
        </div>

        <form onSubmit={handleLogin} className={styles.textForm} id={styles.resgistro}>
            <div>
              <h1>Registro de Clientes</h1>
            </div>
            <input 
              type="text"
              name='firstName'
              placeholder='Primer nombre'
              value={formSignUp.firstName}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="text"
              name='secondName'
              placeholder='Segundo nombre'
              value={formSignUp.secondName}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="text"
              name='firstLastName'
              placeholder='Primer apellido'
              value={formSignUp.firstLastName}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="text"
              name='secondLastName'
              placeholder='Segundo apellido'
              value={formSignUp.secondLastName}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="text"
              name='company'
              placeholder='Nombre de la empresa'
              value={formSignUp.company}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="number"
              name='nit'
              placeholder='Nit o Cédula'
              value={formSignUp.nit}
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
              name='password1'
              placeholder='Crea una contraseña'
              value={formSignUp.password1}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="password"
              name='password2'
              placeholder='Repite la contraseña'
              value={formSignUp.password2}
              onChange={handleFormSignUp}
              required
            />
            <button type='submit'>Registrar</button>
            <span>Sujeto a validación del Administrador</span>
            <p>Tiene una cuenta? <span onClick={()=> HhandleChangeForm("si")}>Inicie sesión aquí</span></p>
        </form>
        <div className={`${responseClient? styles.modals: styles.modals1}`}>
          <Modals response={responseClient}/>
          <div className={styles.close} onClick={handleClickCloseModal}>
            <IoCloseOutline />
          </div>
        </div>
      </section>
    </main>
  )
}
