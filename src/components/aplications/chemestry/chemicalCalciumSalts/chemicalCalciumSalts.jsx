import React, { useState } from 'react';
import styles from './chemicalCalciumSalts.module.css';
import Data2Context from '../../../dataContext/data2Context';
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype';



export const ChemicalCalciumSalts = () => {


  const [ data, setData ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'SALES DE CALCIO',
      description: 'Los compuestos o sales a base de calcio se utilizan en todo el mundo en una amplia gama de aplicaciones.  Los productos a base de cal son los más utilizados como fuente de calcio para la producción de estos "productos químicos" porque no contaminan los productos finales con iones extraños e indeseables. Los productos finales pueden utilizarse en agricultura, procesamiento de alimentos, alimentación animal, desinfección, fabricación de plásticos y muchos otros sectores. Carmeuse Colombia ofrece una amplia gama de productos, conocimientos técnicos y servicios centrados en las necesidades específicas de los principales procesos que utilizan productos a base de cal con el fin de maximizar la eficacia de todo el proceso.',
      image: 'calciumSal',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'Alta pureza y reactividad: La cartera de Carmeuse Colombia es muy amplia, cada producto tiene una alta pureza y una reactividad adaptada a su proceso, ya que estas propiedades tienen un impacto directo en el rendimiento del proceso y la calidad del producto final.', 
        'Alto contenido en calcio: Productos a base de caliza: 38%w de calcio como mínimo, Productos a base de cal viva: 68%w de calcio como mínimo, Productos a base de cal hidratada: mínimo 52%w Calcio ', 
        'Control del pH: Muy adecuado para el control del pH para proteger la vida biológica en el reactor, o para alcanzar las condiciones óptimas para las reacciones bioquímicas. El valor de neutralización garantiza una neutralización adecuada de los ácidos (orgánicos), produciendo sales de calcio de gran pureza.'
      ],
      benefits: [
        'Estos productos cumplen los requisitos para su uso en los mercados más exigentes.', 
        'Sin contaminación con aniones no deseados.', 
        'Una de las fuentes de calcio y un agente regulador del pH más viables económicamente del mundo.', 
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
