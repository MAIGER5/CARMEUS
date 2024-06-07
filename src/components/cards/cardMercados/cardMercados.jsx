import React, { useContext } from 'react';
import styles from './cardMercados.module.css';
import DataContext from '../../dataContext/dataContext';
import { SlChemistry } from "react-icons/sl";
import { BsBuildingGear } from "react-icons/bs";
import { LuConstruction } from "react-icons/lu";
import { MdOutlineAgriculture } from "react-icons/md";
import { MdOutlineGasMeter } from "react-icons/md";
import { SiEquinixmetal } from "react-icons/si";
import { FaHandHoldingWater } from "react-icons/fa";
import { LiaNewspaper } from "react-icons/lia";
import { GiMineTruck } from "react-icons/gi";
import { BsMinecartLoaded } from "react-icons/bs";
import { GiMiningHelmet } from "react-icons/gi";
import { AiOutlineGold } from "react-icons/ai";
import { GiMirrorMirror } from "react-icons/gi";




export const CardMercados = () => {

  const data = useContext(DataContext);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }



  return (
    <div>
      <h1>Mercados Relacionados</h1>
      <section className={styles.contenedor}>
        {
          data?
          data.map((ele, index)=> (
            <div key={index} className={styles.cards}>
              <LuConstruction/>
              <p>{ele.title}</p>
            </div>
          )):''
        }
      </section>
    </div>
  )
}
