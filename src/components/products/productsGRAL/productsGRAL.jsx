import React from 'react'
import styles from './productsGRAL.module.css';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import { useNavigate } from 'react-router-dom';


export const ProductsGRAL = () => {

  const navigate = useNavigate();

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  });

  const myImageCales = [
    cld.image('cales'), 
    cld.image('calViva'), 
    cld.image('soilTreatment'),
    cld.image('hidratada')
  ];
  const myImagePiedra = [
    cld.image('carbonato'), 
    cld.image('caliza'), 
    cld.image('piedraCaliza'),
    cld.image('agricola')
  ];
  // const myImageNeutramol = [
  //   cld.image('siete'), 
  //   cld.image('siete'), 
  //   cld.image('siete'),
  //   cld.image('siete')
  // ];

  const handleClickNavigate = (path)=> {
    navigate(path)
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.products}>
        <h1>PRODUCTOS</h1>
        <div className={styles.description}>
          <div className={styles.titles}>
            <div>
              <p>Productos Calcinados</p>
              <p>Productos No Calcinados</p>
              {/* <p>Neutramol</p> */}
            </div>
          </div>
          <div className={styles.texto}>Carmeuse Colombia es un productor líder de cal, piedra caliza y productos especiales a base de cal, esenciales para una amplia gama de servicios e industrias.

Todo comienza con la piedra caliza extraída de nuestras canteras y minas. Nuestro equipo global de expertos altamente capacitados puede asociarse con nuestros clientes para determinar la solución óptima de cal o piedra caliza que satisfaga sus necesidades.

Los productos de cal desempeñan un papel crucial en nuestra vida cotidiana: desde ayudar a mantener nuestras aguas limpias, mejorar los suelos y fortalecer el acero, hasta innumerables otras aplicaciones.</div>
        </div>
      </div>
      <div className={styles.cardProduct}>
        <div className={styles.cardText}>
          <h1>PRODUCTOS CALCINADOS</h1>
          <p>Los productos calcinados de la piedra caliza y piedra dolomita, como la cal viva,  la cal hidratada y la cal dolomita, se obtienen mediante procesos de alta temperatura. Estos materiales son esenciales en diversas industrias por sus propiedades químicas, utilizadas en el tratamiento de aguas, la construcción, la agricultura y la producción de acero, entre otros.</p>
          <button onClick={()=> handleClickNavigate('/products/cales')}>Explorar Mas</button>
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
          <h1>PRODUCTOS NO CALCINADOS</h1>
          <p>Los productos no calcinados de piedra caliza y carbonato de calcio son materiales naturales que no han sido sometidos a procesos térmicos de calcinación. La piedra caliza, compuesta principalmente por carbonato de calcio (CaCO₃), se extrae, tritura y clasifica para diversos usos industriales. Al no ser calcinados, estos productos conservan sus propiedades originales, como su alta pureza, estabilidad química y capacidad para neutralizar ácidos. Se utilizan ampliamente en la construcción, la agricultura (como corrector de suelos), la fabricación de vidrio, plásticos, pinturas y en la industria del papel. Su carácter ecológico y su bajo costo los convierten en una materia prima esencial en múltiples sectores</p>
          <button onClick={()=> handleClickNavigate('/products/stone')}>Explorar Mas</button>
        </div>
        <div className={styles.cardImage}>
          <div className={styles.images}><AdvancedImage cldImg={myImagePiedra[0]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImagePiedra[1]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImagePiedra[2]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImagePiedra[3]}/></div>
        </div>
      </div>
      {/* <div className={styles.cardProduct}>
        <div className={styles.cardText}>
          <h1>NEUTRAMOL</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ratione vitae doloribus est omnis qui voluptatibus impedit sint sit officiis obcaecati reiciendis, consequatur repudiandae numquam beatae illum ab. Ipsa, commodi?</p>
          <button onClick={()=> handleClickNavigate('/products/neutramol')}>Explorar Mas</button>
        </div>
        <div className={styles.cardImage}>
          <div className={styles.images}><AdvancedImage cldImg={myImageNeutramol[0]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImageNeutramol[1]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImageNeutramol[2]}/></div>
          <div className={styles.images}><AdvancedImage cldImg={myImageNeutramol[3]}/></div>
        </div>
      </div> */}
    </div>
  )
}
