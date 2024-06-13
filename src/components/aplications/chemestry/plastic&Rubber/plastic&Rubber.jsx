import React, { useState } from 'react';
import styles from './plastic&Rubber.module.css'
import DataContext from '../../../dataContext/dataContext';
import { AplicationPrototype } from '../../aplicationPrototype/aplicationPrototype';





export const PlasticRubber = () => {

  const [ data, setData ] = useState([
    {
      id: 1,
      name: 'componente1',
      title: 'PLASTICO & CAUCHO',
      decription: 'Los productos minerales a base de calcio se utilizan ampliamente en la producción de plásticos y cauchos en todo el mundo. Las funciones de los productos a base de calcio van desde agentes de relleno y compactación hasta agentes estabilizantes y de manipulación de alta gama personalizados. Dentro de la cartera de Carmeuse contamos con una gama de productos que cumplen química y físicamente las especificaciones altamente exigentes requeridas en estas aplicaciones.',
      image: 'chemical1',
    }
  ])

  return (
    <DataContext.Provider value={data}>
      <AplicationPrototype/>
    </DataContext.Provider>
  )
}
