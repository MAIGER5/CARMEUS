import React, { useState } from 'react';
import styles from './noFerrousMining.module.css'
import Data2Context from '../../dataContext/data2Context';
import { AplicationPrototype } from '../aplicationPrototype/aplicationPrototype';

export const NoFerrousMining = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'MINERIA & METALES NO FERROSOS',
      description: ' Carmeuse Colombia ofrece productos que son esenciales para las industrias de procesamiento de minerales y metales no ferrosos. Nuestros productos son una fuente de calcio, un agente alcalinizante clave para ayudar a controlar el pH y la viscosidad de la lechada de mineral para el transporte por tuberías. También se utilizan en el proceso de floculación y peletización del mineral de hierro.',
      image: 'NoFerroso',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'Ajuste del pH: La cal se utiliza para controlar y ajustar el pH en los procesos de extracción y refinación. Mantener un pH adecuado es esencial para optimizar la solubilidad de ciertos metales y mejorar la eficiencia de los procesos químicos involucrados.',
        'Precipitación de impurezas: En los procesos hidrometalúrgicos, la cal ayuda a precipitar impurezas como el hierro, el aluminio y el manganeso. Esto se logra mediante la formación de hidróxidos insolubles que se pueden eliminar fácilmente del líquido.',
        'Neutralización de ácidos: La cal se utiliza para neutralizar soluciones ácidas que se generan durante el procesamiento de minerales. Esto es fundamental para prevenir la corrosión de los equipos y para cumplir con las regulaciones ambientales.',
        'Regulación de cianuración: En la extracción de oro y plata, la cal se emplea para controlar el pH de las soluciones de cianuro, mejorando la eficacia del proceso de cianuración y minimizando la formación de cianuro de hidrógeno (HCN) gaseoso, que es tóxico.',

      ],
      benefits: [
        'Flotación: En el proceso de flotación de minerales, la cal se utiliza para modificar las propiedades de la superficie de los minerales, facilitando su separación. Actúa como un agente de control del pH y de los reactivos de flotación, ayudando a la separación eficiente de los minerales deseados de la ganga.',
        'Estabilización de residuos: La cal se emplea en la estabilización y solidificación de residuos mineros, reduciendo su movilidad y potencial impacto ambiental. Esto es especialmente importante en la gestión de colas y desechos tóxicos.',
        'Desulfurización: En la fundición de metales no ferrosos, la cal se usa para eliminar el azufre del mineral y del metal fundido, mejorando la calidad del producto final.',
        'Coagulación y floculación: La cal actúa como coagulante y floculante en el tratamiento de aguas residuales generadas durante los procesos de extracción y refinación, facilitando la eliminación de partículas finas y contaminantes disueltos.',
        'El uso de la cal en la extracción de metales no ferrosos es esencial debido a estas características, ya que mejora la eficiencia de los procesos, reduce costos y minimiza el impacto ambiental.',
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
        {
          id: 2,
          image: 'calViva',
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
