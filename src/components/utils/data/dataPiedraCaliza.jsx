import React from 'react';
import { SlChemistry } from 'react-icons/sl';
import { BsBuildingGear } from 'react-icons/bs';
import { LuConstruction, LuDownload } from 'react-icons/lu';
import { MdOutlineAgriculture, MdOutlineGasMeter } from 'react-icons/md';
import { SiEquinixmetal } from 'react-icons/si';
import { FaHandHoldingWater } from 'react-icons/fa';
import { LiaNewspaper } from 'react-icons/lia';
import { AiOutlineGold } from 'react-icons/ai';

const dataPiedraCaliza = {
  
  Screen: [
    {
      id: 1,
      image: 'caliza',
      title: "PIEDRA CALIZA",
      description: 'La caliza (calcítica y dolomítica) es un producto mineral industrial versátil ampliamente utilizado en la industria química, agricultura y siderugia. La caliza de Carmeuse Caolombia tiene alta estabilidad química y se comercializa en varias granulometrías. Se utiliza en la producción de medicamentos, alimentos, cosméticos como suplemento de calcio, antiácido, aglutinante de fosfatos, entre otros.'
    }
  ],

  CardProduct: [
    {
      id: 1,
      title1: "PIEDRA CALIZA",
      title2: "BENEFICIOS",
      description: 'Los áridos para la construcción son un producto esencial para numerosas aplicaciones de construcción. En el caso de los pavimentos, actúan como el principal componente de soporte de carga. Para el hormigón, el agregado de piedra caliza ofrece mejor resistencia y mejor valor que los agregados graníticos comúnmente utilizados. También se utilizan en base de carreteras, relleno estructural, lastre, drenaje y piedra de armadura.',
      cifra1: 10000,
      cifra2: 17,
      cifra3: 50,
      cifra1text: 'Ton de Acero / año',
      cifra2text: 'Ton de Acero / año',
      cifra3text: 'Ton de Acero / año',
      formula: 'CaCO3 • MgCO3 + heat --> CaO • MgO + 2 CO2',
      consideraciones: [
        'La caliza calcita desempeña muchas funciones en la industria química. ',
        'Bajo contenido en contaminantes.',
        'Se utiliza ampliamente como carga de refuerzo, producto final o coproducto a base de calcio, fuente alcalina, ajustador del pH, lubricante, entre otros.',
        'Bajo coste..',
      
      ]
    }
  ],

  CardUses: [
    {
      id: 1,
      title1: "PRODUCCION & ESPECIFICACIONES",
      title2: "USOS DE LA PIEDRA CALIZA",
      description1: 'Carmeuse suministra piedra caliza de alto contenido en calcio con un 95% o más de carbonato cálcico puro a través de una amplia red de minas subterráneas y de superficie. La piedra caliza con alto contenido en calcio se produce en una variedad de tamaños para satisfacer las necesidades de nuestros clientes, ya sea como piedra en bruto o como carbonato cálcico molido.',
      description2: 'La piedra caliza con alto contenido en calcio es un material versátil que se utiliza en diversas industrias. Algunos de los principales usos de la piedra caliza con alto contenido en calcio son:',
      benefits: [
        'Producción de materiales de construcción: La piedra caliza con alto contenido en calcio añade cualidades deseables, como resistencia y durabilidad, a los productos acabados, al tiempo que reduce el coste global de los materiales. Se utiliza en la producción de alfombras, baldosas de vinilo, morteros, plásticos y tejas.', 
        'Agricultura: La piedra caliza con alto contenido en calcio es la fuente más rentable de calcio para la alimentación animal. Garantiza que el ganado, incluidas las aves de corral, el ganado vacuno y los cerdos, tengan suficiente calcio en sus dietas para una salud y un desarrollo adecuados. El calcio adicional derivado del carbonato cálcico es esencial para aumentar la producción y la calidad de los huevos.', 
        'Enmienda del suelo: La piedra caliza con alto contenido en calcio se utiliza para enmendar los suelos ácidos aumentando los niveles de pH del suelo. Esto puede mejorar el rendimiento de los cultivos y garantizar que las plantas tengan acceso a los nutrientes necesarios para un crecimiento sano.',
        'Producción de vidrio: La caliza cálcica se utiliza para fabricar vidrio, ya que aporta el calcio necesario para que el vidrio se endurezca y sea duradero.',
        'Áridos para la construcción: La caliza cálcica se utiliza como árido en carreteras, asfalto y hormigón. El material añade resistencia y durabilidad al producto final.',
        'Limpieza de gases de combustión: La piedra caliza con alto contenido en calcio se utiliza en tecnologías de gases de combustión para eliminar los contaminantes de los gases de escape industriales. El calcio reacciona con el dióxido de azufre para formar sulfato cálcico, que se elimina del flujo de gases.',
      ] ,

      // formula: 'CaCo3 + heat --> Cao = CO2',
      especificacion1: 'Pureza del CaCO3:',
      especificacion2: 'Tamaño:',
      especificacion1Text: '95-98%.',
      especificacion2Text: '2,5" hasta 7 micras',
    }
  ],
  CardTexct: [
    {
      id: 1,
      title1: "PRODUCCION & ESPECIFICACIONES",
      title2: "BENEFICIOS",
      description1: 'Carmeuse suministra piedra caliza de alto contenido en calcio con un 95% o más de carbonato cálcico puro a través de una amplia red de minas subterráneas y de superficie. La piedra caliza con alto contenido en calcio se produce en una variedad de tamaños para satisfacer las necesidades de nuestros clientes, ya sea como piedra en bruto o como carbonato cálcico molido.',
      // description2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat',
      benefits: [
        'Versátil en su uso en todas las industrias debido a su alto contenido en calcio.', 
        'Disponible como piedra bruta para procesamiento adicional o como carbonato cálcico molido.', 
        'Añade resistencia y durabilidad en varias aplicaciones.',
        'Estabilidad física y química.',
      ] ,

      // formula: 'CaCo3 + heat --> Cao = CO2',
      especificacion1: 'Pureza del CaCO3:',
      especificacion2: 'Tamaño:',
      especificacion1Text: '95-98%.',
      especificacion2Text: '2,5" hasta 7 micras',
    }
  ],

  Mercados: [
    // {
    //   id: 1,
    //   icon: <SlChemistry />,
    //   title: "Industria Química ",
    // },
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
      title: "Piedra Caliza - Español",
      icon: <LuDownload />
    },
    {
      id: 2,
      title: "Piedra Caliza - Ingles",
      icon: <LuDownload />
    },
  ]
}

export default dataPiedraCaliza;
