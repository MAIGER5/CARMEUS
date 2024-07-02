import React, { useState } from 'react';
import styles from './industryWater.module.css'
import Data2Context from '../../../dataContext/data2Context'
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype'

export const IndustryWater = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'Tratamiento de aguas residuales',
      title: 'TRATAMIENTO INDUSTRIAL DEL AGUA',
      description: 'El agua es un recurso esencial para casi todos los tipos de industria.  Las denominadas aguas de proceso se utilizan en una amplia gama de aplicaciones que van desde el agua del interior de los procesos de reacción, el agua de refrigeración, el agua de calderas, etc. Las aguas de proceso, que a menudo proceden de aguas superficiales o de aguas residuales recicladas, deben tratarse de acuerdo con las especificaciones requeridas por la producción para permitir un proceso de producción bueno y estable. La gama de productos de Carmeuse Colombia permite cumplir requisitos específicos de forma rentable gracias a las diferentes características de los productos.',
      image: 'water4',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'Control de la dureza: Gracias a las propiedades de aumento del pH y a la fuente de calcio, se consigue una adecuada descarbonatación o remineralización del agua.',
        'Control del pH: La gama de productos Carmeuse Colombia con un valor de pH de 12,6 tiene un alto valor de neutralización, lo que permite un aumento adecuado y correcto del pH. Actúa como un tampón natural, ya que reacciona lentamente con el agua ácida y la neutraliza hasta un pH de alrededor de 7, al tiempo que mineraliza el agua con calcio y/o magnesio.',
        'Precipitación de contaminantes inorgánicos: Gracias al aumento del valor del pH, los metales pesados pueden eliminarse eficazmente de las aguas residuales. Debido al contenido en calcio de la gama de productos Camuese Colombia, los contaminantes como sulfatos, fosfatos y fluoruros se precipitan en forma de sales de calcio poco solubles.',
        'Reducción de la DQO por coagulación: Los productos de Camuese Colombia favorecen la coagulación/floculación de la materia orgánica insoluble en el agua. Al eliminar estos componentes orgánicos en forma de lodos, se observa una reducción significativa de la DQO (demanda química de oxígeno).',

      ],
      benefits: [
        'Valorización de los subproductos del ablandamiento: El proceso de descarbonatación con productos AquaCalco® forma un lodo calcáreo que puede valorizarse, por ejemplo, en procesos agrícolas.',
        'Seguro y fácil de manipular: Los productos de Carmeuse Colombia se consideran productos no ADR y no corrosivos para la piel.',
        'Neutralización única del pH: Sustituye uno a uno a la sosa cáustica.',
        'Reducción del coste total de propiedad:  son más rentable que otros agentes neutralizantes que aumentan el pH.',
        'Mejoran la coagulación a la vez que reduce la necesidad de otros reactivos químicos en el tratamiento físico-químico del agua.',
        'Menor desgaste y necesidades de limpieza gracias al control de la dureza.',
        'No hay limitación de disponibilidad y se produce localmente.',

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