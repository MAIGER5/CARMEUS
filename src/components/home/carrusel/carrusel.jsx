import React, { useState } from 'react';
import styles from './carrusel.module.css'

const pictures = ["https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg?size=626&ext=jpg&ga=GA1.1.1319243779.1711324800&semt=ais", "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg", "https://img.freepik.com/foto-gratis/vibrantes-hojas-arce-otonales-belleza-natural-exhibida-generada-ia_188544-15039.jpg" ]


export const Carrusel = () => {

  const [activeIndex, setActiveIndex ] = useState(0)

  // const grande = document.querySelector('.grande');
  // const punto = document.querySelectorAll('.punto');

  //Saber la posicion de ese punto;
  //Aplicar un transform translateX al grande
  //QUITAR la clase activo al punto que hemos hecho CLICK
  //AÑADIR la clase activo al punto que hemos hecho CLICK

  // punto.forEach((cadaPunto, i)=>{
  //   punto[i].addEventListener('click', ()=>{
      
  //     let position = i;
  //     let opertation = position * -50;

  //     grande.styles.transform = `translateX(${opertation}%)`

  //     punto.forEach((cadaPunto, i)=>{
  //       punto[i].classList.remove('activo');
  //     });
  //     punto[i].classList.add('activo');

  //   })
  // }
  
  const handlePointClick = (index)=>{
    setActiveIndex(index);
  }


  return (
    <div className={`container ${styles.carrousel}`}>
      <div className={styles.grande} style={{transition: 'all .5s ease', transform: `translateX(${activeIndex * -33.3}%)` }}>

        {
          pictures.map((ele, index)=>
            <img key={index} src={ele} alt="" className={styles.imagen}/>
          )
        }
      </div>
      <ul className={styles.puntos}>
        {Array.from({ length: 3 }).map((_, index) => (
          <li
            key={index}
            className={`${styles.punto} ${activeIndex === index ? styles.activo : ''}`}
            onClick={() => handlePointClick(index)}
          ></li>
        ))}      
      </ul>
    </div>
  )
}
