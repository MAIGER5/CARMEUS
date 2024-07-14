import React, { useState } from 'react';
import styles from './animalCare.module.css';
import Data2Context from '../../../dataContext/data2Context';
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype';



export const AnimalCare = () =>{


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'CUIDADO ANIMAL',
      description: 'Un buen cuidado de los animales abarca una serie de aspectos clave, como la nutrición, el bienestar y las consideraciones medioambientales. Unos cuidados equilibrados no sólo garantizan la salud física de sus animales, sino que también fomentan su bienestar mental, lo que se traduce en una vida más feliz y vital. Los productos de Carmeuse Colombia contribuyen a la "BUENA NUTRICIÓN, HIGIENE DE LOS ESTABLOS Y PREVENCION DE LA ACIDIFICACION DE LOS ESTANQUES PISCÍCOLAS". Consulte siempre a nuestros profesionales o expertos en cuidado animal para obtener consejos específicos adaptados a sus circunstancias particulares.',
      image: 'cabra',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'El calcio desempeña un papel fundamental en la absorción de nutrientes.',
        'Los minerales para aves de corral son clave para la formación de la cáscara de los huevos en las manadas ponedoras.',
        'El calcio para el ganado vacuno ayuda a crecer con fuerza al favorecer un buen desarrollo óseo, garantiza el buen funcionamiento del sistema nervioso y favorecer la coagulación de la sangre.',
        'Higiene y el secado de las camas en los establos para la seguridad alimentaria.',
        'Prevención y control tanto de infecciones como de enfermedades (dermatitis, mamitis vacas lecheras, etc.).',
        'Crea estiércol enriquecido.',
        'Estanques Piscícolas:  Previene la acumulación de sustancias ácidas en las masas de agua, y el descenso de los niveles de pH, Aplicación fácil y segura, la mejor fuente de calcio, muy buena actividad desinfectante, dosificaciones diferentes y calculables , efecto antiparasitario y transforma los suelos limosos'
      ],
      benefits: [
        'Evita la carencia de calcio, fortalecer el sistema óseo, y permitir funciones musculares sanas.',
        'Garantiza una producción de alta calidad y favorecer la producción de leche.',
        'Garantiza una estructura adecuada de la cáscara del huevo',
        'Mantiene la biología reproductiva y una nutrición animal equilibrada.',
        'Ambiente más limpio (impacto sobre la mastitis y la cojera), previniendo las infecciones en las patas del ganado.',
        'Aumenta la higiene de los animales y reduce los olores desagradables en los gallineros.',
        'Evita la propagación de patógenos.',
        'Menor estrés animal y menor incidencia de enfermedades.',
        'Mejora la estructura física del fondo del estanque piscícola.',
        'Aumenta la cantidad y calidad del plancton y aumenta la productividad del estanque.',
        'Recarga las reservas de agua alcalina y aumenta el contenido de oxígeno del agua.',
        'Aumenta el pH del agua al nivel necesario.',
      ]
    },
    {
      id: 3,
      nombre: 'componente3 relationed products',
      data:[
        {
          id: 1,
          image: 'agricola',
          title: 'Cal Viva',
          description: 'Conocida químicamente como óxido de calcio (CaO), o comúnmente denominada cal, es un compuesto químico ampliamente utilizado que se origina a partir del carbonato de calcio.',
        },
        {
          id: 2,
          image: 'dolomita',
          title: 'Cal Dolomita',
          description: 'Nuestra Cal viva Dolomítica tiene el contenido de magnesio adecuado para equilibrar y proteger sus refractarios, es fundamental para producir acero de calidad y controlar sus costes.',
        },
      ]
    },
    {
      id: 4,
      nombre: 'componente3 relationed services',
      data:[
        {
          id: 1,
          image: 'nueve',
          title: 'Nuestros Servicios',
          description: [
            'Carga y Logística',
            'Asistencia técnica',
            'Sistema de Transporte',
            'Asistencia para pedidos y programación',
          ]
        },


      ]
    },
  ])

    
  return (
    <div className={styles.contenedor}>
      <Data2Context.Provider value={data}>
        <AplicationPrototype/>
      </Data2Context.Provider>
    </div>
  )
}
