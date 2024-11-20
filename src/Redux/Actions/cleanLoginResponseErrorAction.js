

export const CLEAN_LOGIN_RESPONSEERROR = 'CLEAN_LOGIN_RESPONSEERROR'

export const  cleanLoginResponseErrorAction = ()=>{
  return (dispatch)=>{
    dispatch({type:CLEAN_LOGIN_RESPONSEERROR})
  }
}