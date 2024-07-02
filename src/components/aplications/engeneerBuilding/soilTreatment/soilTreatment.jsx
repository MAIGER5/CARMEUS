import React, { useState } from 'react';
import styles from './soilTreatment.module.css'
import Data2Context from '../../../dataContext/data2Context';
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype';

export const SoilTreatment = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'TRATAMIENTO DE SUELOS',
      description: 'Los suelos finos no contaminados con un coeficiente de soporte pobre son a menudo un gran reto para los geoingenieros y diseñadores. Cuando la cal viva se mezcla en suelos finos, un lugar inutilizable se puede convertir en una plataforma de trabajo sólida. Esto proporciona una base para la posterior construcción de todo tipo de subrasantes, capas de recubrimiento y subbases para autopistas, ferrocarriles, carreteras, zonas industriales, aeropuertos u otros movimientos de tierra relacionados con proyectos de ingeniería civil.',
      image: 'soil2',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'Los crecientes conocimientos sobre la reutilización de los suelos in situ disponibles y la atención prestada a las cuestiones de sostenibilidad ponen de relieve las ventajas del tratamiento del suelo. La estabilización de terrenos mediante el uso de cal via, es un método extremadamente rentable para convertir zonas de suelo débil en materiales de construcción utilizables y respetuosos con el medio ambiente.'
      ],
      benefits: [
        'Rapidez en la finalización del proyecto.',
        'Reducción del uso de áridos importados.',
        'Reducción de los movimientos de tráfico durante la construcción.',
        'Mínimo impacto medioambiental compactado para "excavar y verter".',
        'Suministro de una subbase económica y eficaz.',
        'Capacidad para tratar suelos sulfatados.',
        'Más seguridad en la obra.',
      ]
    },
    {
      id: 3,
      nombre: 'componente3 relationed products',
      data:[
        {
          id: 1,
          image: 'treatmentSoil',
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
