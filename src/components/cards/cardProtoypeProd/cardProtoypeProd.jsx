import React from 'react';
import styles from './cardProtoypeProd.module.css';

export const CardProtoypeProd = () => {
  return (
    <div className={styles.contenedor}>

      <div className={styles.cartFirstText}>
        <div className={styles.cardDesciption}>
          <h1>CAL HIDRATADA </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis quas quidem, itaque exercitationem iste quia cum amet iure eum corporis labore pariatur tempore, aliquam dolor quisquam, quam suscipit eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, at id debitis, nam laudantium corrupti vel ea possimus tenetur doloremque quidem eius culpa minus. Veniam eos cupiditate quos animi perspiciatis?</p>
        </div>
        <div className={styles.cardConsiderations}>
          <h1>Consideraciones Claves</h1>
          <ul>
            <li>Hola Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia exercitationem iusto reiciendis libero inventore porro nemo autem?</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia exercitationem iusto reiciendis libero inventore porro nemo autem?</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia exercitationem iusto reiciendis libero inventore porro nemo autem?</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia exercitationem iusto reiciendis libero inventore porro nemo autem?</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia exercitationem iusto reiciendis libero inventore porro nemo autem?</li>
          </ul>
        </div>
      </div>

    </div>
  )
}
