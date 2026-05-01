import React, { useState } from 'react';
import DataContext from '../../dataContext/dataContext';
import { Newsroom } from '../newsroom';

export const NewOne = () => {

    const [ dataScren ] =useState([
    {
      id: 1,
      image: 'sosteniblidad',
      title: "CONSERVACIÓN DE LA NATURALEZA",
      description: '',
      description2: '',
      description3: '',
    }
  ])

  const [ dataNew ] =useState([
    {
      id: 1,
      paragraph1: 'Preservamos la naturaleza en la mayor medida posible, especialmente a través de nuestros proyectos de restauración de canteras. Carmeuse garantiza que la biodiversidad, incluida la fauna silvestre, no solo se conserve, sino que también se potencie en nuestras instalaciones.',
      paragraph2: 'La plantación de árboles también se ha convertido en una tradición anual en todos los establecimientos de Carmeuse a nivel mundial. En 2023, Carmeuse plantó más de 55.000 árboles en todo el mundo.',
      paragraph3: '',
      imageActivity: 'agua1'

    }
  ])

  return (
    <div>
      <DataContext.Provider value={{ dataNew, dataScren }}>
        <Newsroom/>
      </DataContext.Provider>
    </div>
  )
}


