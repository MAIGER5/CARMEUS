import React from 'react';
import styles from './mainScreen.module.css';
import videoCarmeus from '../../../../../Carmeuse.mp4'

export const MainScreen = () => {
  return (
    <video className={styles.screen} muted autoPlay loop src={videoCarmeus} ></video>
    // <div className={styles.screen}></div>
  )
}
