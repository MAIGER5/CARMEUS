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
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam  quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam' ,
        }
    ])

    const [ dataAbout, setDataAbout ] = useState([

        {
            id: 1,
            title: "PRIMERO",
            image: "nueve",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam !',
            buttomInfo: 'Learn More >',
          },
          {
            id: 2,
            title: "SEGUNDO",
            image: "ocho",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.!',
            buttomInfo: 'Learn More >',
          },
    ])
      
    const [ dataAbout2, setDataAbout2 ] = useState([

        {
            id: 1,
            title: "TERCERO",
            image: "siete",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam !',
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
                    <Text_Img/>
                </DataContext.Provider>

            </div>
        </div>
    )
}