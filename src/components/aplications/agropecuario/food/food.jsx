import React, { useState } from 'react';
import styles from './food.module.css';
import Data2Context from '../../../dataContext/data2Context';
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype';



export const Food = () => {


  const [ data ] = useState([

    {
      id: 1,
      nombre: 'componente1',
      title: 'INDUSTRIA ALIMENTARIA',
      description: 'La cal desempeña un papel fundamental en una amplia gama de aplicaciones alimentarias, contribuyendo a la calidad, la estabilidad y el contenido nutricional del producto. Sus propiedades versátiles lo convierten en un ingrediente indispensable en la industria alimentaria.',
      image: 'food',
    },
    {
      id: 2,
      nombre: 'componente2 Caracteristic and benfefits',
      caracteristic: [
        'El proceso de fortificación normalmente implica incorporar cantidades cuidadosamente medidas de carbonato de calcio al producto alimenticio durante su producción. Esto asegura que el producto final contenga una cantidad adecuada y estandarizada de calcio. La adición de cal debe cumplir con las pautas y estándares regulatorios establecidos por las autoridades de seguridad alimentaria para garantizar la seguridad y eficacia.',
        "La fortificación de productos alimenticios con cal o carbonato de calcio implica la adición intencional de este compuesto para aumentar el contenido de calcio del alimento. Este proceso se lleva a cabo para mejorar el valor nutricional del producto, proporcionando a los consumidores una fuente adicional de calcio dietético."
      ],
      benefits: [
        "Aditivos: La cal produce sales de calcio como lactato y citrato, fortaleciendo alimentos con calcio esencial y actuando como conservantes y estabilizadores.",
        "Papas fritas: En la producción de chips de maíz, la cal mejora textura y sabor, enriquece con calcio esencial y ayuda en la conservación, mejorando la calidad y valor nutricional.",
        "ddAjuste de pH y Neutralización: La cal estabiliza la acidez o alcalinidad en aceites, gelatinas, mermeladas, salsas y encurtidos.d",
        "Horneado y acondicionamiento de masa: En repostería, la cal mejora la textura y estabilidad de la masa, y actúa como agente leudante en productos horneados como pan, pasteles y galletas.",
        "Agente desecante y antiaglomerante: La cal evita el apelotonamiento de alimentos en polvo o granulados absorbiendo el exceso de humedad, garantizando fluidez en especias, mezclas para hornear y bebidas secas.",
        "Otros beneficios pueden apreciarse en los siguientes procesos: Clarificación de Jugos, procesamiento de lácteos, alternativas lácteas, fórmulas infantiles y alimentos para bebés, fortificación - Suplementos nutricionales, productos de panadería, cereales y alimentos para el desayuno.",
      ]
    },
    {
      id: 3,
      nombre: 'componente3 relationed products',
      data:[
        {
          id: 1,
          image: 'food1',
          title: 'Cal Viva',
          description: 'Conocida químicamente como óxido de calcio (CaO), o comúnmente denominada cal, es un compuesto químico ampliamente utilizado que se origina a partir del carbonato de calcio.',
        },
        {
          id: 2,
          image: 'food3',
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
