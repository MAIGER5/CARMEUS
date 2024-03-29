import { MainScreen } from "./mainScreen/mainScreen";
import styles from "./home.module.css"
import { FirstRowX3 } from "./firstRowX3/firstRowX3";
import { SecondRowX3 } from "./secondRowX3/secondRowX3";
import { Carrusel } from "./carrusel/carrusel";


export const Home = () => {

  return (
    <div className={`${styles.contenedor}`}>
      <MainScreen/>
      <h2 className={`container ${styles.title}`}>Descubre Más & Conecta con Nosotros</h2>
      <FirstRowX3/>
      {/* <SecondRowX3/> */}
      {/* <Carrusel/> */}
      <h2 className={`container ${styles.title}`}>Descubre Más & Conecta con Nosotros</h2>
      <SecondRowX3/>
    </div>
  )

}
