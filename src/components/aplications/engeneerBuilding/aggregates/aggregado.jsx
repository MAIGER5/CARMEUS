import React, { useState } from 'react';
import styles from './aggregates.module.css'
import Data2Context from '../../../dataContext/data2Context';
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype';

export const Aggregado = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'AGREGADOS',
      description: 'Los áridos se utilizan para sostener cimientos, proporcionar drenaje, actuar como esqueleto de nuestras carreteras y autopistas y es el componente principal en la producción de hormigón. Carmeuse Colombia es uno de los principales proveedores de áridos para el mercado de la construcción. ',
      image: 'aggregates',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'Nuestras canteras de piedra caliza suelen ser grandes. Así, pueden garantizar el suministro extensivo de áridos para mezclas ligadas hidráulicamente y no ligadas para materiales de base, así como pequeñas fracciones de áridos para suministrar a plantas de asfalto y hormigón premezclado in situ.'
      ],
      benefits: [
        'Drenaje mejorado - Los áridos permiten un flujo adecuado del agua a la vez que proporcionan estabilidad estructural.', 
        'Versátiles y sostenibles - Los áridos calizos ofrecen versatilidad, rentabilidad y sostenibilidad, lo que los convierte en la opción preferida para proyectos de construcción de diversos tamaños y tipos.',
        'Mayor resistencia y estabilidad - Los áridos calizos mejoran la resistencia a la compresión y la durabilidad del hormigón y el asfalto, garantizando la longevidad y estabilidad de estructuras y carreteras.'
      ]
    },
    {
      id: 3,
      nombre: 'componente3 relationed products',
      data:[
        {
          id: 1,
          image: 'piedraCaliza',
          title: 'Piedra Caliza',
          description: 'Los áridos de construcción son un producto esencial para numerosas aplicaciones de la construcción. En el caso de los pavimentos, actúan como principal componente de soporte de cargas. Para el hormigón, los áridos calizos ofrecen mayor resistencia y mejor valor que los áridos graníticos comúnmente utilizados.',
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
