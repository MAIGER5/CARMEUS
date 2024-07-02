import React, { useState } from 'react';
import styles from './pccPulPaper.module.css'
import Data2Context from '../../dataContext/data2Context';
import { AplicationPrototype } from '../aplicationPrototype/aplicationPrototype';

export const PccPulPaper = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'PULPA & PAPEL',
      description: 'Pulpa y Papel es el nombre genérico de la industria en la que la madera se transforma en papel, pulpa, cartón y otros productos a base de celulosa. La cal es uno de los productos más esenciales utilizados en esta aplicación. Se aplica en el proceso de extracción de celulosa, en el blanqueo (formación de Hipoclorito de Calcio) y en procesos de tratamiento de aguas. Este reactivo es la clave en el "proceso Kraft" más utilizado, donde se utiliza cal en un circuito cerrado para el proceso de caustificación.',
      image: 'pupaPapel',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'Control del pH: con un valor de pH de 12,6, la cal tiene un alto valor de neutralización, lo que garantiza un aumento adecuado y correcto del pH.',
        'Alta pureza: Carmeuse proporciona cal con un alto contenido en CaO y bajas impurezas.',
        'Socio de Carmeuse en experiencia: Carmeuse cuenta con más de 160 años de experiencia en la elaboración y transformación de productos a base de cal.',

      ],
      benefits: [
        'Neutralización única del pH: la cal proporciona eficazmente los iones hidróxido necesarios para la transformación del carbonato sódico en hidróxido sódico.',
        'Menor tasa de reposición de la cal: la alta pureza permite una menor reposición de la cal y aumentar el bucle de reciclado.',
        'Soporte de TechPartner: nuestro soporte técnico puede ayudarle a optimizar sus procesos y reducir los efectos secundarios no deseados del proceso.',
        'Evaluación de proyectos de economía circular: recuperación y reciclaje de los productos del cliente.',

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
