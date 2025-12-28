import React, { useState } from 'react';
import axios from 'axios';
import styles from './soportePago.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postUrlSoportPagoAction } from '../../Redux/Actions/postUrlSoportPagoAction';

export const SoportePago = () => {


  const dispatch = useDispatch();
  
  const [formSoportePago, setFormSoportePago] = useState({
    nameProduct: '',
    cantProduct: '',
    totalPrice: '',
  });

  const [selectedFile, setSelectedFile] = useState(null); // Estado para el archivo seleccionado

  const selectorLoginClient = useSelector(state => state.login.tokenClient) || null;
  const selectorLoginEmployee = useSelector(state => state.loginEmployee.tokenEmployee) || null;

  const handleOptionView = () => {
    if (selectorLoginClient) return '/sigIn/dashBoardClient';
    if (selectorLoginEmployee) return '/sigIn/dashBoardEmployee';
    return '/carmeuseMas';
  };

  const handleChangeForm = (event) => {
    event.preventDefault();
    setFormSoportePago({
      ...formSoportePago,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Guardar archivo en el estado
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      return alert('Seleccione una imagen o un archivo PDF');
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'soportePago');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dbn2bb4e2/image/upload',
        formData
      );

      const urlImage = response.data.secure_url;
      
      dispatch(postUrlSoportPagoAction({ ...formSoportePago, urlSuport: urlImage }));

      console.log({ ...formSoportePago, urlSuport: urlImage });

      // Resetear formulario después de enviar
      setFormSoportePago({ nameProduct: '', cantProduct: '', totalPrice: '' });
      setSelectedFile(null);
    } catch (error) {
      console.error(error);
      alert('Error al subir la imagen y los datos');
    }
  };

  return (
    <div className={styles.contenedor}>
      <p>
        <Link to={handleOptionView()} className={styles.linkes}>
          Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas} />
        </Link>
      </p>
      <h1>Envía tu Soporte de Pago</h1>

      <form onSubmit={handleSubmitForm}>
        <input
          className={styles.celdasInputs}
          type="text"
          name="nameProduct"
          value={formSoportePago.nameProduct}
          placeholder="Nombre del Producto"
          onChange={handleChangeForm}
          required
        />
        <input
          className={styles.celdasInputs}
          type="number"
          name="cantProduct"
          value={formSoportePago.cantProduct}
          placeholder="Cantidad Toneladas"
          onChange={handleChangeForm}
          required
        />
        <input
          className={styles.celdasInputs}
          type="text"
          name="totalPrice"
          value={formSoportePago.totalPrice}
          placeholder="Precio Total"
          onChange={handleChangeForm}
          required
        />
        <span>Adjuntar soporte de pago</span>
        <input
          id={styles.adjuntar}
          type="file"
          capture="environment"
          name="image"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
