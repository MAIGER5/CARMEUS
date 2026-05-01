import React, { useContext, useState } from 'react';
import styles from './newsroom.module.css';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import {AdvancedVideo} from '@cloudinary/react';
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import DataContext from '../dataContext/dataContext';
import { ScreenForm1 } from '../screens/screenFom1';



export const Newsroom = () => {


  const { dataNew, dataScren } = useContext(DataContext);

  if (!dataNew || !Array.isArray(dataNew) || dataNew.length === 0) {
    return <div>No hay datos disponibles</div>;
  }

  const cld = new Cloudinary({
    cloud:{
      cloudName: 'dbn2bb4e2'
    }
  });

  const myImage = cld.image(dataNew[0].imageActivity);  

  return (
    <div className={styles.contenedor}>

      <div className={styles.mainScreen}>
        
        <DataContext.Provider value={dataScren}>
          <ScreenForm1/>
        </DataContext.Provider>

        {/* <div className={styles.textMainScreen}>
          <p>{data[0].date}</p>
          <h1>{data[0].title}</h1>
        </div> */}
      </div>

      <div className={styles.bodyBackground}>
        <div className={styles.textBody}>
          {dataNew[0].paragraph1 && <p>{dataNew[0].paragraph1}</p>}
          {dataNew[0].paragraph2 && <p>{dataNew[0].paragraph2}</p>}
          {dataNew[0].paragraph3 && <p>{dataNew[0].paragraph3}</p>}
          {dataNew[0].paragraph4 && <p>{dataNew[0].paragraph4}</p>}
        </div>
        {/* <AdvancedVideo 
          className={styles.videoEstudiantil} 
          cldVid={myVideo} 
          autoPlay 
          // muted 
          loop
        /> */}
        <div className={styles.imgBody}>
          <AdvancedImage cldImg={myImage} />
        </div>
      </div>

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
  )
}
