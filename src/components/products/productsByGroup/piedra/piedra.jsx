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
      description: "La piedra caliza es una roca sedimentaria natural que está compuesta casi en su totalidad por carbonato de calcio (CaCO3), que se considera piedra caliza con alto contenido de calcio. Es increíblemente versátil y se utiliza en muchas industrias, desde la agricultura hasta la siderurgia, debido a sus propiedades beneficiosas y su alto contenido de calcio.",
      image: 'cinco-2',
      boton: 'Contactate con Nuestros Expertos',
      boxProduct: [
        {
          name: 'PIEDRA CALIZA',
          link: 'products/stone/limestone',
        },
        {
          name: 'CARBONATO DE CALCIO',
          link: 'products/stone/carbonate',
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
