import React, { useState } from 'react';
import styles from './footer.module.css'
import carmeusWhite from '../utils/logos/carmeusWhite.png';
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import { CardFooter } from '../cards/cardFooter/cardFooter';
import DataContext from '../dataContext/dataContext';




export const Footer = () => {

    const [ data5, setData5 ] = useState([
        {
            id:1,
            view: "home",
            title:"HOLA CRECE CON NOSOTROS",
            description: "texto cualquiera para probar el frontend",
            buttomInfo: "Contactanos"
        },
        {
            id:2,
            view: "productos",
            title:"HOLA CRECE CON NOSOTROS",
            description: "texto cualquiera para probar el frontend",
            buttomInfo: "Contactanos"
        },
        {
            id:3,
            view: "about",
            title:"HOLA CRECE CON NOSOTROS",
            description: "texto cualquiera para probar el frontend",
            buttomInfo: "Contactanos"
        },
        {
            id:4,
            view: "history",
            title:"HOLA CRECE CON NOSOTROS",
            description: "texto cualquiera para probar el frontend",
            buttomInfo: "Contactanos"
        },
        {
            id:5,
            view: "sustentabilidad",
            title:"HOLA CRECE CON NOSOTROS",
            description: "texto cualquiera para probar el frontend",
            buttomInfo: "Contactanos"
        },
        {
            id:6,
            view: "contact",
            title:"HOLA CRECE CON NOSOTROS",
            description: "texto cualquiera para probar el frontend",
            buttomInfo: "Contactanos"
        },
        {
            id:7,
            view: "services",
            title:"HOLA CRECE CON NOSOTROS",
            description: "texto cualquiera para probar el frontend",
            buttomInfo: "Contactanos"
        }
    ])

    
  return (
    <div className={` ${styles.boxPrincipal}`}>
        <div className={styles.responsiveCard}>
            <DataContext.Provider value={data5}>
                <CardFooter/>
            </DataContext.Provider>
        </div>
        <div className={` ${styles.contenedor}`}>
            <div className={`${styles.contCards1}`}>
                <div className={`${styles.card}`} id={styles.cardLogo}>
                    <div className={styles.logoCarmeus}><img src={carmeusWhite} alt="" /></div>
                    <div>
                        <h6>Join us on social networks</h6>
                        <div className={styles.logosRedes}>
                            <div className={styles.iconRedes}>
                                <FaLinkedinIn />
                            </div>
                            <div className={styles.iconRedes}>
                                <FaFacebookF />
                            </div>
                            <div className={styles.iconRedes}>
                                <PiInstagramLogoLight />
                            </div>
                            <div className={styles.iconRedes}>
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                    <h6>Su Regón y Lenguaje</h6>
                    <div>
                        <h1></h1>
                    </div>
                </div>
                <div className={`${styles.card}`}>
                    <h6>Aplicaciones</h6>
                    <h6>Productos & Servicios</h6>
                    <h6>Sustentabilidad</h6>
                    <h6>Trabaja para Carmeus</h6>
                </div>
            </div>
            <div className={`${styles.contCards2}`}>
                <div className={`${styles.card}`}>
                    <h5>Aplicaciones</h5>
                    <h5>Productos & Servicios</h5>
                    <h5>Sustentabilidad</h5>
                    <h5>Trabaja para Carmeus</h5>
                </div>
                <div className={`${styles.card}`}>
                    <h5>Aplicaciones</h5>
                    <h5>Productos & Servicios</h5>
                    <h5>Sustentabilidad</h5>
                    <h5>Trabaja para Carmeus</h5>
                </div>
            </div>
        </div>
    </div>
  )
}
