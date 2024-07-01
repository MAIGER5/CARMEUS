import React, { useState } from 'react';
import styles from './acero.module.css';
import Data2Context from '../../../dataContext/data2Context';
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype';



export const Acero = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'ACERO',
      description: 'Carmeuse Colombia es líder y experto en el suministro de productos y soluciones de cal adaptados a las necesidades de las aplicaciones siderúrgicas. Carmeuse ofrece una gran variedad de productos de cal y dolomía con alto contenido en calcio, incluida la cal en guijarros, así como cal triturada y piedra caliza para los procesos de hornos básicos de oxígeno (BOF) y hornos de arco eléctrico (EAF). Los productos de cal son los principales componentes (fundentes) para fabricar escorias que protegen y purifican el acero y ayudan notablemente a eliminar el fósforo y la sílice. El uso adecuado de la cal de calidad de Carmeuse permite mejorar la productividad y la sostenibilidad.',
      image: 'iron',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'La fabricación de acero inoxidable modifica las propiedades del acero procedente de procesos de horno básico de oxígeno (BOF) u horno de arco eléctrico (EAF) para formar un acero altamente resistente a la corrosión. El acero inoxidable es una aleación de hierro que contiene cromo y, normalmente, níquel.', 
        'La química del cromo es esencial para la producción de acero inoxidable y perderlo en el proceso puede repercutir negativamente en la calidad del producto final. La adición de cal y fluorita mejora el proceso de reducción del Cr2O3 y mantiene fluida la escoria. Controlar el oxígeno y el azufre dentro del baño metálico también es fundamental para conseguir un acero inoxidable de calidad. La mezcla adecuada de productos también puede ayudar a prolongar la vida útil del refractario.'
      ],
      benefits: [
        'La fabricación de acero inoxidable modifica las propiedades del acero procedente de procesos de horno básico de oxígeno (BOF) u horno de arco eléctrico (EAF) para formar un acero altamente resistente a la corrosión. El acero inoxidable es una aleación de hierro que contiene cromo y, normalmente, níquel.', 
        'Mantenimiento de la viscosidad de la escoria: la cal viva con alto contenido en calcio ayuda a mantener la viscosidad de la escoria para aumentar el rendimiento térmico. La correcta formación de la capa de escoria protege el refractario de los daños del arco, concentra y transfiere el calor al acero líquido y atrapa las inclusiones y los óxidos metálicos.',
        'Prolongación de la vida útil del refractario - El contenido de magnesio de la cal viva dolomítica evita la fusión del refractario y contribuye a prolongar su vida útil.'
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
