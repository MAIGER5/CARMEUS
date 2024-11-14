import React from "react";
import pseBoton from '../icon/pse.png';
import recip from '../icon/images.png';
import factura from '../icon/factura1.jpg';
import retencion from '../icon/retencion.png';
import iconClient from '../icon/iconclient.png'
import clientMas from '../icon/clientMas.png'
import userAdmin from '../icon/clientAdmin.png'
import adminContact from '../icon/adminContact.png'


const dataCarmeuseMas = {

  dataServiceMas:[
    {
      id:1,
      icon:clientMas,
      title:'Registrate aquí',
      description:'Selecciona el servicio que se ajuste a su necesidad',
      link:'/registerClients',
    },
    {
      id:2,
      icon:pseBoton,
      title:'Pagos',
      description:'Selecciona el servicio que se ajuste a su necesidad',
      link:'/formPay',
    },
    {
      id:3,
      icon:factura,
      title:'Facturación',
      description:'Selecciona el servicio que se ajuste a su necesidad',
      link:'/factura',
    },
    {
      id:4,
      icon:recip,
      title:'Soportes de pago',
      description:'Selecciona el servicio que se ajuste a su necesidad',
      link:'/soportePago',
    },
    {
      id:5,
      icon:retencion,
      title:'Certificado de retención',
      description:'Selecciona el servicio que se ajuste a su necesidad',
      link:'/retencion',
    },

    {
      id:6,
      icon:clientMas,
      title:'Hisotorial de pedidos',
      description:'Selecciona el servicio que se ajuste a su necesidad',
      link:'/historialPedidos',
    },
    // {
    //   id:7,
    //   icon:userAdmin,
    //   title:'Administrar Usuarios',
    //   description:'Selecciona el servicio que se ajuste a su necesidad',
    //   link:'/AdminContacts',
    // },
    // {
    //   id:8,
    //   icon:adminContact,
    //   title:'Administrar Contactos',
    //   description:'Selecciona el servicio que se ajuste a su necesidad',
    //   link:'/AdminContacts',
    // },
    // {
    //   id:9,
    //   icon:iconClient,
    //   title:'Administrar Clientes',
    //   description:'Selecciona el servicio que se ajuste a su necesidad',
    //   link:'/AdminClients',
    // },
  ]

}

export default dataCarmeuseMas;