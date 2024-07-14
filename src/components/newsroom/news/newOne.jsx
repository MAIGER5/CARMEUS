import React, { useState } from 'react';
import DataContext from '../../dataContext/dataContext';
import { Newsroom } from '../newsroom';

export const NewOne = () => {

  const [ dataNew, setDataNew ] =useState([
    {
      id: 1,
      date: 'Diciembre 30, 2023',
      title: 'CARRERA POR LA EDUCACION INFANTIL EN EL MUNICIPIO DE LA DANTA',
      paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dicta, accusamus ratione in corrupti quisquam natus temporaet voluptatem optio ipsum dolores suscipit ut cupiditate hicvero quia consequatur? Fugiat, voluptatum.',
      paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dicta, accusamus ratione in corrupti quisquam natus temporaet voluptatem optio ipsum dolores suscipit ut cupiditate hicvero quia consequatur? Fugiat, voluptatum.',
      paragraph3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dicta, accusamus ratione in corrupti quisquam natus temporaet voluptatem optio ipsum dolores suscipit ut cupiditate hicvero quia consequatur? Fugiat, voluptatum.',
      imageActivity: 'nueve'

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


