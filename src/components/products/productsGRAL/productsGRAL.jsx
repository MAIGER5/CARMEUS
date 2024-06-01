import React from 'react'
import styles from './productsGRAL.module.css';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';


export const ProductsGRAL = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  });

  const myImageCales = [
    cld.image('uno'), 
    cld.image('uno'), 
    cld.image('uno'),
    cld.image('uno')
  ];
  const myImagePiedra = [
    cld.image('dos'), 
    cld.image('dos'), 
    cld.image('dos'),
    cld.image('dos')
  ];
  const myImageNeutramol = [
    cld.image('siete'), 
    cld.image('siete'), 
    cld.image('siete'),
    cld.image('siete')
  ];



  return (
    <div className={styles.contenedor}>
      <div className={styles.products}>
        <h1>PRODUCTOS</h1>
        <div className={styles.description}>
          <div className={styles.titles}>
            <div>
              <p>Productos Cales</p>
              <p>Piedra Caliza & Carbonato</p>
              <p>Neutramol</p>
            </div>
          </div>
          <div className={styles.texto}>Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Labore aliquid repellat culpaamet pariatur voluptas doloribus harum? Sunt atque vel nesciunt,quidem aliquam non reiciendis tenetur, a odio eos similique.Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeatquis quos fugit hic porro vel expedita consequuntur temporibussapiente rerum totam quibusdam dicta ad veritatis, undemolestias deleniti voluptatibus nisi. <br /> <br />Lorem, ipsumdolor sit amet consectetur adipisicing elit. Minus commodi cumvoluptate, ipsa dolore fugiat ea tempore nisi fugit doloremaperiam iste. Nam eaque impedit neque laborum, dolore a numquam</div>
        </div>
      </div>
      <div className={styles.cardProduct}>
        <div className={styles.cardText}>
          <h1>PRODUCTOS CALES</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ratione vitae doloribus est omnis qui voluptatibus impedit sint sit officiis obcaecati reiciendis, consequatur repudiandae numquam beatae illum ab. Ipsa, commodi?</p>
          <button>Explorar Mas</button>
        </div>
        <div className={styles.cardImage}>
          <div className={styles.images}><AdvancedImage cldImg={myImageCales[0]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImageCales[1]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImageCales[2]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImageCales[3]}/></div>
        </div>
      </div>
      <div className={styles.cardProduct}>
        <div className={styles.cardText}>
          <h1>PIEDRA CALIZAR & CARBONATO</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ratione vitae doloribus est omnis qui voluptatibus impedit sint sit officiis obcaecati reiciendis, consequatur repudiandae numquam beatae illum ab. Ipsa, commodi?</p>
          <button>Explorar Mas</button>
        </div>
        <div className={styles.cardImage}>
          <div className={styles.images}><AdvancedImage cldImg={myImagePiedra[0]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImagePiedra[1]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImagePiedra[2]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImagePiedra[3]}/></div>
        </div>
      </div>
      <div className={styles.cardProduct}>
        <div className={styles.cardText}>
          <h1>NEUTRAMOL</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ratione vitae doloribus est omnis qui voluptatibus impedit sint sit officiis obcaecati reiciendis, consequatur repudiandae numquam beatae illum ab. Ipsa, commodi?</p>
          <button>Explorar Mas</button>
        </div>
        <div className={styles.cardImage}>
          <div className={styles.images}><AdvancedImage cldImg={myImageNeutramol[0]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImageNeutramol[1]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImageNeutramol[2]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImageNeutramol[3]}/></div>
        </div>
      </div>
    </div>
  )
}
