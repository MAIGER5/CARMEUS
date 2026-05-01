import React, { useState } from 'react';
import DataContext from '../../dataContext/dataContext';
import { Newsroom } from '../newsroom';

export const NewThree = () => {

    const [ dataScren ] =useState([
    {
      id: 1,
      image: 'SOSTENIBILIDAD',
      title: "SOSTENIBILIDAD",
      description: 'Para cumplir nuestra misión de contribuir a un mundo mejor,creemos en nuestra gente, nuestra tecnología y nuestra gestión sostenible',
      description2: 'Sébastien Dossogne.',
      description3: 'Director Ejecutivo de Carmeuse',
    }
  ])

  const [ dataNew ] =useState([
    {
      id: 1,
      paragraph1: 'La humanidad se enfrenta a diversos desafíos en materia de sostenibilidad. En primer lugar, persisten importantes disparidades en el desarrollo humano a nivel mundial. Nuestros productos y servicios son fundamentales para los clientes que suministran soluciones y materiales esenciales para el desarrollo humano. Por ejemplo, el acero y la construcción son clave para la infraestructura y el equipamiento doméstico. El vidrio, el tratamiento de aguas, la calidad del aire, la agricultura, el refinado de metales básicos o la producción de baterías son otras áreas importantes del desarrollo humano que no existirían sin nuestros productos y servicios.',
      paragraph2: 'Otro reto en materia de sostenibilidad es el impacto de las emisiones de gases de efecto invernadero en el clima, siendo el CO 2 el principal responsable.',
      paragraph3: '',
      imageActivity: 'CEO-Carmeuse'

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