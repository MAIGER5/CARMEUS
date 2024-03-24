import React from 'react'
import styles from './secondRowX3.module.css';

export const SecondRowX3 = () => {
  return (
    <div className={`container`}>
        {/* <div className={`${styles.cardSmall}`}>
            <div></div>
            <div></div>
        </div>
        <div className={`${styles.cardSmall}`}>
            <div></div>
            <div></div>
        </div>
        <div>hola 3</div> */}
      <div className="row border border-2 border-blue border-primary">
        <div className="col border border-2 border-blue border-primary">
          Column
        </div>
        <div className="col border border-2 border-blue border-primary">
          Column
        </div>
        <div className="col-6 border border-2 border-primary">
          Column
        </div>
      </div>
    </div>
  )
}
