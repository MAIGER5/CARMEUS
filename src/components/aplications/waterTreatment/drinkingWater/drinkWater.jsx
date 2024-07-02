import React, { useState } from 'react';
import styles from './drinkWater.module.css'
import Data2Context from '../../../dataContext/data2Context'
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype'

export const DrinkWater = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'potableAgua',
      title: 'AGUA POTABLE',
      description: 'El agua potable se prepara a partir de pozos subterráneos, fuentes y aguas superficiales. En la mayoría de los casos, estas aguas brutas tienen que purificarse y desinfectarse para cumplir las normas de potabilidad. Además de la purificación, cada vez más países están aplicando el control de la dureza del agua para suministrar agua "blanda" a los usuarios finales, lo que supone una mejora de la calidad del agua que redundará en una mayor sostenibilidad debido al menor uso de detergentes y a la reducción de las incrustaciones y la corrosión en las tuberías de transporte y los equipos domésticos',
      image: 'potableAgua',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'Control de la dureza: como reactivo incrementador del pH, así como fuente de calcio y magnesio, que permiten una buena descarbonatación o remineralización del agua potable: ',
        'Control del pH: reacciona lentamente con el agua ácida y la neutraliza hasta un pH de alrededor de 7, al tiempo que mineraliza el agua con calcio y/o magnesio.',
        'Precipitación de contaminantes inorgánicos: Gracias al aumento del valor del pH, metales como el hierro y el aluminio, así como componentes como el manganeso, se eliminan eficazmente del agua potable.',
        'Coagulación de sólidos en suspensión: favorecen la coagulación/floculación de los sólidos en suspensión del agua cuando se utilizan en combinación con un coagulante como las sales de hierro o aluminio.',

      ],
      benefits: [
        'Sostenibilidad: proceso de descarbonización mediante reactores de pellets',
        'Seguro y fácil de manejar: nuestro producto es no corrosivo para la piel, son productos naturales y minerales que limitan la adición de productos químicos sintéticos en el agua potable',
        'Medio único de control de la dureza: tiene una doble función única en el proceso de control de la dureza, ya que funciona igual de bien para aumentar el PH que como fuente de calcio y magnesio.',
        'Reducción del TCO: es más rentable que otros agentes neutralizantes que aumentan el pH,  mejora la coagulación a la vez que reduce la necesidad de otros reactivos químicos en el tratamiento físico-químico del agua.',

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