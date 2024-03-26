import { MainScreen } from "./mainScreen/mainScreen";
import styles from "./home.module.css"
import { FirstRowX3 } from "./firstRowX3/firstRowX3";
import { SecondRowX3 } from "./secondRowX3/secondRowX3";
import { ThirdRow } from "./thirdRow/thirdRow";


export const Home = () => {

    return (
      <div className={`${styles.contenedor}`}>
        <MainScreen/>
        <FirstRowX3/>
        {/* <SecondRowX3/> */}
        <ThirdRow/>
      </div>
    )

}
