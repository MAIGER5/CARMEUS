import { MainScreen } from "./mainScreen/mainScreen";
import styles from "./home.module.css"
import { FirstRowX3 } from "./firstRowX3/firstRowX3";
import { SecondRowX3 } from "./secondRowX3/secondRowX3";
import { Carrusel } from "./carrusel/carrusel";
import { Card } from "./carrusel/card";


export const Home = () => {

  return (
    <div className={`${styles.contenedor}`}>
      <MainScreen/>
      <h2 className={`container ${styles.title}`}>Descubre Más & Conecta con Nosotros</h2>
      <FirstRowX3/>
      {/* <SecondRowX3/> */}
      <h2 className={`container ${styles.title}`}>Descubre Más & Conecta con Nosotros</h2>
      <div className={`container ${styles.carrusel}`}> {/*this className is to hidden or show the component to make responsive*/}
        <Carrusel/>
      </div>
      <div className={styles.cardX3}>  {/*this className is to hidden or show the component to make responsive*/}
        <SecondRowX3/>
      </div>
      {/* <Card/> */}
    </div>
  )

}
