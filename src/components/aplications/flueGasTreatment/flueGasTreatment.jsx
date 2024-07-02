import React, { useState } from 'react';
import styles from './flueGasTreatment.module.css'
import Data2Context from '../../dataContext/data2Context';
import { AplicationPrototype } from '../aplicationPrototype/aplicationPrototype';

export const FlueGasTreatment = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'TRATAMIENTO DE GASES',
      description: ' Carmeuse Colombia ofrece una gran variedad de productos a base de cal, como cal viva con alto contenido en calcio, cal hidratada y cal mejorada con magnesio, equipos avanzados de manipulación de cal y soluciones de servicio para hacer frente a los numerosos retos a los que se enfrentan las instalaciones industriales que tratan gases de combustión y de proceso.',
      image: 'gases3',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'CALDERAS INDUSTRIALES: Se emplea para cumplir los límites de emisiones del sector de la producción de energia, relacionados con las emisiones procedentes por transformación de combustibles fósiles o fuentes de energía renovables.', 
        'CONVERSIÓN DE RESIDUOS EN ENERGÍA: La gestión de residuos es ahora una prioridad para todos nosotros. Reducir, reutilizar y reciclar nuestros residuos debe ser el objetivo de todos. Sin embargo, la valorización energética de la fracción restante de los residuos es la mejor solución. Esta fracción es una parte sostenible de la cadena de gestión de residuos y genera energía valiosa y renovable.',
        'PLANTA DE BIOMASA: La preocupación por las emisiones de CO2 genera una mayor demanda de instalaciones de conversión de biomasa en energía (BtE). Por desgracia, no todas las fuentes de biomasa están libres de contaminantes y a veces se observa una variabilidad significativa. Por consiguiente, es preciso implantar sistemas de control de emisiones flexibles y fiables.',
      ],
      benefits: [
        'Desulfuración de gases de combustión por vía húmeda: en las aplicaciones de FGD por vía húmeda, los gases de combustión entran en un depurador y una lluvia de lechada de cal cae a contracorriente del flujo de gases de combustión para eliminar SO2, HCl y otros gases ácidos nocivos. ', 
        'Desulfuración seca de gases de combustión: se inyecta una lechada de cal atomizada en el recipiente para que reaccione con el SO2, el HCl y otros gases ácidos y los elimine. Mientras la cal se introduce como lechada, toda la humedad se evapora en el lavador, dejando un producto seco y eliminando la necesidad de tratamiento de aguas residuales.',
        'Inyección de sorbente seco (DSI) - En la inyección de sorbente seco, la cal hidratada se inyecta directamente en el conducto de gases de combustión para eliminar SO2, HCl y otros contaminantes gaseosos, protegiendo la atmósfera de emisiones nocivas.',
        'Estabilización y solidificación de cenizas - A menudo, los productos de cal pueden utilizarse para neutralizar y estabilizar las cenizas residuales de la incineración. Cuando el material no puede reutilizarse, la cal puede utilizarse para solidificar y reducir la lixiviabilidad de los residuos para su correcta eliminación en vertedero.'
      ]
    },
    {
      id: 3,
      nombre: 'componente3 relationed products',
      data:[
        {
          id: 1,
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
