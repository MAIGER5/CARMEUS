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
      image: 'calagricolasPrincipal',
      title: "CAL AGRICOLA",
      description: 'La Cal AGRICOLA de Carmeuse Colombia destaca por su contenido en calcio es ideal para corregir el PH del suelo y aportar calcio y magnesio a los cultivos. Este producto se obtiene mediante la calcinación de piedra caliza en hornos a altas temperaturas, lo que resulta en la formación de óxidos de calcio y magnesio.'
    }
  ],

  CardProduct: [
    {
      id: 1,
      title1: "CAL AGRICOLA",
      title2: "BENEFICIOS",
      description: 'La cal se puede utilizar en el ámbito agrícola de diversas maneras, tanto en grandes extensiones de terreno como en huertos domésticos. Se emplea para corregir la composición del suelo, con el fin de aumentar su fertilidad.',
      cifra1: "68% de CaO mínimo",
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
      description1: 'La cal viva agrícola se genera como un subproducto del proceso de calcinación de la piedra caliza. Está compuesta por material que presenta un nivel de calcinación inferior al especificado para aplicaciones industriales de mayor exigencia, pero que conserva propiedades adecuadas para uso agrícola, especialmente en la corrección de suelos ácidos y el aporte de calcio.',
      // description2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat',
      benefits: [
    "  Mejora la disponibilidad de nutrientes: Favorece la absorción de fósforo, calcio, magnesio y otros elementos esenciales, aumentando la eficiencia de los fertilizantes.",

    "Aporta calcio al cultivo: El calcio fortalece el desarrollo de raíces,    tallos y frutos, contribuyendo a plantas más sanas y productivas.", 
    "Mejora la estructura física del suelo: Reduce la compactación, aumenta     la aireación y favorece el drenaje, permitiendo un mejor desarrollo     radicular.",

    "Ayuda al control de enfermedades y plagas: Su alta alcalinidad puede     disminuir la presencia de algunos hongos, bacterias, nematodos y otros    organismos perjudiciales del suelo.",

    "Estimula la actividad biológica del suelo: Promueve condiciones    favorables para microorganismos beneficiosos que participan en la   descomposición de materia orgánica y liberación de nutrientes.",

    "Promueve condiciones favorables para microorganismos beneficiosos que    participan en la descomposición de materia orgánica y liberación de   nutrientes.",

    "Reduce la toxicidad por aluminio y manganeso: En suelos muy ácidos     disminuye los efectos tóxicos de estos elementos sobre las raíces."

      ] ,

      formula: 'CaCo3 + Calor --> Cao = CO2',
      especificacion1: 'Intervalo de contenido de calcio (CaO):',
      especificacion2: 'Gama de tamaños:',
      especificacion3: 'Reactividad:',
      especificacion1Text: '      67 % mínimo',
      especificacion2Text: '       Menor a ¼"',
      especificacion3Text: '       Reactividad baja',
    }
  ],

  Mercados: [
    {
      id: 1,
      icon: <MdOutlineAgriculture />,
      title: "Soluciones Agricolas",
      link: '/Aplications/agropecuario'
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
