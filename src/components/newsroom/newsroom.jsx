import React, { useContext } from 'react';
import styles from './newsroom.module.css';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import DataContext from '../dataContext/dataContext';



export const Newsroom = () => {

  const data = useContext(DataContext)

  // if (!data || !Array.isArray(data) || data.length === 0) {
  //   return <div>No data available</div>;
  // }

  const cld = new Cloudinary({
    cloud:{
      cloudName: 'dbn2bb4e2'
    }
  });

  const myImage = cld.image(data[0].imageActivity)

  return (
    <div className={styles.contenedor}>

      <div className={styles.mainScreen}>

        <div className={styles.textMainScreen}>
          <p>{data[0].date}</p>
          <h1>{data[0].title}</h1>
        </div>
      </div>

      <div className={styles.bodyBackground}>
        <div className={styles.textBody}>
          <p>{data[0].paragraph1}</p>
          <p>{data[0].paragraph2}</p>
          <p>{data[0].paragraph3}</p>
        </div>
        <div className={styles.imgBody}>
          <AdvancedImage cldImg={myImage}/>
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
