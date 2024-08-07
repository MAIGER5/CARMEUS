import React, { useState } from "react";
import styles from './aboutUs.module.css'
import DataContext from "../dataContext/dataContext";
import { ScreenForm1 } from "../screens/screenFom1";
import { Text_Img } from "../cards/cardsAbout/text_Img/text_Img";
import { Img_Text } from "../cards/cardsAbout/img_Text/img_Text";



export const AboutUs = ()=> {

    const [ dataScreen, setDataScreen ] = useState([

        {
          id:1,
          image: 'AboutUs',
          title: "SOMOS CARMEUSE",
          description: 'Somos un líder mundial en innovación de materiales y servicios con competencias centrales en equipos de minería, procesamiento de materiales y soluciones de ingeniería. Somos parte vital de importantes industrias globales que trabajan con productos químicos, agroindustria, siderurgia, tratamiento de aguas y efluentes, purificación de gases, construcción, entre otros. Optimizamos los procesos de nuestros clientes, mejoramos la seguridad y brindamos productos y servicios de calidad.' ,
        }
    ])

    const [ dataAbout, setDataAbout ] = useState([

        {
            id: 1,
            title: "SEDE MUNDIAL",
            image: "belgica",
            description: 'Ubicada en Louvain-la-Neuve (Bélgica), el Grupo Carmeuse tiene aproximadamente 4.500 empleados y atiende a más de 8.500 clientes anualmente a través de una red global de 80 fábricas y 50 minas de piedra caliza. Desde 1860, hemos construido nuestro negocio sobre la base de la confianza y la integridad. Esto nos distingue, junto con nuestra capacidad para innovar y colaborar con las personas a las que servimos: nuestros clientes, nuestros accionistas, nuestras comunidades y nuestros empleados.',
            buttomInfo: 'Learn More >',
          },
          {
            id: 2,
            title: "CARMEUSE AMERICAS",
            image: "america",
            description: 'Carmeuse Américas, responsable de las operaciones en el Norte, Centro y Sur, es una filial del Grupo Carmeuse. Establecida en Norteamérica desde 1992, ha ampliado su presencia geográfica mediante una serie de adquisiciones. Carmeuse Américas se ha convertido en uno de los principales proveedores de cal, piedra caliza y otros productos minerales, equipos y soluciones de ingeniería en la región de las Américas. Con sede en Pittsburgh (PA), cuenta con más de 30 plantas de producción en el este de Estados Unidos, Canadá y América Latina, con más de 2.500 empleados. Carmeuse Américas ha pasado de ser un productor de minerales a base de calcio a una empresa que continúa agregando nuevas ofertas integradas de productos y servicios. ',
            buttomInfo: 'Learn More >',
          },
    ])
      
    const [ dataAbout2, setDataAbout2 ] = useState([

        {
            id: 1,
            title: "CARMEUSE COLOMBIA",
            image: "contacto1",
            description: 'La operación de Carmeuse en Colombia comenzó en 2013 con la adquisición de Procesadora de Cales Procecal SAS. En 2018, se estableció un joint venture entre Procesadora de Cales Procecal, Procecal SAS y Productos Minerales Calcáreos Promical SAS , dando origen a Rio Cal SAS, una entidad creada para unir sinergias entre las dos principales productoras de cal del país. En 2023, Rio Cal pasó a ser 100% parte de Carmeuse. Guiada por la visión de ser la empresa de mayor valor en su segmento en Colombia, Carmeuse Colombia se enfoca en ofrecer soluciones y productos innovadores que generen valor, aumenten la productividad de nuestros clientes y proporcionen ventajas competitivas. Además, estamos comprometidos en ofrecer oportunidades de crecimiento y desarrollo para todos los integrantes de nuestra red empresarial.',
            buttomInfo: 'Learn More >',
          },
          {
            id: 2,
            title: "CUARTO",
            image: "cuatro",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam !',
            buttomInfo: 'Learn More >',
          },
    ])
      
    return (

        <div className={styles.contenedor}>
            <DataContext.Provider value={dataScreen}>
                <ScreenForm1/>
            </DataContext.Provider>
            <div className={styles.cards}>
                <DataContext.Provider value={dataAbout}>
                    <Img_Text/>
                    <Text_Img/>
                </DataContext.Provider>
                <DataContext.Provider value={dataAbout2}>
                    <Img_Text/>
                    {/* <Text_Img/> */}
                </DataContext.Provider>

            </div>
        </div>
    )
}