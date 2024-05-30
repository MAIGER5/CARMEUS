import React from 'react';
import styles from './mainScreen.module.css';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedVideo} from '@cloudinary/react';
import videoCarmeus from '../../../../../Carmeuse.mp4'

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

    // <video className={styles.screen} muted autoPlay loop src={videoCarmeus} ></video>
    // <div className={styles.screen}></div>
  )
}
