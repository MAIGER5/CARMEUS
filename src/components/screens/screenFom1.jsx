import React from "react";
import styles from './screenForm1.module.css';
import DataContext from "../dataContext/dataContext";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { useContext } from "react";


export const ScreenForm1 = () =>{

    const data = useContext(DataContext)

    if (!data || !Array.isArray(data) || data.length === 0) {
      return <div>No data available</div>;
    }

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dbn2bb4e2'
        }
    });

    const myImage = cld.image(data[0].image); 

    return (
        <div className={styles.contenedor}>
            <AdvancedImage
                className={styles.screen} 
                cldImg={myImage} 
            />
            <div className={styles.cardDescription}>
                <h1>{data[0].title}</h1>
                <p>{data[0].description}</p>
            </div>
        </div>
    );
};