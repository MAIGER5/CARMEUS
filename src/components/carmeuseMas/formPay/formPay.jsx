import React from 'react';
import styles from './formPay.module.css'



export const FormPay = () => {
  return (
    <form action="" className={styles.formPagos}>
      <h1>Pagos PayU</h1>
      <div className={styles.nameApellido}>
        <input 
          type="text"
          name='nombre'
          placeholder='Nombres'
          required
        />
        <input 
          type="text"
          name='apellido'
          placeholder='Apellidos'
          required
        />
      </div>
      <input 
        type="number"
        name='nit'
        placeholder='Nit o Cédula'
        required

      />
      <input 
        type="email"
        name='mail'
        placeholder='Correo electrónico'
        required
      />
      <input 
        type="number"
        name='monto'
        placeholder='Monto'
        required
      />
      <button>Pagar</button>
    </form>
  )
}
