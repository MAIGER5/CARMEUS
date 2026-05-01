import React, { useState } from 'react';
import DataContext from '../../dataContext/dataContext';
import { Newsroom } from '../newsroom';

export const NewTwo = () => {

    const [ dataScren ] =useState([
    {
      id: 1,
      image: 'comunity_kbirs5',
      title: "RELACIONES CON LA COMUNIDAD",
      description: '',
      description2: '',
      description3: '',
    }
  ])

  const [ dataNew ] =useState([
    {
      id: 1,
      paragraph1: 'En Carmeuse, creemos en contribuir a nuestras comunidades. Operamos a nivel global, pero mantenemos fuertes lazos locales.',
      paragraph2: 'A través de la Fundación Carmeuse, nos centramos en ayudar a niños y jóvenes necesitados, especialmente a aquellos que viven cerca de nuestras operaciones. ',
      paragraph3: 'También llevamos a cabo programas que atienden las necesidades reales de la población local, como la distribución de alimentos, actividades deportivas e iniciativas de salud.',
      paragraph4: 'Además, organizamos jornadas de limpieza locales en los alrededores de nuestras instalaciones para mantener nuestro entorno limpio y saludable.',
      imageActivity: 'colegio'

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