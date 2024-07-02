import React, { useState } from 'react';
import styles from './glassCeramic.module.css'
import Data2Context from '../../dataContext/data2Context';
import { AplicationPrototype } from '../aplicationPrototype/aplicationPrototype';

export const GlassCeramic = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'CERAMICA Y VIDRIO',
      description: ' Los productos de vidrio forman parte de nuestra vida cotidiana. Desde la pantalla de su teléfono móvil hasta las ventanas, el aislamiento y los envases de alimentos y bebidas de su hogar, el vidrio está a nuestro alrededor. En Carmeuse Colombia, suministramos las materias primas de cal y piedra caliza y los equipos de manipulación de cal necesarios para la fabricación de vidrio. Hacemos hincapié en suministrarle el producto adecuado a tiempo, en todo momento.',
      image: 'glass',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'En la fase de cocción o sinterización, la cal viva quemada contribuye a la densificación de los productos cerámicos. Al alcanzar altas temperaturas en el horno, se descompone, liberando dióxido de carbono y dejando tras de sí óxido de calcio. Este proceso ayuda a rellenar los huecos entre las partículas de arcilla, lo que mejora la integridad estructural y reduce la porosidad del producto cerámico final.', 
        'Carmeuse Colombia produce piedra caliza de alta calidad que se utiliza en la producción de vidrio. El uso de piedra caliza ofrece a los fabricantes de vidrio varias ventajas que mejoran la calidad del producto final al eliminar contaminantes, mejorar la resistencia del producto y aumentar la eficacia del proceso de producción.',
      ],
      benefits: [
        'Prolongación de la vida útil del refractario - Debido a los niveles de calcio y magnesio y a las mejoras en la integridad estructural de los productos cerámicos, aumenta la vida útil del refractario.', 
        'Estabiliza el sílice - La caliza actúa como fundente en el vidrio fundido, estabilizando el contenido de sílice, que es el componente primario del vidrio. Esto ayuda a mantener la integridad y consistencia de la composición del vidrio.', 
        'Reduce la temperatura de fusión - La caliza reduce la temperatura de fusión del lote de vidrio, lo que permite ahorrar energía durante el proceso de fabricación.',
        'Mejora la claridad óptica - Contribuye a la claridad óptica y la transparencia del vidrio, haciéndolo adecuado para mostrar el contenido del envase.',
        'Mejora la durabilidad - Los envases de vidrio producidos con piedra caliza son más duraderos y menos propensos a romperse durante la producción y el transporte.'
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
