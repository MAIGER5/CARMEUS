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
      description: 'En Carmeuse Colombia, nos diferenciamos por ir más allá de la simple provisión de cal. Somos un socio estratégico comprometido con el éxito de nuestros clientes en cada etapa de su proceso productivo. Ofrecemos un servicio integral que abarca desde la gestión del pedido hasta la entrega de cal y productos minerales, complementado con la optimización de sistemas de manejo. Todo ello con el firme propósito de garantizar la máxima eficiencia y eficacia operativa' ,
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
      image: 'servicio_Cliente',
      title: 'Servicio al Cliente',
      description: 'En Carmeuse Colombia, nuestro equipo de Servicio al Cliente está dedicado a brindar una atención oportuna, cercana y eficiente. Somos el punto de contacto principal para la gestión de pedidos, seguimiento de solicitudes y resolución de inquietudes, asegurándonos de que cada cliente reciba una respuesta clara y en el menor tiempo posible.'
    },
    {
      id: 2,
      image: 'carro',
      title: 'Asistencia técnica',
      description: 'Nuestro equipo de expertos técnicos está disponible para asesorar y verificar la calidad de nuestros materiales directamente en las instalaciones de nuestros clientes. A través de visitas especializadas, inspeccionamos los procesos productivos para identificar oportunidades de mejora y optimización.',
    },
    {
      id: 4,
      image: 'Pedido',
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
