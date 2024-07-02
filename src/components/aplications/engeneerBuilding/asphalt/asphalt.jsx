import React, { useState } from 'react';
import styles from './asphalt.module.css'
import Data2Context from '../../../dataContext/data2Context';
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype';

export const Asphalt = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'ASFALTO',
      description: ' Las agencias buscan soluciones fiables, probadas y sostenibles para minimizar los retos debidos al mantenimiento de los pavimentos de asfalto, así como para prolongar la vida útil de los pavimentos. Carmeuse Colombia es capaz de suministrar productos de cal y piedra caliza de gran pureza que garantizan un asfalto de la máxima calidad para producir carreteras duraderas y resistentes.',
      image: 'asphalt2',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'El asfalto necesita finos en la mezcla. La piedra caliza molida es un material fino inactivo bien conocido, mientras que la cal hidratada es un relleno químicamente activo. Ofrecemos ambos materiales.', 
        'La cal hidratada en la mezcla reduce el envejecimiento químico del betún. Además, endurece la masilla más que el relleno mineral normal, lo que repercute en las propiedades mecánicas de la mezcla asfáltica.'
      ],
      benefits: [
        'Mayor resistencia a la sensibilidad a la humedad.', 
        'Oxidante antienvejecimiento, que prolonga la vida útil.',
        'Mayor resistencia a las roderas y a la fatiga.'
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
        {
          id: 2,
          image: 'hidratada',
          title: 'Cal Hidratada',
          description: 'La cal hidratada, químicamente conocida como hidróxido de calcio (Ca(OH)2), o cal apagada, es un polvo blanco seco derivado de la cal viva mezclada con agua. La cal hidratada con alto contenido de calcio de Carmeuse Colombia está disponible como producto seco a granel o en bolsas y se utiliza en diversas aplicaciones industriales.',
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
