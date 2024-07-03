import React, { useState } from 'react';
import Data2Context from '../../../dataContext/data2Context';
import { ProductsByGroup } from '../productsByGroup';


export const Cales = () => {

  const [ dataCales ] = useState([
    {
      id: 1,
      title1: "CALES",
      title2: "Prodcutos Cales",
      title3: "Servicios Integrales",
      description: "Los productos de cal desempeñan un papel crucial en nuestra vida cotidiana: ayudan a mantener limpias nuestras aguas, mejoran los suelos, refuerzan el acero y tienen otras innumerables aplicaciones.  Carmeuse Colombia es uno de los principales fabricantes de productos de cal, como cal viva y cal hidratada. Todo comienza con la piedra caliza procedente de nuestras canteras y minas. En primer lugar, la piedra se tritura, se clasifica y se calcina para producir cal viva, que puede utilizarse para una amplia gama de necesidades industriales o transformarse en productos para el tratamiento del agua, la agricultura, la siderurgia y otros fines.",
      image: 'cales1',
      boton: 'Contactate con Nuestros Expertos',
      boxProduct: [
        {
          name: 'CAL VIVA',
          link: 'quicklime',
        },
        {
          name: 'CAL HIDRATADA',
          link: 'hydratedlime',
        },
        {
          name: 'CAL DOLOMITA',
          link: 'dolomiticlime',
        },
        {
          name: 'CAL AGRICOLA',
          link: 'agriculturallime',
        }
      ],
    }
  ])


  return (
    <Data2Context.Provider value={dataCales} >
      <ProductsByGroup/>
    </Data2Context.Provider>
  )
}
