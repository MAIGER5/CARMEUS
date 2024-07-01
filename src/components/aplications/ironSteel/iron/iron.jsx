import React, { useState } from 'react';
import styles from './iron.module.css';
import Data2Context from '../../../dataContext/data2Context';
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype';



export const Iron = () =>{


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'HIERRO',
      description: 'La cal Carmeuse Colombia y los productos a base de cal desempeñan un papel fundamental en la fabricación del hierro. Se utilizan como fundentes y permiten ajustar la basicidad permitiendo la generación de escoria en el alto horno o ajustar la basicidad de las pellas utilizadas especialmente para la producción de DRI. Sus propiedades únicas, como la capacidad de eliminación de sílice, el control de la temperatura y la capacidad fundente, los hacen indispensables en los procesos de fabricación del hierro. Al centrarse en prácticas sostenibles, la integración de productos a base de cal contribuye a reducir el impacto medioambiental y a promover una economía circular en el proceso de fabricación del hierro. A medida que la industria del acero sigue evolucionando, la cal sigue siendo una piedra angular de su futuro sostenible. ',
      image: 'iron',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'Eliminación de impurezas: la cal viva con alto contenido en calcio se utiliza como agente fundente para contribuir a la formación eficiente y eficaz de escoria y eliminar impurezas como azufre, fósforo y sílice del hierro fundido para mejorar la calidad del acero.', 
        'Mantenimiento de la viscosidad de la escoria - La cal viva con alto contenido en calcio ayuda a mantener la viscosidad de la escoria para aumentar el rendimiento térmico. La correcta formación de la capa de escoria protege el refractario, concentra y transfiere el calor al acero líquido y atrapa las impurezas y los óxidos metálicos.',
        'Prolongación de la vida útil del refractario - El contenido de magnesio de la cal viva dolomítica evita la fusión del refractario y contribuye a prolongar su vida útil.',
        'Desmoldeo - La cal hidratada puede lubricar el proceso de moldeo para facilitar el desmoldeo.'
      ],
      benefits: [
        'Con el objetivo de reducir los costes de producción y el impacto medioambiental de forma eficaz. Carmeuse ofrece soluciones a los fabricantes de acero mediante el suministro de piedra caliza, dolomía y productos a base de cal de alta calidad que ayudan a compensar la continua degradación de la calidad del mineral de hierro.', 
        'La basicidad del material de alimentación del sinterizado es un parámetro importante para el funcionamiento eficaz del proceso de sinterización y fabricación de hierro. La adición adecuada de cal para estabilizar la basicidad del producto sinterizado aporta beneficios no sólo a las operaciones de sinterización, sino también al proceso posterior de fabricación del hierro.',
        'En el proceso de desulfuración de metales en caliente, tanto la eficacia como el rendimiento metálico dependen en parte de la calidad y fiabilidad de los fundentes y la fluidez de la desulfuración. Carmeuse Colombia suministra cal molida y triturada.'
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
