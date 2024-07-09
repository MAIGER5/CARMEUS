import React, { useState } from 'react';
import styles from './engeneerBuilding.module.css';
import DataContext from '../../dataContext/dataContext';
import { CardAplications } from '../../cards/cardAplications/cardAplications';
import { ScreenForm1 } from '../../screens/screenFom1';



export const EngeneerBuilding = () => {

  const [ dataScreen ] = useState([

    {
      id:1,
      image: 'treatmentSoil',
      title: "INGENIERIA CIVIL",
      description: 'Los ingenieros civiles y las agencias de todo el mundo están ampliando las redes de transporte, al tiempo que se ocupan de otros muchos proyectos. También buscan soluciones de ingeniería para trabajar con eficacia y mantener los costes bajo control. Para grandes proyectos como estos, el acceso a un suministro constante de materias primas suele ser un reto.',
    }
  ])

  const [ dataCard1ApliOpcional] = useState([  
    {
      id: 1,
      image: "aggregates",
      description: 'Agregados',
      link: 'Aplications/engeneerBuilding/aggregado'
    },
    {
      id: 2,
      image: "asphalt",
      description: 'Asfalto',
      link: 'Aplications/engeneerBuilding/asphalt'
    },
    {
      id: 2,
      image: "soilTreatment",
      description: 'Tratamiento de Suelos',
      link: 'Aplications/engeneerBuilding/soilTreatment'
    },

  ])

  return (
    <div className={styles.contenedor}>
      <DataContext.Provider value={dataScreen}>
        <ScreenForm1/>
      </DataContext.Provider>
      <div className={styles.aplications}> 
        <DataContext.Provider value={dataCard1ApliOpcional}>
          <CardAplications/>
        </DataContext.Provider>
      </div>
    </div>
  )
}
