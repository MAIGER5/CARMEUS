import React, { useState } from 'react';
import Data2Context from '../../../dataContext/data2Context';
import { ProductsByGroup } from '../productsByGroup';


export const Piedra = () => {

  const [ dataCales ] = useState([
    {
      id: 1,
      title1: "PIEDRA",
      title2: "Prodcutos de Piedra",
      title3: "Servicios Integrales",
      description: "Carmeuse es líder mundial en la producción y distribución de productos de piedra caliza de alta calidad. Nuestra piedra caliza se extrae de canteras de todo el mundo y se transforma en una amplia gama de productos que se utilizan en diversas industrias. Nuestros productos de piedra caliza son versátiles, sostenibles y rentables, lo que los convierte en la opción ideal para una gran variedad de aplicaciones. Desde la construcción a la agricultura, desde la producción de acero a la gestión medioambiental, nuestros productos de piedra caliza son un componente esencial para muchas industrias.",
      image: 'cinco-2',
      boton: 'Contactate con Nuestros Expertos',
      boxProduct: [
        {
          name: 'PIEDRA CALIZA',
          link: 'limestone',
        },
        {
          name: 'CARBONATO DE CALCIO',
          link: 'carbonate',
        },
      ],
    }
  ])


  return (
    <Data2Context.Provider value={dataCales} >
      <ProductsByGroup/>
    </Data2Context.Provider>
  )
}
