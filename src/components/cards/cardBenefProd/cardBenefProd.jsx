import React, { useContext } from 'react';
import styles from './cardBenefProd.module.css';
import DataContext from '../../dataContext/dataContext';




export const CardBenefProd = () => {

  const data = useContext(DataContext)

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>C</div>
  )
}
