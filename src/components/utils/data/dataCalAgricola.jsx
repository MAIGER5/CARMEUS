import React from 'react';
import { SlChemistry } from 'react-icons/sl';
import { BsBuildingGear } from 'react-icons/bs';
import { LuConstruction, LuDownload } from 'react-icons/lu';
import { MdOutlineAgriculture, MdOutlineGasMeter } from 'react-icons/md';
import { SiEquinixmetal } from 'react-icons/si';
import { FaHandHoldingWater } from 'react-icons/fa';
import { LiaNewspaper } from 'react-icons/lia';
import { AiOutlineGold } from 'react-icons/ai';

const dataCalAgricola = {
  
  Screen: [
    {
      id: 1,
      image: 'agricola',
      title: "CAL AGRICOLA",
      description: 'La Cal AGRICOLA de Carmeuse Colombia destaca por su contenido en calcio y es ideal para corregir el pH del suelo y aportar calcio y magnesio a los cultivos. Este producto se obtiene mediante la calcinación de piedra caliza en hornos a altas temperaturas, lo que resulta en la formación de óxidos de calcio y magnesio.'
    }
  ],

  CardProduct: [
    {
      id: 1,
      title1: "CAL AGRICOLA",
      title2: "BENEFICIOS",
      description: 'Nuestra cal viva Carmeuse con alto contenido en calcio procede de yacimientos selectos de caliza con alto contenido en calcio que no contienen más de un 5% de magnesio. Nuestro material se somete a pruebas rutinarias de calidad y consistencia, para garantizar la química y las propiedades físicas adecuadas para las aplicaciones industriales.',
      cifra1: 10000,
      cifra2: 17,
      cifra3: 50,
      cifra1text: 'Ton de Acero / año',
      cifra2text: 'Ton de Acero / año',
      cifra3text: 'Ton de Acero / año',
      formula: 'CaCO3 • MgCO3 + heat --> CaO • MgO + 2 CO2',
      consideraciones: [
        'Proporciona un alto rendimiento. ',
        'Atributos rentables y respetuosos con el medio ambiente.',
        'Ventajas para numerosas aplicaciones industriales.',
      
      ]
    }
  ],

  CardTexct: [
    {
      id: 1,
      title1: "PRODUCCION & ESPECIFICACIONES",
      title2: "BENEFICIOS",
      description1: 'La Cal Viva con alto contenido en calcio (CaO) se produce cuando la piedra caliza, o carbonato cálcico (CaCO3), se calienta en un horno mediante el proceso de calcinación.',
      // description2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat',
      benefits: [
        'El alto contenido en calcio (CaO) proporciona un rendimiento superior para las necesidades de la aplicació.', 
        'Fuente eficaz para el ajuste del pH y el control de la acidez.', 
        'Uno de los materiales alcalinos más rentables, en comparación con los cáusticos y otros.', 'Fácilmente disponible a través de nuestra red de plantas en una variedad de tamaños, desde guijarros hasta finos', 'Ventajas de seguridad en comparación con la sosa cáustica',
      ] ,

      formula: 'CaCo3 + heat --> Cao = CO2',
      especificacion1: 'Intervalo de contenido de calcio (CaO):',
      especificacion2: 'Gama de tamaños:',
      especificacion3: 'Reactividad:',
      especificacion1Text: '93-97%',
      especificacion2Text: 'de 2 ¼" a 0',
      especificacion3Text: '30-50 °C aumento térmico mínimo de 3 minutos',
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
    {
      id: 6,
      icon: <SiEquinixmetal />,
      title: "Cerámica & Vidrio",
      link: '/Aplications/glassCeramic'
    },
    {
      id: 7,
      icon: <FaHandHoldingWater />,
      title: "Tratamiento de Agua",
      link: '/Aplications/waterTreatment'
    },
    {
      id: 8,
      icon: <LiaNewspaper />,
      title: "PCC y Pulpa & Paper",
      link: '/Aplications/pccPulPaper'
    },
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
      title: "Cal Viva - Español",
      icon: <LuDownload />
    },
    {
      id: 2,
      title: "Cal Viva - Ingles",
      icon: <LuDownload />
    },
  ]
}

export default dataCalAgricola;
