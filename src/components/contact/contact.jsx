import React, { useState } from 'react';
import styles from './contact.module.css';
import DataContext from '../dataContext/dataContext';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { ScreenForm1 } from '../screens/screenFom1';
import { ButtomOther } from '../buttoms/buttomOther/buttomOther';
import { BsTelephoneForward } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { postContactAction } from '../../Redux/Actions/postContactAction';





export const Contact = () => {

  const dispatch = useDispatch()

  const [ data ] = useState([
    {
      id:1,
      image:'contacto3',
      title:'CONTACTANOS',
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio blanditiis enim consectetur harum magni, corporis et iusto quia quod tenetur aliquid iure possimus eveniet. Magni facere consequuntur cum voluptatem sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, rem consequatur, dolor ver',
    }
  ])

  const [ form, setForm ] = useState({

    name:"",
    company:"",
    phone:"", 
    mail:"",
    country:"",
    mensaje:""

  })

  const handleForm = (event)=>{

    const property = event.target.name;
    const value = event.target.value

    setForm(
      {
        ...form, 
        [property]:value}
    )

  }

  const handleSubmitForm = (event)=>{
    event.preventDefault()

    dispatch(postContactAction(form))

    setForm({

      name:"",
      company:"",
      phone:"", 
      mail:"",
      country:"",
      mensaje:""
    })
  }

  const cld = new Cloudinary({
    cloud: {
        cloudName: 'dbn2bb4e2'
    }
  });

  const myImage = cld.image('banderaColombia'); 

  return (
    <div className={styles.contenedor} >
      <DataContext.Provider value={data}>
        <ScreenForm1/>
      </DataContext.Provider>

      <h1>
        NUESTRO EQUIPO ESTA <br /> AQUI PARA AYUDAR
      </h1>
      
      <div className={styles.containerForm}>
        <form onSubmit={handleSubmitForm} className={styles.formulario}>
          <div>
            <label htmlFor="">Apellido y Nombre</label>
            <input 
              name='name'
              type="text" 
              placeholder='Osorio Jose'
              required
              // size={60}
              value={form.name}
              onChange={handleForm}
            />
          </div>
          <div>
            <label htmlFor="">Compañia</label>
            <input 
              name='company'
              type="text" 
              placeholder='Jose Ltda'
              required
              // size={60}
              value={form.company}
              onChange={handleForm}
            />
          </div>
          <div>
            <label htmlFor="">Número de Teléfono o Celular</label>
            <input 
              name='phone'
              type='number' 
              placeholder='+573013456798'
              required
              // size={60}
              value={form.phone}
              onChange={handleForm}
            />
          </div>
          <div>
            <label htmlFor="">Correo Electrónico</label>
            <input 
              name='mail'
              type="email" 
              placeholder='jose@gmail.com'
              required
              // size={60}
              value={form.mail}
              onChange={handleForm}
            />
          </div>
          <div>
            <label htmlFor="">País</label>
            <input 
              name='country'
              type="text" 
              placeholder='Colombia'
              required
              // size={60}
              value={form.country}
              onChange={handleForm}
            />
          </div>
          <div>
            <label htmlFor="">Mensaje</label>
            <input 
              name='mensaje'
              type="text" 
              placeholder='Estoy interesado en...'
              required
              // size={60}
              value={form.mensaje}
              onChange={handleForm}
            />
          </div>
          <button type='submit'>Enviar</button>
        </form>
        <div className={styles.emergency}>
          <BsTelephoneForward />
          <h1>Algún problema urgente o buscas hablar con alguien</h1>
          <p>Si desea comunicarse con nosotros urgentemente, llame a la oficina más cercana a su ubicación.</p>
          <ButtomOther infoboton={'Encuentranos'}/>
        </div>
      </div>

      <div className={styles.contendeorUbicacion}>
        <h1>Nuestras Oficinas</h1>
        <div className={styles.ubicacion}>
          <div className={styles.imgBandera}>
            <AdvancedImage cldImg={myImage}/>
          </div>
          <p>Información de Ventas & Producto</p>
          <p>ventas"carmeuse.com.co</p>
          <p>+57 4447400</p>
          <p>Kra 39 #5A 95 Edificio Avantgarden, Medellín-Colombia</p>
        </div>
        <div className={styles.ubicacion}>
          <div className={styles.imgBandera}>
            <AdvancedImage cldImg={myImage}/>
          </div>
          <p>Información de Ventas & Producto</p>
          <p>ventas"carmeuse.com.co</p>
          <p>+57 4447400</p>
          <p>Kra 39 #5A 95 Edificio Avantgarden, Medellín-Colombia</p>
        </div>
      </div>
    </div>
  )
}
