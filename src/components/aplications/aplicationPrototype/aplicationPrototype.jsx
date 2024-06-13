import React, { useContext } from 'react';
import styles from './aplicationPrototype.module.css';
import DataContext from '../../dataContext/dataContext';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';




export const AplicationPrototype = () => {

  const data = useContext(DataContext);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }


  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  })

  const myimage = cld.image(data[0].image)

  return (
    <div className={styles.contenedor}>

      {/* este primer componente es la card con titulo plastico & caucho*/}
      <div className={styles.firstCard}>
        <div>
          <h1>{data[0].title}</h1>
          <span>Los productos minerales a base de calcio se utilizan ampliamente en la producción de plásticos y cauchos en todo el mundo. Las funciones de los productos a base de calcio van desde agentes de relleno y compactación hasta agentes estabilizantes y de manipulación de alta gama personalizados. Dentro de la cartera de Carmeuse contamos con una gama de productos que cumplen química y físicamente las especificaciones altamente exigentes requeridas en estas aplicaciones.</span>
          <div className={styles.boton}>
            <button>Pregunta por un Especialista</button>
          </div>
        </div>
        <div>
          <AdvancedImage cldImg={myimage}/>
        </div>
      </div>

      {/* este es la segunda card donde esta la barra de menu  a la izquierda*/}
      <h1 className={styles.titlesComponents}>Caracteristicas & Beneficios</h1>
      <div className={styles.contSecondCard}>
        {/**Barra lateral Izquierda**/}
        <div className={styles.menuLeft}>
          <div>
            <p>Características & Beneficios</p>
            <p>Diseño Técnico</p>
            <p>Productos Relacionados</p>
          </div>
          <div>
            <span>¿Tiene alguna pregunta sobre esta aplicación? Pregunte a nuestros especialistas.  </span>
            <button>CONTACTANOS</button>
          </div>
        </div>
        {/**Termina aqui**/}

        {/**Empieza aqui Componente de la derecha feature and benefits**/}
        <div>
          <div className={styles.feuatures}>
            <h1>Caracteristicas</h1>
            <ul>
              <li>La gama de productos para estas aplicaciones tiene una pureza y una distribución granulométrica de gran afinidad, lo que la hace idónea para su uso en plásticos y cauchos, ya que éstos son un factor clave en la calidad del producto final.</li>
              <li>El producto a base de caliza, con su elevada finura y pureza, se adapta perfectamente a aplicaciones como la densificación.</li>
              <li>Estabilización en estado sólido: la alta reactividad del producto a base de cal se traduce en una neutralización muy rápida y adecuada del ácido causado por la degradación UV de los plásticos.</li>
              <li>Seguridad: el uso de productos a base de cal como estabilizantes en plásticos ha sustituido a estabilizantes prohibidos por riesgos para la salud.</li>
            </ul>
          </div>
          <div className={styles.benefits}>
            <h1>Beneficios</h1>
            <ul>
              <li>Gracias a su elevada pureza y a sus certificaciones (HACCP, FCA, EN 12518, etc.), estos productos pueden cumplir los requisitos para su uso en los mercados más exigentes (industria alimentaria e incluso farmacéutica).</li>
              <li>No se liberan elementos no deseados durante la neutralización.</li>
              <li>Nuestros productos tienen una ventaja económica sobre los productos químicos alternativos utilizados para neutralizar la capacidad en plásticos y cauchos.</li>
              <li>Instalaciones de producción industrial en toda Europa y exportados a gran escala en todo el mundo.</li>
            </ul>
          </div>
        </div>
        {/**Termina aqui**/}
      </div>

      {/**Empieza aqui componente de productos relacionados**/}
      <h1 className={styles.titlesComponents}>Productos Relacionados</h1>
      <div className={styles.productRelationed}>
        <div className={styles.cardProductRelationed}>
          <div> 
            <AdvancedImage cldImg={myimage}/>
          </div>
          <div>
            <h1>Calv Viva</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias debitis harum impedit voluptatum quod pariatur nesciunt voluptatem facere ducimus ab tenetur. Debitis maiores minus perspiciatis sapiente! Assumenda, quaerat doloremque.</span>
          </div>
        </div>
      </div>
      {/**Termina aqui**/}

      {/**Empieza aqui componente de servicos relacionados**/}
      <h1 className={styles.titlesComponents}>Servicios Relacionados</h1>
      <div className={styles.productRelationed}>
        <div className={styles.cardProductRelationed}>
          <div> 
            <AdvancedImage cldImg={myimage}/>
          </div>
          <div>
            <h1>Calv Viva</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias debitis harum impedit voluptatum quod pariatur nesciunt voluptatem facere ducimus ab tenetur. Debitis maiores minus perspiciatis sapiente! Assumenda, quaerat doloremque.</span>
          </div>
        </div>
      </div>
      {/**Termina aqui**/}


    </div>
  )
}
