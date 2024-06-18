import React from 'react';
import { SlChemistry } from 'react-icons/sl';
import { BsBuildingGear } from 'react-icons/bs';
import { LuConstruction, LuDownload } from 'react-icons/lu';
import { MdOutlineAgriculture, MdOutlineGasMeter } from 'react-icons/md';
import { SiEquinixmetal } from 'react-icons/si';
import { FaHandHoldingWater } from 'react-icons/fa';
import { LiaNewspaper } from 'react-icons/lia';
import { AiOutlineGold } from 'react-icons/ai';

const dataCarbonato = {
  
  Screen: [
    {
      id: 1,
      image: 'carbonato-3',
      title: "CARBONATO DE CALCIO",
      description: 'Carmeuse es uno de los principales productores de carbonato cálcico molido. El carbonato cálcico (CaCO3) es un compuesto químico muy común que constituye el 4% de la corteza terrestre y es el principal constituyente de la piedra caliza. Aunque es abundante, no toda la caliza es apta para la producción de carbonato cálcico molido (CCM) debido a sus impurezas.'
    }
  ],

  CardProduct: [
    {
      id: 1,
      title1: "CARBONATO DE CALCIO",
      title2: "BENEFICIOS",
      description: 'El carbonato cálcico es uno de los materiales más útiles y versátiles conocidos por el ser humano y tiene muchas aplicaciones prácticas, como su uso en suelos (moqueta, baldosas de vinilo de lujo, compuesto de piedra y plástico), pintura, adhesivos, papel, plásticos, caucho, cubiertas de asfalto y muchos otros fines, incluida la agricultura.',
      cifra1: 10000,
      cifra2: 17,
      cifra3: 50,
      cifra1text: 'Ton de Acero / año',
      cifra2text: 'Ton de Acero / año',
      cifra3text: 'Ton de Acero / año',
      formula: 'CaCO3 • MgCO3 + heat --> CaO • MgO + 2 CO2',
      consideraciones: [
        'Carmeuse Colombia se encuentra diseñando un producto con carbonato de cálcico molido específicamente  para mejorar la durabilidad, el aspecto y el coste del hormigón sin reducir sus propiedades mecánicas. Este producto mejorará su hormigón, tanto física como químicamente, al tiempo que reducirá los costes y el impacto medioambiental. Sustituir una parte del cemento en una mezcla de hormigón para mejorar diversas características, sera un estándar de la industria por las proximas décadas. Dado que la producción y disponibilidad de materiales cementantes suplementarios, antes abundantes, ha cambiado drásticamente, ha llegado el momento de considerar un sustituto más consistente y fiable.',
      
      ]
    }
  ],

  CardTexct: [
    {
      id: 1,
      title1: "PRODUCCION & ESPECIFICACIONES",
      title2: "BENEFICIOS",
      description1: 'El carbonato cálcico molido (CCM) se produce mediante un proceso de varias etapas que da como resultado roca en polvo. La piedra se extrae de formaciones rocosas sólidas, a menudo en minas subterráneas.  A continuación, el carbonato cálcico se transporta fuera de la mina y se procesa a través de una serie de trituradoras. Una vez triturado hasta alcanzar un tamaño adecuado, a menudo alrededor de una pulgada de diámetro, la piedra se transporta a los molinos para su posterior procesamiento.',
      // description2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat',
      benefits: [
        'Alta pureza del CaCO3 para compuestos consistentes y de calidad.', 
        'Reduce los costes al disminuir la cantidad de ingredientes activos necesarios, al tiempo que añade características deseables como eficiencia energética, ignifugación, insonorización, resistencia y durabilidad.', 
        'Sacos de 50 libras y Super Sacks (1 tonelada) disponibles en ubicaciones específicas.', 
        'Equipos y servicios para sistemas de manipulación de productos secos a granel.', 
        'Múltiples ofertas de productos con contenido 100% reciclado preconsumo certificado para la sostenibilidad.',
      ] ,

      // formula: 'CaCO3 • MgCO3 + heat --> CaO • MgO + 2 CO2',
      especificacion1: 'Pureza:',
      especificacion2: 'Granulometría:',
      especificacion1Text: '   Rangos típicos 95% CaCO3, menos de 3% MgCO3, menos de 2% SiO2',
      especificacion2Text: '   Desde 4M-8M granulado para alimentación animal hasta 7um',
    }
  ],
  CardUses: [
    {
      id: 1,
      title1: "PRODUCCION & ESPECIFICACIONES",
      title2: "USOS DEL CARBONATO DE CALCIO",
      description2: 'El carbonato cálcico molido se utiliza en innumerables productos con los que usted interactúa a diario. El carbonato cálcico molido se utiliza a menudo para aumentar la durabilidad y reducir costes desplazando o "ampliando" otras materias primas más caras. Es el extensor o relleno ideal, ya que tiene cualidades de baja absorción, numerosos tamaños de partícula disponibles y puede ser de color brillante cuando sea necesario.  Usos habituales del carbonato cálcico molido:',
      benefits: [
        'Vinilo de lujo - Extender PVC.',
        'Revestimiento de moqueta - Extensor de látex.',
        'Materiales para tejados - Relleno mineral de asfalto.',
        'Caucho, plásticos y PVC.',
        'Pintura, masilla, lechada y compuestos para juntas.',
        'Sustitución del cemento en el hormigón hasta un 15%.',
        'Alimentación animal - Fuente de calcio.',
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
    },
    // {
    //   id: 3,
    //   icon: <LuConstruction />,
    //   title: "Hierro & Acero",
    // },
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
    // {
    //   id: 6,
    //   icon: <SiEquinixmetal />,
    //   title: "Cerámica & Vidrio",
    // },
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
      title: "Cabonato de Calcio - Español",
      icon: <LuDownload />
    },
    {
      id: 2,
      title: "Cabonato de Calcio - Ingles",
      icon: <LuDownload />
    },
  ]
}

export default dataCarbonato;
