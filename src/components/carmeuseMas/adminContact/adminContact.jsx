import React, { useEffect, useState } from 'react';
import styles from './adminContact.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillPlusSquareFill } from 'react-icons/bs';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import { getContactsAction } from '../../../Redux/Actions/getContactAction';
import { Typography } from '@mui/material';

const columns = [
  { id: 'name', label: 'Nombre y Apellido', minWidth: 170 },
  { id: 'company', label: 'Razón Social', minWidth: 100 },
  {
    id: 'phone',
    label: 'Teléfono',
    minWidth: 170,
    // align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'mail',
    label: 'Mail',
    minWidth: 170,
    // align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'country',
    label: 'País',
    minWidth: 170,
    // align: 'center',
    // format: (value) => value.toFixed(2),
  },
  { id: 'mensaje', label: 'Mensaje', minWidth: 100 },
  {
    id: 'createdAt',
    label: 'Fecha de Alta',
    minWidth: 170,
    // align: 'center',
    // format: (value) => value.toFixed(2),
  },

];



export const AdminContact = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getContactsAction());
  },[])

  const contactsState = useSelector(state => state.contact.responseContacts) || [];
  const selectorLoginClient = useSelector(state => state.login.tokenClient) || null
  const selectorLoginEmployee = useSelector(state => state.loginEmployee.tokenEmployee) || null

  const nagivate = useNavigate();

  const handleNavigate = (path)=>{
    nagivate(path)
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOptionView = ()=>{
    return selectorLoginClient
      ? '/sigIn/dashBoardClient'
      : selectorLoginEmployee
      ? '/sigIn/dashBoardEmployee'
      : '/carmeuseMas'
  }


  return (
    <div className={styles.contenedor} >
      <p onClick={()=> handleNavigate(handleOptionView())} >Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></p>
      <h1>Contactos Recibidos</h1>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440, backgroundColor: 'white'}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, backgroundColor:'#323e48', color:'white' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {contactsState && contactsState.length > 0 ? (
                contactsState
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.idContact}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length}>
                    <Typography variant="body2" align="center">No hay datos disponibles</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination className={styles.pagination}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={contactsState? contactsState.length: 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Filas por página"  // Cambia el label de "Rows per page"

          sx={{
            '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
              color: 'black',
              display:'flex',
              alignSelf:'end'
            },
          }}
        />
      </Paper>
    </div>
  );
}

