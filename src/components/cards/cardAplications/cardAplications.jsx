import React, { useContext } from 'react';
import styles from './cardAplications.module.css';
import DataContext from '../../dataContext/dataContext';
import {AdvancedImage} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen/index';
import { Link } from 'react-router-dom';




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

    <div className={styles.contenedor}>
      {
        data.map((ele, index)=>(
          <Link to={`/${ele.link}`} className={styles.card} key={index}>
            <div>{ele.description}</div>
            <div>
              <AdvancedImage cldImg={cld.image(ele.image)} />
            </div>
          </Link>
        ))
      }
    </div>
  )
}
