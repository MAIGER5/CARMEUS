import React from 'react';
import styles from './newsroom.module.css'

export const Newsroom = () => {
  return (
    <div className={styles.contenedor}>

      {/* mainscreen */}
      <div className={styles.mainScreen}>

        {/* textMainscreen */}
        <div className={styles.textMainScreen}>
          <p>Junio 22, 2024</p>
          <h1>CARRERA POR LA EDUCACION INFANTIL EN EL MUNICIPIO DE LA DANTA</h1>
        </div>
      </div>

      {/* bodyBackground */}
      <div className={styles.bodyBackground}>
        <div className={styles.textBody}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dicta, accusamus ratione in corrupti quisquam natus temporaet voluptatem optio ipsum dolores suscipit ut cupiditate hicvero quia consequatur? Fugiat, voluptatum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dicta, accusamus ratione in corrupti quisquam natus temporaet voluptatem optio ipsum dolores suscipit ut cupiditate hicvero quia consequatur? Fugiat, voluptatum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dicta, accusamus ratione in corrupti quisquam natus temporaet voluptatem optio ipsum dolores suscipit ut cupiditate hicvero quia consequatur? Fugiat, voluptatum.</p>
        </div>
        <div className={styles.imgBody}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime magnam quam pariatur saepe sed error animi sunt adipisci accusantium deserunt, quisquam harum voluptate tenetur aut consequuntur provident expedita tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit unde obcaecati pariatur recusandae, vitae, tenetur quidem labore debitis cum delectus laborum reprehenderit itaque? Totam optio expedita mollitia ullam quaerat.</p>
        </div>
      </div>


    </div>
  )
}
