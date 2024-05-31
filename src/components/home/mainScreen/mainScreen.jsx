import React from 'react';
import styles from './mainScreen.module.css';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedVideo} from '@cloudinary/react';

export const MainScreen = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  });

  const myVideo = cld.video('video-2');

  return (
    <AdvancedVideo 
    className={styles.screen} 
    cldVid={myVideo} 
    autoPlay 
    muted 
    loop
  />
  )
}
