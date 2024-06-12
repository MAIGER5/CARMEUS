import React from "react";
import { useLocation } from 'react-router-dom'
import styles from './screenForm1.module.css';
import DataContext from "../dataContext/dataContext";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { useContext } from "react";


export const ScreenForm1 = () =>{

    const location = useLocation();

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


    const paths = {
        path1: 'CalAgricola',
        path2: 'CalHidratada',
        path3: 'CalDolomita',
        path4: 'CalViva',
        path5: 'PiedraCaliza',
        path6: 'Carbonato',
        path7: 'Neutramol',
    }

    // const shouldDisplayDiv = Object.values(paths).every(path => location.pathname !== `/${path}`);

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
            {/* {shouldDisplayDiv && (
                <div className={styles.cardDescription}>
                    <h1>{data[0].title}</h1>
                    <p>{data[0].description}</p>
                </div>
            )} */}
        </div>
    );
};