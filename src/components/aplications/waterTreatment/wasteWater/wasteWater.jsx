import React, { useState } from 'react';
import styles from './wasteWater.module.css'
import Data2Context from '../../../dataContext/data2Context'
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype'

export const WasteWater = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'Tratamiento de aguas residuales',
      title: 'TRATAMIENTO DE AGUAS RESIDUALES',
      description: 'El agua es uno de los elementos clave para la vida en nuestro planeta, por lo que es imprescindible purificarla antes de devolverla a la naturaleza. Los tratamientos de aguas residuales se instalan en municipios e industrias para cumplir los límites físicos, químicos y biológicos impuestos por los gobiernos locales con el fin de garantizar un equilibrio hídrico seguro y saludable. La familia de productos de Carmeuse Colombia permite alcanzar estos límites de forma rentable gracias a las distintas funcionalidades de los productos.',
      image: 'water3',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'Control del pH: la gama de productos Carmeuse Colombia con un valor de pH de 12,6 tiene un alto valor de neutralización, lo que garantiza un aumento adecuado y correcto del pH.',
        'Gracias al aumento del pH, se pueden eliminar eficazmente los metales pesados de las aguas residuales.',
        'Gracias al contenido en calcio de nuestros productos, los contaminantes como sulfatos, fosfatos y fluoruros se precipitan en forma de sales de calcio poco solubles.',
        'Reducción de la DQO por coagulación: los productos de Carmeuse Colombia favorecen la coagulación/floculación de los componentes orgánicos insolubles en el agua. Al eliminar estos componentes orgánicos en forma de lodo, se observa una reducción significativa de la DQO (Demanda Química de Oxígeno).',

      ],
      benefits: [
        'Seguro y fácil de manejar: los productos de Carmeuse Colombia se consideran productos no ADR y no corrosivos para la piel.',
        'Neutralización única del pH: sustituye uno a uno a la sosa cáustica.',
        'Son más rentable que otros reactivos que aumentan el pH.',
        'Mejora la coagulación al tiempo que reduce la necesidad de otros reactivos químicos en el tratamiento fisicoquímico del agua.',
        'No hay limitación de disponibilidad y se produce localmente.',

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