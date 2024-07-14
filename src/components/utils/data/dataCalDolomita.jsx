import React from 'react';
import { SlChemistry } from 'react-icons/sl';
import { BsBuildingGear } from 'react-icons/bs';
import { LuConstruction, LuDownload } from 'react-icons/lu';
import { MdOutlineAgriculture, MdOutlineGasMeter } from 'react-icons/md';
import { SiEquinixmetal } from 'react-icons/si';
import { FaHandHoldingWater } from 'react-icons/fa';
import { LiaNewspaper } from 'react-icons/lia';
import { AiOutlineGold } from 'react-icons/ai';

const dataCalDolomita = {
  
  Screen: [
    {
      id: 1,
      image: 'dolomita',
      title: "CAL DOLOMITA",
      description: 'Nuestra Cal viva Dolomítica tiene el contenido de magnesio adecuado para equilibrar y proteger sus refractarios. El contenido en calcio de la cal dolomítica se utiliza en combinación con la cal de alto contenido en calcio como agente fundente para conseguir una química de la escoria y unas propiedades físicas adecuadas. La cal viva dolomítica es fundamental para producir acero de calidad y controlar sus costes.'
    }
  ],

  CardProduct: [
    {
      id: 1,
      title1: "CAL DOLOMITA",
      title2: "BENEFICIOS",
      description: 'Carmeuse suministra Cal viva Dolomítica de calidad para aplicaciones industriales que requieren el equilibrio adecuado de contenido de calcio y magnesio. La cal viva dolomítica, químicamente conocida como óxido de calcio y magnesio (CaO-MgO), o comúnmente denominada dolomía, se obtiene de piedra caliza con un contenido de carbonato de magnesio de entre el 35% y el 46%. Nuestro material se somete a pruebas rutinarias de calidad y consistencia, para garantizar las propiedades químicas y físicas adecuadas para las aplicaciones industriales.',
      cifra1: 10000,
      cifra2: 17,
      cifra3: 50,
      cifra1text: 'Ton de Acero / año',
      cifra2text: 'Ton de Acero / año',
      cifra3text: 'Ton de Acero / año',
      formula: 'CaCO3 • MgCO3 + heat --> CaO • MgO + 2 CO2',
      consideraciones: [
        'Un equilibrio adecuado de magnesio protege y evita la erosión de los refractarios. ',
        'La escoria saturada de magnesio con cal dolomítica favorece y mantiene la espumabilidad en el horno de arco eléctrico.',
        'Protege los refractarios de la radiación del arco eléctrico en EAF.',
        'Manipulación de la cal para evitar la generación de finos.',
        'Inyección de cal en el horno de arco eléctrico para controlar la actividad de la cal y la formación de espuma en la escoria.',
      
      ]
    }
  ],

  CardTexct: [
    {
      id: 1,
      title1: "PRODUCCION & ESPECIFICACIONES",
      title2: "BENEFICIOS",
      description1: 'La Cal viva Dolomítica (CaO-MgO) se produce cuando la piedra caliza dolomítica, también conocida como dolomita o carbonato cálcico magnésico (CaCO3 - MgCO3), se calienta en un horno mediante el proceso de calcinación.',
      // description2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat',
      benefits: [
        'Contenido de calcio y magnesio para necesidades específicas de la aplicación.', 
        'Fuente eficaz para el ajuste del pH y el control de la acidez.', 
        'Pruebas rutinarias de calidad y consistencia.', 
        'Disponible en diversos tamaños, desde guijarros hasta finos', 
        'Ofrece ventajas de seguridad cuando se utiliza para sustituir a la sosa cáustica',
      ] ,

      formula: 'CaCO3 • MgCO3 + heat --> CaO • MgO + 2 CO2',
      especificacion1: 'Intervalo de contenido de calcio (CaO):',
      especificacion2: 'Contenido de magnesio (MgO):',
      especificacion3: 'Tamaño:',
      especificacion1Text: '56-59%',
      especificacion2Text: '37-41%',
      especificacion3Text: 'de 2 ¼" a 0',
    }
  ],
  CardUses: [
    {
      id: 1,
      title1: "PRODUCCION & ESPECIFICACIONES",
      title2: "USOS DE LA CAL DOLOMITA",
      description2: 'Muchos procesos y sistemas industriales requieren cal viva dolomítica, o dolomía, para aplicaciones específicas, entre las que se incluyen:',
      benefits: [
        'Fabricación de acero BOF y EAF - se utiliza en combinación con cal de alto contenido en calcio como agente fundente para conseguir una química de la escoria y unas propiedades físicas adecuadas; un contenido adecuado de magnesio protege el refractario.',
        'Fabricación de hidróxido de Ca-Mg: contenido máximo de calcio y magnesio.',
        'Producción de fibra de vidrio: sirve como fundente para modificar la viscosidad, evitar la desvitrificación y aumentar la durabilidad del producto final y la resistencia al desgaste químico.',
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
    // {
    //   id: 4,
    //   icon: <MdOutlineAgriculture />,
    //   title: "Soluciones Agricolas",
    // },
    // {
    //   id: 5,
    //   icon: <MdOutlineGasMeter />,
    //   title: "Tratamiento de Gases & Combustión",
    // },
    {
      id: 6,
      icon: <SiEquinixmetal />,
      title: "Cerámica & Vidrio",
      link: '/Aplications/glassCeramic'
    },
    // {
    //   id: 7,
    //   icon: <FaHandHoldingWater />,
    //   title: "Tratamiento de Agua",
    // },
    // {
    //   id: 8,
    //   icon: <LiaNewspaper />,
    //   title: "PCC y Pulpa & Paper",
    // },
    // {
    //   id: 9,
    //   icon: <AiOutlineGold />,
    //   title: "Minería & Metales No Ferrosos",
    // },
  ],

  Sheet: [
    {
      id: 1,
      title: "Cal Dolomita - Español",
      icon: <LuDownload />
    },
    {
      id: 2,
      title: "Cal Dolomita - Ingles",
      icon: <LuDownload />
    },
  ]
}

export default dataCalDolomita;
