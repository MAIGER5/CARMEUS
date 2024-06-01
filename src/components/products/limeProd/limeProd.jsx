import React from 'react';
import styles from './limeProd.module.css';


export const LimeProd = () => {
  return (
    <div className={styles.contenedorLime}>
        <div className={styles.firstContainer}>
            <h1>PRODCUTOS CAL</h1>
            <div className={styles.card2Colum}>
                <div className={styles.subtitles}>
                    <p>Productos Cal</p>
                    <p>Servicio End to End</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat officiis modi quas mollitia perferendis sequi repellat <br />perspiciatis repellendus, consequatur architecto, non ab, beatae voluptate ad quae illum inventore porro! Laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dicta suscipit accusamus iste eos consequatur officia quibusdam nihil ipsam culpa at fugiat ducimus tempore, aspernatur vitae odit repellat. Eaque, provident?</p>
                    <button>Mas Información</button>
                </div>
            </div>
        </div>
    </div>
  )
}
