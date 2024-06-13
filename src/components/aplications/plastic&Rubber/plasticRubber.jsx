import React, { useState } from 'react';
import styles from './plasticRubber.module.css';
import Data2Context from '../../dataContext/data2Context';
import { AplicationPrototype } from '../aplicationPrototype/aplicationPrototype';



export const PlasticRubber = () => {


  const [ data, setData ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'PLASTICO & CAUCHO',
      description: 'Los productos minerales a base de calcio se utilizan ampliamente en la producción de plásticos y cauchos en todo el mundo. Las funciones de los productos a base de calcio van desde agentes de relleno y compactación hasta agentes estabilizantes y de manipulación de alta gama personalizados. Dentro de la cartera de Carmeuse contamos con una gama de productos que cumplen química y físicamente las especificaciones altamente exigentes requeridas en estas aplicaciones.',
      image: 'chemical1',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: ['La gama de productos para estas aplicaciones tiene una pureza y una distribución granulométrica de gran afinidad, lo que la hace idónea para su uso en plásticos y cauchos, ya que éstos son un factor clave en la calidad del producto final.', 'El producto a base de caliza, con su elevada finura y pureza, se adapta perfectamente a aplicaciones como la densificación.', 'Estabilización en estado sólido: la alta reactividad del producto a base de cal se traduce en una neutralización muy rápida y adecuada del ácido causado por la degradación UV de los plásticos.', 'Seguridad: el uso de productos a base de cal como estabilizantes en plásticos ha sustituido a estabilizantes prohibidos por riesgos para la salud.'],
      benefits: ['Gracias a su elevada pureza y a sus certificaciones (HACCP, FCA, EN 12518, etc.), estos productos pueden cumplir los requisitos para su uso en los mercados más exigentes (industria alimentaria e incluso farmacéutica).', 'No se liberan elementos no deseados durante la neutralización.', 'Nuestros productos tienen una ventaja económica sobre los productos químicos alternativos utilizados para neutralizar la capacidad en plásticos y cauchos.', 'Instalaciones de producción industrial en toda Europa y exportados a gran escala en todo el mundo.']
    },
    {
      id: 3,
      nombre: 'componente3 relationed products',
      data:[
        {
          id: 1,
          image: 'chemical1',
          title: 'Cal Viva',
          description: 'La gama de productos para estas aplicaciones tiene una pureza y una distribución granulométrica de gran afinidad, lo que la hace idónea para su uso en plásticos y cauchos, ya que éstos son un factor clave en la calidad del producto',
        },
        {
          id: 2,
          image: 'chemical1',
          title: 'Cal Dolomita',
          description: 'La gama de productos para estas aplicaciones tiene una pureza y una distribución granulométrica de gran afinidad, lo que la hace idónea para su uso en plásticos y cauchos, ya que éstos son un factor clave en la calidad del producto',
        },
      ]
    },
    {
      id: 4,
      nombre: 'componente3 relationed services',
      data:[
        {
          id: 1,
          image: 'chemical1',
          title: 'Cal Hidratada',
          description: 'La gama de productos para estas aplicaciones tiene una pureza y una distribución granulométrica de gran afinidad, lo que la hace idónea para su uso en plásticos y cauchos, ya que éstos son un factor clave en la calidad del producto',
        },
        {
          id: 2,
          image: 'chemical1',
          title: 'Cal Viva',
          description: 'La gama de productos para estas aplicaciones tiene una pureza y una distribución granulométrica de gran afinidad, lo que la hace idónea para su uso en plásticos y cauchos, ya que éstos son un factor clave en la calidad del producto',
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
