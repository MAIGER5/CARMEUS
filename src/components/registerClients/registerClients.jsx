import React, { useEffect, useState } from 'react';
import styles from './registerClients.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { cleanClient, postClientAction } from '../../Redux/Actions/postClientAction';
import { Modals } from '../modals/modals';
import { IoCloseOutline } from "react-icons/io5";
import { ModalsError } from '../modals/modalsError';




export const RegisterClients = () => {

  const nagivate = useNavigate();

  const dispatch = useDispatch();

  const selectorSuccessClient = useSelector(state => state.client.success)
  const selectorResponseClient = useSelector(state => state.client.response)
  const selectorErrorClient = useSelector(state => state.client.ResponseError) || []
  
  const infoModal = {
    text1:'Cliente creado', 
    text2:'Muchas gracias por registrarse. Usted recibira un mensaje de confirmaciòn a su correo'
  }

  const infoModalError = {
    text1:'Error en la creación del cliente', 
    text2:'Tener en cuenta los siguientes parametros'
  }

  const [ register, setRegister] = useState(false)

  const [ responseClient, setResponseClient ] = useState()
  const [ errorClient, setErrorClient ] = useState()

  const [formSignIn, setFormSignIn] = useState({

    mail:'',
    password:''

  });

  const [formSignUp, setFormSignUp] = useState({
    
    company:'',
    contacto:'',
    nit: '',
    mail:'',
    phone: '',
    ciudad:'',
    password:'',
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
    
      company:'',
      contacto:'',
      nit: '',
      mail:'',
      phone: '',
      ciudad:'',
      password:'',
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
    setErrorClient(undefined)
  }

  useEffect(()=>{
    if (selectorResponseClient) {
      setResponseClient(selectorResponseClient)
    }
  }, [selectorResponseClient]);

  useEffect(()=>{
    if (selectorErrorClient.length) {
      setErrorClient(selectorErrorClient)
    }
    
  }, [selectorErrorClient]);

  useEffect(()=>{
    return () => {
      setErrorClient(undefined);
      dispatch(cleanClient())
    };
    
  }, [dispatch]);

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
              name='company'
              placeholder='Nombre / Razon social'
              value={formSignUp.company}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="text"
              name='contacto'
              placeholder='Nombre completo de contacto'
              value={formSignUp.contacto}
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
              placeholder='Teléfono de contacto'
              value={formSignUp.phone}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="text"
              name='ciudad'
              placeholder='Paìs y Ciudad'
              value={formSignUp.ciudad}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="password"
              name='password'
              placeholder='Crea una contraseña'
              value={formSignUp.password}
              onChange={handleFormSignUp}
              required
            />
            <button type='submit'>Registrar</button>
            <span>Sujeto a validación del Administrador</span>
            <p>Tiene una cuenta? <span onClick={()=> handleNavigate('/sigIn')}>Inicie sesión aquí</span></p>
        </form>
        <div className={`${responseClient? styles.modals: styles.modals1}`}>
          <Modals response={responseClient} infoModal={infoModal} />
          <div className={styles.close} onClick={handleClickCloseModal}>
            <IoCloseOutline onClick={()=>handleNavigate('/sigIn')}/>
          </div>
        </div>
        <div className={`${errorClient? styles.modals: styles.modals1}`}>
          <ModalsError errors={errorClient} infoModalError={infoModalError} />
          <div className={styles.close} onClick={handleClickCloseModal}>
            <IoCloseOutline />
          </div>
        </div>
      </section>
    </main>
  )
}
