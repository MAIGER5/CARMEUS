import { MainScreen } from "./mainScreen/mainScreen";
import styles from "./home.module.css"
import { FirstRowX3 } from "./firstRowX3/firstRowX3";
import { SecondRowX3 } from "./secondRowX3/secondRowX3";
import { Carrusel } from "./carrusel/carrusel";
import { ThirdRowX3 } from "./thirdRowX3/thirdRowX3";
import { FourRowX3 } from "./fourRowX3/fourRowX3";
import { FiveRowX3 } from "./fiveRowX3/fiveRowX3";
import { SixRowX2 } from "./sixRowX2/sixRowX2";
// import { Card } from "./carrusel/card";


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
      <div className={styles.marginTop}>  {/*this className is to hidden or show the component to make responsive*/}
        <ThirdRowX3/>
      </div>
      <div className={`${styles.marginTop} ${styles.boxSombra}`}>  {/*this className is to hidden or show the component to make responsive*/}
        <FourRowX3/>
      </div>
      <div className={styles.marginTop}>  {/*this className is to hidden or show the component to make responsive*/}
        <FiveRowX3/>
      </div>
      <div className={`${styles.marginTop} ${styles.boxSombra}`}>  {/*this className is to hidden or show the component to make responsive*/}
        <SixRowX2/>
      </div>
      {/* <Card/> */}
    </div>
  )

}
