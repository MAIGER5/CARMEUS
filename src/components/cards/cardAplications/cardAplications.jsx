import React, { useContext } from 'react';
import styles from './cardAplications.module.css';
import DataContext from '../../dataContext/dataContext';
import {AdvancedImage} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen/index';




export const CardAplications = () => {

  const data = useContext(DataContext)

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  });

  // const myImageCero = cld.image(data[0].image);

  return (

    <>
      {
        data.map((ele)=>(
          <div className={styles.contenedor}>
            <div>{ele.description}</div>
            <div>
              <AdvancedImage cldImg={cld.image(ele.image)} />
            </div>
          </div>
        ))
      }
    </>
  )
}
