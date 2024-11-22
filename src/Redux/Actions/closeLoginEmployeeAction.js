
export const CLOSE_LOGIN_EMPLOYEE_REQUEST = 'CLOSE_LOGIN_EMPLOYEE_REQUEST';
export const CLOSE_LOGIN_EMPLOYEE_SUCCESS = 'CLOSE_LOGIN_EMPLOYEE_SUCCESS';
export const CLOSE_LOGIN_EMPLOYEE_FAILURE = 'CLOSE_LOGIN_EMPLOYEE_FAILURE';


export const closeLoginEmployeeAction = ()=>{
  return (dispatch) =>{
    dispatch({type:CLOSE_LOGIN_EMPLOYEE_REQUEST});
    try {
      dispatch({type:CLOSE_LOGIN_EMPLOYEE_SUCCESS})
      localStorage.removeItem('tokenEmployee')
      localStorage.removeItem('name')
      localStorage.removeItem('emailEmployee')
    } catch (error) {
      dispatch({type:CLOSE_LOGIN_EMPLOYEE_FAILURE})
    }
  }
}