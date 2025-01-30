import React, { useEffect } from 'react';
import styles from './dashBoardClient.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import dataCarmeuseMas from '../../utils/data/dataCarmeuseMas';
import { useSelector } from 'react-redux';
import BotonTransaccion from './components/botonTransaccion';
import BotonDocuments from './components/botonDocuments';


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
        <div className={styles.compScroll}>
          <span className={styles.subtitle}>Gestión de Pagos</span>

          <div className={styles.transacciones}>
            {
              data.pagos?
              data.pagos.map((ele)=>(
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
          <span className={styles.subtitle}>Gestión de Documentos</span>
          <div className={styles.transacciones}>
            {
              data.documentos?
              data.documentos.map((ele)=>(
                <BotonDocuments
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
          <span className={styles.subtitle}>Otros</span>
          <div className={styles.transacciones}>
            {
              data.otros?
              data.otros.map((ele)=>(
                <BotonDocuments
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
      
    </div>
  )
}
