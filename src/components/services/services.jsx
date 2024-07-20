import React, { useState } from 'react'
import styles from './services.module.css';
import DataContext from '../dataContext/dataContext';
import { ScreenForm1 } from '../screens/screenFom1';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';






export const Services = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  })


  const [ dataScreenServ, setDataScreenServ ] = useState([
    {
      id:1,
      image: 'ocho',
      title: "SERVICIOS",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam  quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam' ,
    }
  ]);

  const [ dataServices, setDataServices] = useState([
    {
      id: 1,
      image: 'logistic',
      title: 'Carga y Logística',
      description: 'Permita que nuestro equipo minimice las molestias de la gestión de transporte y logística. Nuestros expertos en cadena de suministro tienen alianzas con transportistas cualificados para asegurar que el producto llegue al lugar adecuado en el momento adecuado.',
    },
    {
      id: 2,
      image: 'tecnic',
      title: 'Asistencia técnica',
      description: 'Nuestros equipos técnicos pueden asesorar y comprobar la calidad del material, visitando las instalaciones de los clientes para inspeccionar sus procesos. A menudo, realizamos recomendaciones que ahorran dinero y mejoran las operaciones.',
    },
    {
      id: 3,
      image: 'carro',
      title: 'Sistema de Transporte',
      description: [
        'Camiones 10 Ton',
        'Camiones doble troque 18 Ton',
        'Tractomulas 34 Ton',
        'Camiones sisterna',
      ]
    },
    {
      id: 4,
      image: 'asisten',
      title: 'Asistencia para pedidos y programación',
      description: 'Desde los pedidos rutinarios hasta las necesidades urgentes, nuestros coordinadores de planificación de suministros trabajan para conseguirle el producto que necesita'
    },

  ]);


  return (
    <div className={styles.contenedor}>

      <DataContext.Provider value={dataScreenServ}>
        <ScreenForm1/>
      </DataContext.Provider>

      <div className={styles.productRelationed}>
        {/* <h1 className={styles.titlesComponents} >Servicios Relacionados</h1> */}
        {
          dataServices.length > 0?
          dataServices.map((ele, index)=> (
            <div className={styles.cardProductRelationed} key={index}>
              <div className={styles.cardImg}> 
                <AdvancedImage cldImg={cld.image(ele.image)}/>
              </div>
              <div>
                <h1>{ele.title}</h1>
                <span>{
                  Array.isArray(ele.description)? 
                  ele.description.map((item, ind)=> (<li key={ind}>{item}</li>))
                  : ele.description
                }</span>
              </div>
            </div>
          ))
          : <p>Error No hay Informacion</p>
        }
      </div>
    </div>
  )
}
