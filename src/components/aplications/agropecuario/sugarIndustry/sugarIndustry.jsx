import React, { useState } from 'react';
import styles from './sugarIndustry.module.css';
import Data2Context from '../../../dataContext/data2Context';
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype';



export const SugarIndustry = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'PRODUCCIÓN DE AZUCAR',
      description: 'La cal se utiliza en la producción de azúcar, al purificar el jugo de la remolacha o la caña. La remolacha azucarera se trocea y se hace pasar por un difusor para extraer el jugo de azúcar. La cal, producida a partir de piedra caliza con alto contenido de calcio, se utiliza en el proceso de producción para esta operación esencial.',
      image: 'azucar',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'La cal juega un papel fundamental en la producción y refinación del azúcar. Se utiliza principalmente para ajustar los niveles de pH del jugo de azúcar. Al agregar cal, el jugo se vuelve menos ácido, creando un ambiente donde las impurezas, como proteínas y colorantes, pueden coagularse y eliminarse fácilmente. La cal ayuda en el proceso de clarificación, lo que da como resultado un jugo de azúcar más limpio. Además, ayuda a eliminar colorantes no deseados, contribuyendo a la producción de azúcar blanco refinado. La cal también favorece la precipitación de impurezas como el carbonato de calcio y el hidróxido de magnesio, que pueden separarse eficazmente del jugo de azúcar. Sus propiedades antimicrobianas ayudan a prevenir el crecimiento microbiano en el jugo, mejorando la calidad general y la vida útil del azúcar.'
      ],
      benefits: [
        "Regulación del pH: la cal viva crea un ambiente donde las impurezas se pueden eliminar de manera eficiente, lo que garantiza un producto de azúcar más puro y de mayor calidad.",
        "Eliminación de color: la cal viva es fundamental en la eliminación de colorantes en el jugo de azúcar, contribuyendo a la producción de azúcar blanco cristalino.",
        "Eliminación de impurezas: la cal viva fomenta la precipitación de impurezas como el carbonato de calcio y el hidróxido de magnesio, que se pueden separar fácilmente del jugo de azúcar.",
      ]
    },
    {
      id: 3,
      nombre: 'componente3 relationed products',
      data:[
        {
          id: 1,
          image: 'sugar2',
          title: 'Cal Viva',
          description: 'En la industria azucarera, la cal viva se usa principalmente para la purificación del jugo de caña o remolacha. Se añade al jugo para neutralizar ácidos, ayudando a precipitar impurezas y facilitando su eliminación. Este proceso mejora la clarificación del jugo y aumenta la eficiencia en la producción de azúcar.',
        },
        {
          id: 2,
          image: 'sugar',
          title: 'Cal Hidratada',
          description: 'la cal hidratada se utiliza para purificar el jugo de caña o remolacha mediante la neutralización de ácidos y el ajuste del pH. Facilita la precipitación de impurezas y mejora la clarificación del jugo al promover la coagulación y floculación de partículas suspendidas. Esto resulta en un proceso más eficiente y en un azúcar de mayor calidad..',
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
