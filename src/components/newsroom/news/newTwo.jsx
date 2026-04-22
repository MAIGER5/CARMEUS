import React, { useState } from 'react';
import DataContext from '../../dataContext/dataContext';
import { Newsroom } from '../newsroom';

export const NewTwo = () => {

  const [ dataNew ] =useState([
    {
      id: 1,
      // date: 'Julio 15, 2024',
      title: 'MEJORAMOS LA CALIDAD DE NUESTROS RIOS Y LA DE LOS HABITANTES',
      paragraph1: 'Carmeuse Colombia tiene como premisa establecer relaciones de respeto y confianza con la comunidad que rodea nuestras plantas de produccion, compartiendo conocimiento y construyendo una relación transparente con la comunidad.',
      imageActivity: 'MedioAmbiente'

    }
  ])

  return (
    <div>
      <DataContext.Provider value={dataNew}>
        <Newsroom/>
      </DataContext.Provider>
    </div>
  )
}