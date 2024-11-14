import React, { useState } from 'react';
import styles from './signIn.module.css';
import { useDispatch } from 'react-redux';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { FormEmployees } from './formEmployees';
import { RegisterUser } from '../registerUser/registerUser';


export const SignIn = () => {

  const dispatch = useDispatch();

  const [ register, setRegister] = useState(false)

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
          !register
          ? <FormEmployees setRegister={setRegister} />
          : <RegisterUser 
              HhandleChangeForm={HhandleChangeForm}
            />
          
        }
      </section>
    </main>
  )
}
