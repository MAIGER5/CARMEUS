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
      description: 'Carmeuse Colombia es más que un proveedor de cal. Nos comprometemos a apoyar a nuestros clientes en cada paso del proceso. Desde el pedido, ofrecemos un servicio integral que incluye la entrega de cal y productos minerales, así como la optimización de sistemas de manejo. Nuestro objetivo es garantizar eficiencia y eficacia en cada etapa, contribuyendo al éxito y sostenibilidad de sus operaciones.' ,
    }
  ]);

  const [ dataServices, setDataServices] = useState([
    {
      id: 1,
      image: 'logistic',
      title: 'Logística y Despachos',
      description: 'En Carmeuse Colombia nuestro equipo se asegura de cumplir con su pedido de manera eficiente y puntual. Nuestros equipos de planificación de producción, coordinadores de planificación de suministros y analistas de transporte trabajan en estrecha colaboración para garantizar una ejecución impecable. Contamos con una amplia red sólida de asociaciones con transportistas orientados a soluciones, lo que nos permite ofrecer un servicio integral y confiable en cada etapa del proceso.',
    },
    {
      id: 3,
      image: 'carro',
      title: 'Servicio al Cliente',
      description: 'En Carmeuse Colombia, nuestro equipo se dedica a cumplir con su pedido de manera eficiente y puntual. Los equipos de planificación de producción, coordinación de suministros y análisis de transporte trabajan juntos para asegurar una ejecución impecable. Gracias a nuestra red de asociaciones con transportistas orientados a soluciones, ofrecemos un servicio integral y confiable en cada etapa del proceso.'
    },
    {
      id: 2,
      image: 'tecnic',
      title: 'Asistencia técnica',
      description: 'Nuestros equipos técnicos pueden asesorar y comprobar la calidad del material, visitando las instalaciones de los clientes para inspeccionar sus procesos. A menudo, realizamos recomendaciones que ahorran dinero y mejoran las operaciones.',
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
