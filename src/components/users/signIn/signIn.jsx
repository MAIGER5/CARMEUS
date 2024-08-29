import React, { useState } from 'react';
import styles from './signIn.module.css';
import { useDispatch } from 'react-redux';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { number } from 'prop-types';
import { registerUserAction } from '../../../Redux/Actions/registerUserAction';


export const SignIn = () => {

  const dispatch = useDispatch();

  const [ register, setRegister] = useState(false)

  const [formSignIn, setFormSignIn] = useState({

    mail:'',
    password:''

  });

  const [formSignUp, setFormSignUp] = useState({
    
    name:'',
    phone: number,
    mail:'',
    password1:'',
    password2:'',
    aceptConditions:'',

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

    dispatch(registerUserAction(formSignUp))

    setFormSignUp({
    
      name:'',
      phone: number,
      mail:'',
      password1:'',
      password2:'',
      aceptConditions:'',
  
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

  const cld = new Cloudinary({
    cloud:{
      cloudName:'dbn2bb4e2'
    }
  });

  const myImage = cld.image('asisten')


  return (
    <main className={styles.contenedor}>
      <section className={styles.contSection}>

        <div className={styles.screenForm} id={styles.inicio}> 
          <AdvancedImage cldImg={myImage}/>
        </div>

        {
          !register?
          <form action="" className={styles.textForm}>
            <div>
              <h1>Administradores</h1>
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
            <span>Olvidó la contraseña</span>
            <p>No tiene una cuenta? <span onClick={()=> HhandleChangeForm("no")}>Registrese aquí</span></p>
          </form>:
          <form onSubmit={handleLogin} action="" className={styles.textForm} id={styles.resgistro}>
            <div>
              <h1>Registro</h1>
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
              name='phone'
              placeholder='Número de contacto'
              value={formSignUp.phone}
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
              type="password"
              name='password1'
              placeholder='***********'
              value={formSignUp.password1}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="password"
              name='password2'
              placeholder='***********'
              value={formSignUp.password2}
              onChange={handleFormSignUp}
              required
            />
            <button type='submit'>Registrar</button>
            <span>Sujeto a validación del Administrador</span>
            <p>Tiene una cuenta? <span onClick={()=> HhandleChangeForm("si")}>Inicie sesión aquí</span></p>
          </form>
          
        }
      </section>
    </main>
  )
}
