import React, { useState } from 'react';
import DataContext from '../../dataContext/dataContext';
import { Newsroom } from '../newsroom';

export const NewOne = () => {

  const [ dataNew, setDataNew ] =useState([
    {
      id: 1,
      // date: 'Marzo 20, 2026',
      title: 'CARRERA POR LA EDUCACIÓN INFANTIL EN EL MUNICIPIO DE LA DANTA',
      paragraph1: 'Carmeuse Colombia cree que la verdadera inclusión comienza en la primera infancia, garantizando igualdad de oportunidades para quienes más lo necesitan.  Por ello, asumimos nuestra responsabilidad social y actuamos para cerrar estas brechas y mejorar su calidad de vida.',
      paragraph2: 'Santiaguitos: inclusión con amor, educación y bienestar es una estrategia que ofrece atención gratuita e integral a niños y niñas de 2 a 5 años en situación de vulnerabilidad, garantizando educación inicial de calidad, alimentación diaria, uniformes, celebraciones significativas y proyectos pedagógicos innovadores.',
      paragraph3: 'Creemos que es fundamental invertir en la infancia hoy para construir la próxima generación.',
      imageActivity: 'nueve',
      video: 'Estudiantil'

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


