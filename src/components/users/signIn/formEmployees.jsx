import { useEffect, useState } from 'react';
import styles from './signIn.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postLoginClientrAction } from '../../../Redux/Actions/postLoginClientrAction';
import { ModalsError } from '../../modals/modalsError';
import { IoCloseOutline } from "react-icons/io5";
import { cleanLoginResponseErrorAction } from '../../../Redux/Actions/cleanLoginResponseErrorAction';
import { postLoginEmployeeAction } from '../../../Redux/Actions/postLoginEmployeeAction';


export const FormEmployees = ({setRegister}) => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [ titleEmployee, setTitleEmployee ] = useState(false);
  const [ titleClient, setTitleClient ] = useState(true);
  const [ errorLoginClient, setErrorLoginClient ] = useState()


  const selectorStateLoginClient = useSelector(state => state.login.tokenClient)
  const selectorErrorLoginClient = useSelector(state => state.login.ResponseError) || []
  const selectorStateLoginEmployee = useSelector(state => state.loginEmployee.tokenEmployee)
  const selectorErrorLoginEmployee = useSelector(state => state.loginEmployee.ResponseError) || []



  const [formSignIn, setFormSignIn] = useState({

    mail:'',
    password:''

  });

  const handleFormSignIn = (event)=>{

    event.preventDefault()

    const property = event.target.name;
    const value = event.target.value

    setFormSignIn({
      ...formSignIn,
      [property]:value
    })

  }
  // EL USUARIO SIEMPRE CUANDO ENTRE A LA VISTA ESTARA EN LA OPCION DE LOGIN CLIENT, PERO CON ESTOS DOS HANDLES PORDRA SELECCIONAR EMPLOYEE O CLIENT EN CASO DE HABER CAMBIADO PREVIAMENTE
  const handleTitleEmployee = () =>{
    setTitleEmployee(true)
    setTitleClient(false)
  }

  const handleTitleClient = () =>{
    setTitleClient(true)
    setTitleEmployee(false)
  }

  const HhandleChangeForm = (event)=>{
    event === 'no'
    ? setRegister(true)
    : setRegister(false)
  }

  const handleNavigate = (path) =>{
    navigate(path)
  }

  const handleSubmitForm = (event)=>{
    event.preventDefault();

    titleClient? dispatch(postLoginClientrAction(formSignIn)): dispatch(postLoginEmployeeAction(formSignIn));

    setFormSignIn(
      {
        mail:'',
        password:''
      }
    );

  }
  
  const infoModalError = {
    text1:'Hubo un error en el inicio de sesión', 
    text2:'Tener en cuenta los siguientes parametros'
  }

  const handleClickCloseModal = (event)=>{
    event.preventDefault()
    setErrorLoginClient(undefined)
    dispatch(cleanLoginResponseErrorAction())
  }

  useEffect(()=>{
    selectorStateLoginClient
    ? navigate('/sigIn/dashBoardClient')
    :selectorStateLoginEmployee
    ? navigate('/sigIn/dashBoardEmployee')
    :''
  },[selectorStateLoginClient, selectorStateLoginEmployee])

  useEffect(()=>{
    selectorErrorLoginClient.length
    ? setErrorLoginClient(selectorErrorLoginClient)
    : selectorErrorLoginEmployee.length
    ? setErrorLoginClient(selectorErrorLoginEmployee)
    :''
  }, [selectorErrorLoginClient, selectorErrorLoginEmployee]);

  useEffect(()=>{
    return () => {
      setErrorLoginClient(undefined);
      // dispatch(cleanClient())
    };
    
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmitForm} action="" className={styles.textForm}>
      <div className={styles.titles}> 
        <h1 onClick={handleTitleClient} className={titleClient? styles.titlesAltern:styles.titlesAltern2}>Clientes</h1>
        <h1 onClick={handleTitleEmployee} className={titleEmployee? styles.titlesAltern: styles.titlesAltern2} >Empleados</h1>
      </div>
      <input 
        type="email"
        name='mail'
        placeholder='Correo electrónico'
        value={formSignIn.mail}
        onChange={handleFormSignIn}
        required
      />
      <input 
        type="password"
        name='password'
        placeholder='***********'
        value={formSignIn.password}
        onChange={handleFormSignIn}
        required
      />
      <button type='submit'>Iniciar</button>
      <p>Si es <strong className={styles.strong}>Empelado</strong> y no tiene una cuenta? <span onClick={()=> HhandleChangeForm("no")}>Registrese aquí</span></p>
      <p>Si es <strong className={styles.strong}>Cliente</strong> y no tiene una cuenta? <span onClick={()=> handleNavigate('/registerClients')}>Registrese aquí</span></p>
      <div className={`${errorLoginClient? styles.modals: styles.modals1}`}>
          <ModalsError errors={errorLoginClient} infoModalError={infoModalError} />
          <div className={styles.close} onClick={handleClickCloseModal}>
            <IoCloseOutline />
          </div>
        </div>
    </form>
  )
}
