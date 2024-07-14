import React from 'react';
import { SlChemistry } from 'react-icons/sl';
import { BsBuildingGear } from 'react-icons/bs';
import { LuConstruction, LuDownload } from 'react-icons/lu';
import { MdOutlineAgriculture, MdOutlineGasMeter } from 'react-icons/md';
import { SiEquinixmetal } from 'react-icons/si';
import { FaHandHoldingWater } from 'react-icons/fa';
import { LiaNewspaper } from 'react-icons/lia';
import { AiOutlineGold } from 'react-icons/ai';

const dataCalHidratadaTypeA = {
  
  Screen: [
    {
      id: 1,
      image: 'hidratada',
      title: "CAL HIDRATADA TIPO A",
      description: 'La Cal Hidratada de Carmeuse Colombia es de alta calidad y baja en contaminantes, siendo ideal para el proceso de trefilado en frío. En el tratamiento de aguas y efluentes industriales, la cal hidratada libera poco calor exotérmico al entrar en contacto con el agua, lo que facilita y hace más seguro su uso en determinadas aplicaciones en comparación con la cal viva.'
    }
  ],

  CardProduct: [
    {
      id: 1,
      title1: "CAL HIDRATADA TIPO A",
      title2: "BENEFICIOS",
      description: 'La Cal Hidratada, químicamente conocida como hidróxido de calcio (Ca(OH)2), o cal apagada, es un polvo blanco seco derivado de la cal viva mezclada con agua. La cal hidratada con alto contenido de calcio Carmeuse está disponible como producto seco a granel o en bolsas y se utiliza en diversas aplicaciones industriales, como el tratamiento de gases de combustión, el tratamiento de aguas, la siderurgia y la construcción, entre otras.',
      cifra1: 10000,
      cifra2: 17,
      cifra3: 50,
      cifra1text: 'Ton de Acero / año',
      cifra2text: 'Ton de Acero / año',
      cifra3text: 'Ton de Acero / año',
      formula: 'CaCO3 • MgCO3 + heat --> CaO • MgO + 2 CO2',
      consideraciones: [
        'Alto poder neutralizante de residuos ácidos. ',
        'Agente lubricante en el proceso de estirado en frío.',
        'Protege la superficie del acero.',
        'Controla la dureza del agua tratada, reduciendo los problemas de distribución.',
        'Disminuye la frecuencia de mantenimiento de las tuberías.',
        'Neutraliza la acidez del agua.',
        'Elimina los metales pesados.',
      
      ]
    }
  ],

  CardTexct: [
    {
      id: 1,
      title1: "PRODUCCION & ESPECIFICACIONES",
      title2: "BENEFICIOS",
      description1: 'La cal hidratada (Ca(OH)2) se produce al mezclar cal viva (CaO) con una cantidad de agua cuidadosamente controlada. Se obtiene así un producto de hidróxido cálcico seco, prácticamente exento de humedad y, por tanto, fácil de manipular y almacenar.',
      // description2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat',
      benefits: [
        'Alto contenido en calcio para un rendimiento superior.', 
        'Alta pureza constante para obtener un rendimiento crítico por cada tonelada.', 
        'Libera muy poco calor exotérmico al entrar en contacto con el agua, lo que facilita y hace más seguro su uso en determinadas aplicaciones en comparación con la cal viva con alto contenido en calcio o la sosa cáustica.',
        'Varios grados disponibles para satisfacer sus necesidades específicas.',
        'Se entrega in situ y lista para usar.',
      ] ,


      formula: 'CaO + H2O --> Ca(OH)2 + heat',
      especificacion1: 'Química:',
      especificacion2: 'Dimensionamiento:',
      especificacion1Text: '  94.0 – 97.0% Ca(OH)2',
      especificacion2Text: '  92-97% Passing 325 Mesh',
    }
  ],

    CardUses: [
    {
      id: 1,
      title1: "PRODUCCION & ESPECIFICACIONES",
      title2: "USOS DE LA CAL HIDRATADA",
      description1: 'Carmeuse suministra piedra caliza de alto contenido en calcio con un 95% o más de carbonato cálcico puro a través de una amplia red de minas subterráneas y de superficie. La piedra caliza con alto contenido en calcio se produce en una variedad de tamaños para satisfacer las necesidades de nuestros clientes, ya sea como piedra en bruto o como carbonato cálcico molido.',
      description2: 'La piedra caliza con alto contenido en calcio es un material versátil que se utiliza en diversas industrias. Algunos de los principales usos de la piedra caliza con alto contenido en calcio son:',
      benefits: [
        'Agricultura - La cal hidratada con alto contenido en calcio es un material fácil de utilizar para la desinfección agrícola de camas de animales en establos y naves avícolas.',
        '  Tratamiento del agua - ayuda a eliminar una amplia variedad de contaminantes del agua para mejorar la calidad, ajustar el pH y reducir los metales pesados en las aguas residuales.',
        'Tratamiento de gases de combustión - Se utiliza en aplicaciones de lavado en seco para reducir los gases ácidos y los metales pesados.',
        'Hierro y acero - La cal hidratada se utiliza en las fundiciones de hierro y acero como revestimiento de cal en los moldes para evitar que se peguen y proporcionar una protección temporal contra la corrosión de los productos acabados. También se utiliza en el tratamiento del agua en acerías.',
        'Construcción - la cal hidratada es un aditivo antidesgaste probado para mitigar los agregados susceptibles a la humedad en mezclas asfálticas en caliente y templadas, aumentando el rendimiento y la esperanza de vida de los pavimentos.',
        'Procesamiento químico - se utiliza como fuente de álcali, para ajustar el pH, como acelerante o en una reacción de metátesis.',
        'No ferrosos - La cal hidratada se utiliza en instalaciones de procesamiento de minerales para reaccionar con y/o separar componentes valiosos como el cobre, el oro o el litio de su roca madre o salmuera.' 
      ] ,

      // formula: 'CaCo3 + heat --> Cao = CO2',
      especificacion1: 'Pureza del CaCO3:',
      especificacion2: 'Tamaño:',
      especificacion1Text: '95-98%.',
      especificacion2Text: '2,5" hasta 7 micras',
    }
  ],
  Mercados: [
    {
      id: 1,
      icon: <SlChemistry />,
      title: "Industria Química ",
      link: '/Aplications/chemical'
    },
    {
      id: 2,
      icon: <BsBuildingGear />,
      title: "Ingenieria Civil & Construcción",
      link: '/Aplications/engeneerBuilding'
    },
    {
      id: 3,
      icon: <LuConstruction />,
      title: "Hierro & Acero",
      link: '/Aplications/steel'
    },
    {
      id: 4,
      icon: <MdOutlineAgriculture />,
      title: "Soluciones Agricolas",
      link: '/Aplications/agropecuario'
    },
    {
      id: 5,
      icon: <MdOutlineGasMeter />,
      title: "Tratamiento de Gases & Combustión",
      link: '/Aplications/flueGasTreatment'
    },
    // {
    //   id: 6,
    //   icon: <SiEquinixmetal />,
    //   title: "Cerámica & Vidrio",
    // },
    {
      id: 7,
      icon: <FaHandHoldingWater />,
      title: "Tratamiento de Agua",
      link: '/Aplications/waterTreatment'
    },
    // {
    //   id: 8,
    //   icon: <LiaNewspaper />,
    //   title: "PCC y Pulpa & Paper",
    // },
    {
      id: 9,
      icon: <AiOutlineGold />,
      title: "Minería & Metales No Ferrosos",
      link: '/Aplications/noFerrousMining'
    },
  ],

  Sheet: [
    {
      id: 1,
      title: "Cal Hidratada - Español",
      icon: <LuDownload />
    },
    {
      id: 2,
      title: "Cal Hidratada - Ingles",
      icon: <LuDownload />
    },
  ]
}

export default dataCalHidratadaTypeA;
