import React, { useState } from 'react';
import styles from './chemicalCompounds.module.css';
import Data2Context from '../../../dataContext/data2Context';
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype';



export const ChemicalCompounds = () => {


  const [ data, setData ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'COMPUESTOS QUIMICOS',
      description: 'Los productos cálcicos se utilizan con frecuencia en la fabricación de muchos productos químicos como auxiliares tecnológicos, agentes de neutralización, lubricantes o incluso catalizadores. Los requisitos de pureza química, aspecto físico y reactividad pueden influir en el proceso de reacción y/o en la calidad del producto final. Las principales funcionalidades de los productos a base de cal en la "industria química" son, por ejemplo, la alcalinidad del entorno químico en el reactor, la alcalinidad del producto final, la producción de un subproducto valioso, la regeneración del reactivo (caustificación).',
      image: 'compuestoQui',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'Carmeuse Colombia ofrece materiales a base de cal de pureza química y reactividad variables, con una distribución granulométrica controlada para adaptarse a sus procesos.', 
        'Fuente de alcalinidad: Muy adecuado para el control del pH en reactores químicos, El valor de neutralización garantiza una neutralización adecuada de los ácidos (orgánicos).', 
      ],
      benefits: [
        'Carmeuse Colombia ofrece una amplia gama de productos con diferentes propiedades químicas y físicas.', 
        'Gracias a su elevada pureza y a sus certificaciones (HACCP, FCA, EN12518, etc.), estos productos pueden cumplir los requisitos para su uso en los mercados más exigentes.', 
        'Durante la neutralización, la contaminación con aniones no deseados se reduce hasta eliminarse.', 
        'Los productos de cal son una de las fuentes de calcio más económicamente viables del mundo y un medio de control del pH.'
      ]
    },
    {
      id: 3,
      nombre: 'componente3 relationed products',
      data:[
        {
          id: 1,
          image: 'calciumSal2',
          title: 'Hidroxido de Calcio Tipo A',
          description: 'El Hidroxido de Calcio de Carmeuse Colombia es de alta calidad y baja en contaminantes, siendo ideal para el proceso de trefilado en frío. En el tratamiento de aguas y afluentes industriales.',
        },
        {
          id: 1,
          image: 'calciumSal',
          title: 'Carbonato de Calcio',
          description: 'El carbonato cálcico es uno de los materiales más útiles y versátiles conocidos por el ser humano y tiene muchas aplicaciones prácticas, como su uso en suelos (moqueta, baldosas de vinilo de lujo, compuesto de piedra y plástico).',
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
