import { MainScreen } from "./mainScreen/mainScreen";
import styles from "./home.module.css"
import { FirstRowX3 } from "./firstRowX3/firstRowX3";
import { SecondRowX3 } from "./secondRowX3/secondRowX3";
import { Carrusel } from "./carrusel/carrusel";
import { ThirdRowX3 } from "./thirdRowX3/thirdRowX3";
import { FourRowX3 } from "./fourRowX3/fourRowX3";
import { FiveRowX3 } from "./fiveRowX3/fiveRowX3";
import { SixRowX2 } from "./sixRowX2/sixRowX2";
import { FloatCard } from "./floatCard/floatCard";
import { TextScreen } from "./textScreen/textScreen";
// import { Card } from "./carrusel/card";


export const Home = () => {

  return (
    <div className={`${styles.contenedor}`}>
      <div className={styles.mainScreen}>
        <MainScreen/>
        <dir className={styles.capa}></dir>
        <TextScreen/>
        <div className={styles.cardFloatNormal}>
          <FloatCard/>
        </div>
      </div>
      <div className={styles.cardFloatResponsive}>
        <FloatCard/>
      </div>
      <h2 id={styles.exploraPoductos} className={`${styles.title}`}>Explora Nuestros Productos</h2>
      <div className={styles.firstCards}>
        <FirstRowX3/>
      </div>
      {/* <SecondRowX3/> */}
      <h2 className={`${styles.title}`}>Descubre Más & Conecta con Nosotros</h2>
      <div className={`${styles.carrusel}`}> {/*this className is to hidden or show the component to make responsive*/}
        <Carrusel/>
      </div>
      <div className={styles.cardX3}>  {/*this className is to hidden or show the component to make responsive*/}
        <SecondRowX3/>
      </div>
      <div className={styles.marginTop}>  {/*this className is to hidden or show the component to make responsive*/}
        <ThirdRowX3/>
      </div>
      <div className={`${styles.boxSombra}`}>  {/*this className is to hidden or show the component to make responsive*/}
        <div className={styles.marginTop2}>
          <FourRowX3/>
        </div>
      </div>
      <div className={styles.marginTop}>  {/*this className is to hidden or show the component to make responsive*/}
        <FiveRowX3/>
      </div>
      <div className={`${styles.boxSombra}`}>  {/*this className is to hidden or show the component to make responsive*/}
        <div className={styles.marginTop2}>
          <SixRowX2/>
        </div>

      </div>
      {/* <Card/> */}
    </div>
  )

}
