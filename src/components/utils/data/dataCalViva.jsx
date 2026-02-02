import React from 'react';
import { SlChemistry } from 'react-icons/sl';
import { BsBuildingGear } from 'react-icons/bs';
import { LuConstruction, LuDownload } from 'react-icons/lu';
import { MdOutlineAgriculture, MdOutlineGasMeter } from 'react-icons/md';
import { SiEquinixmetal } from 'react-icons/si';
import { FaHandHoldingWater } from 'react-icons/fa';
import { LiaNewspaper } from 'react-icons/lia';
import { AiOutlineGold } from 'react-icons/ai';

const dataCalViva = {
  
  Screen: [
    {
      id: 1,
      image: 'agricola',
      title: "CAL VIVA",
      description: 'Como productor líder de cal viva con alto contenido en calcio, Carmeuse trabaja con usted para suministrarle un producto de alto rendimiento que satisfaga sus necesidades específicas. La cal viva con alto contenido de calcio, conocida químicamente como óxido de calcio (CaO), o comúnmente denominada cal, es un compuesto químico ampliamente utilizado que se origina a partir de la piedra caliza.'
    }
  ],

  CardProduct: [
    {
      id: 1,
      title1: "CAL VIVA",
      title2: "BENEFICIOS",
      description: 'Nuestra cal viva Carmeuse con alto contenido en calcio procede de yacimientos selectos de caliza con alto contenido en calcio que no contienen más de un 5% de magnesio. Nuestro material se somete a pruebas rutinarias de calidad y consistencia, para garantizar la química y las propiedades físicas adecuadas para las aplicaciones industriales.',
      cifra1: "88%",
      cifra2: "Alta",
      cifra3: "ASTM C25",
      cifra1text: 'Oxido de Calcio típico %',
      cifra2text: 'Oxido de Calcio típico %',
      cifra3text: 'Oxido de Calcio típico %',
      formula: 'CaCO3 • MgCO3 + heat --> CaO • MgO + 2 CO2',
      consideraciones: [
        'Proporciona un alto rendimiento.',
        'Presentación: Sacos de 25 kg y Big Bag x 500 y 1000 kg. ',
        'Apariencia: Roca solida con presencia de polvo inolora y de color blanco - beige.',
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
        'El alto contenido en calcio (CaO) proporciona un rendimiento superior para las necesidades de la aplicación.', 
        'Fuente eficaz para el ajuste del pH y el control de la acidez.', 
        'Uno de los materiales alcalinos más rentables, en comparación con los cáusticos y otros.', 'Fácilmente disponible a través de nuestra red de plantas en una variedad de tamaños, desde pulverizados hasta gruesos', 'Ventajas de seguridad en comparación con la soda cáustica',
      ] ,

      formula: 'CaCo3 + calor --> Cao = CO2',
      especificacion1: 'Intervalo de contenido de calcio disponible (CaO):',
      especificacion2: 'Gama de tamaños:',
      especificacion3: 'Reactividad:',
      especificacion1Text: ' 87-90%',
      especificacion2Text: 'de 2 ¼" a 0',
      especificacion3Text: ' 30-50 °C aumento térmico mínimo de 3 minutos',
    }
  ],

  CardUses: [
    {
      id: 1,
      title1: "PRODUCCION & ESPECIFICACIONES",
      title2: "USOS DE LA CAL VIVA",
      description1: 'Carmeuse suministra piedra caliza de alto contenido en calcio con un 95% o más de carbonato cálcico puro a través de una amplia red de minas subterráneas y de superficie. La piedra caliza con alto contenido en calcio se produce en una variedad de tamaños para satisfacer las necesidades de nuestros clientes, ya sea como piedra en bruto o como carbonato cálcico molido.',
      description2: 'La piedra caliza con alto contenido en calcio es un material versátil que se utiliza en diversas industrias. Algunos de los principales usos de la piedra caliza con alto contenido en calcio son:',
      benefits: [
        'Fabricación de acero BOF y EAF como agente fundente para conseguir una química y propiedades físicas adecuadas de la escoria, eliminando así las impurezas del acero fundido.', 
        'Reduce los patógenos en los biosólidos agrícolas.', 
        'Reactivo para la neutralización de ácidos y el ajuste del pH.',
        'Tratamiento del agua/eliminación de contaminantes.',
        'Se utiliza para remediar los emplazamientos de lodos residuales y neutralizar el drenaje ácido de las minas.',
        'Procesamiento de minerales - controla la flotación ajustando el pH y/o consumido en una reacción de metátesis.',
        'Centrales eléctricas - Reduce las emisiones de gases ácidos al medio ambiente, lo que se conoce como tratamiento de gases de combustión (FGT) o desulfuración de gases de combustión (FGD).',
        'Producción de papel - Mejora la eficacia de la caustificación.',
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
    // {
    //   id: 5,
    //   icon: <MdOutlineGasMeter />,
    //   title: "Tratamiento de Gases & Combustión",
    //   link: '/Aplications/flueGasTreatment'
    // },
    // {
    //   id: 6,
    //   icon: <SiEquinixmetal />,
    //   title: "Cerámica & Vidrio",
    //   link: '/Aplications/glassCeramic'
    // },
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

export default dataCalViva;
