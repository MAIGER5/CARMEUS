import React, { useEffect, useState } from 'react';
import styles from './adminClient.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getClientsAction } from '../../../Redux/Actions/getClientsAction';
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
import { Typography } from '@mui/material';

const columns = [
  { id: 'company', label: 'Razón Social', minWidth: 170 },
  { id: 'contacto', label: 'Contacto', minWidth: 100 },
  {
    id: 'nit',
    label: 'Nit',
    minWidth: 170,
    // align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'mail',
    label: 'Mail',
    minWidth: 170,
    // align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phone',
    label: 'Teléfono',
    minWidth: 170,
    // align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'ciudad',
    label: 'Ciudad',
    minWidth: 170,
    // align: 'center',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'createdAt',
    label: 'Fecha de Alta',
    minWidth: 170,
    // align: 'center',
    // format: (value) => value.toFixed(2),
  },

];



export const AdminClient = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getClientsAction());
  },[])

  const clientsState = useSelector(state => state.client.responseClients) || [];
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
      <h1>Clientes Registrados</h1>
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
              {clientsState && clientsState.length > 0 ? (
                clientsState
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.idClient}>
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
          count={clientsState ? clientsState.length : 0}
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

