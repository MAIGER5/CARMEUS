import React, { useState } from 'react';
import styles from './footer.module.css'
import carmeusWhite from '../utils/logos/carmeusWhite.png';
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CardFooter } from '../cards/cardFooter/cardFooter';
import DataContext from '../dataContext/dataContext';
import { useLocation } from 'react-router-dom';
import dataFooter from '../utils/data/data.footer';




export const Footer = () => {

    const location = useLocation();

    const [ data5, setData5 ] = useState(
        dataFooter
    )
    
  return (
    <div className={location.pathname !== '/contact'? styles.boxPrincipal: styles.boxPrincipalNone}>
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
                    <h6>Su Regón y Lenguaje <br /> <br />
                    En</h6>
                    {/* <p>En</p> */}
                    {/* <div>
                        <h1></h1>
                    </div> */}
                </div>
                <div className={`${styles.card}`}>
                    <a>Aplicaciones</a>
                    <a>Productos & Servicios</a>
                    <a>Sustentabilidad</a>
                    <a>Trabaja para Carmeus</a>
                    <a>Soporte</a>
                </div>
            </div>
            <div className={`${styles.contCards2}`}>
                <div className={`${styles.card}`}>
                    <h5>Carmeuse Foundation</h5>
                    <p>Carmeuse is committed to providing financial support and volunteerism to organizations whose primary focus is to help underprivileged children in need with opportunities in education, training and mentoring.</p>
                    <h6>Más información acerca de Fundtion</h6>
                </div>
                <div className={`${styles.card}`}>
                    <h5>Compliance Concerns</h5>
                    <p>If you have a compliance concern (we’ll keep it confidential).</p>
                    <h6>Speak Up</h6>
                    <h5>Supplier</h5>
                    <h6>Read our Code of Conduct</h6>

                </div>
            </div>
        </div>
    </div>
  )
}
