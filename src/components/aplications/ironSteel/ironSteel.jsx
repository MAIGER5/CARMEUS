import React, { useState } from 'react';
import styles from './ironSteel.module.css';
import DataContext from '../../dataContext/dataContext';
import { CardAplications } from '../../cards/cardAplications/cardAplications';
import { ScreenForm1 } from '../../screens/screenFom1';



export const IronSteel = () => {

  const [ dataScreen, setDataScreen ] = useState([

    {
      id:1,
      image: 'ironSteel',
      title: "HIERRO Y ACERO",
      description: 'La cal es fundamental en el proceso de fabricación del acero. Tanto si se utiliza como agente fundente para una química adecuada de la escoria, para proteger los sinterizados de mineral de hierro, para prolongar la vida útil de los refractarios, para mantener la química del cromo en el acero inoxidable o como lubricante en el proceso de fundición, la calidad y el suministro de su cal afectan a su cuenta de resultados. Carmeuse puede suministrar cal dolomítica y de alto contenido en calcio para satisfacer sus necesidades y proporcionar soluciones de sistemas para la inyección y manipulación de cal.',
    }
  ])

  const [ dataCard1ApliOpcional, setdataCard1ApliOpcional] = useState([  
    {
      id: 1,
      image: "hierro",
      description: 'Producción de Hierro',
      link: 'Aplications/steel/iron'
    },
    {
      id: 2,
      image: "acero",
      description: 'Producción de Acero',
      link: 'Aplications/steel/acero'
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
