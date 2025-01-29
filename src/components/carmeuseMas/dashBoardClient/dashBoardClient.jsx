import React, { useEffect } from 'react';
import styles from './dashBoardClient.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import dataCarmeuseMas from '../../utils/data/dataCarmeuseMas';
import { useSelector } from 'react-redux';
import BotonTransaccion from './components/botonTransaccion';


export const DashBoardClient = () => {

  const navigate = useNavigate();

  const data = dataCarmeuseMas.dataDashBoardClient

  const selectorStateTokenClient = useSelector(state => state.login)


  useEffect(()=>{
    if (!selectorStateTokenClient.tokenClient) {
      navigate('/sigIn')
    }
  },[selectorStateTokenClient.tokenClient])

  return (
    <div className={styles.contenedor}>

      <div className={styles.firstColumn}>
        <p>!Hola, {selectorStateTokenClient.company} Bienvenido al Módulo Clientes de Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></p>
        <span>Gestión de Pagos</span>
        <div className={styles.transacciones}>
          {
            data?
            data.map((ele)=>(
              <BotonTransaccion 
                key={ele.id}
                icon={ele.icon}
                title={ele.title}
                subtitle={ele.subtitle}
                description={ele.description}
                link={ele.link}
              />
            )) :''
          }
        </div>
      </div>
      
    </div>
  )
}


{/* <div className={styles.servicesColumn}>
{
  data?
  data.map((ele)=>(
    <Link to={ele.link} key={ele.id} className={styles.cardServices}>
      <div className={styles.containerIcon}>
        <img src={ele.icon} alt="" />
      </div>
      <p>{ele.title}</p>
    </Link>
  )) :''
}
</div> */}