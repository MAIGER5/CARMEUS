import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/home/home';
import { NavBar } from './components/navBar/navBar';
import { Footer } from './components/footer/footer';
import { AboutUs } from './components/aboutUs/aboutUs';
import { ProductsGRAL } from './components/products/productsGRAL/productsGRAL';
import { Aplications } from './components/aplications/aplications';
import { CalAgricola } from './components/products/calAgricola/calAgricola';
import { CalViva } from './components/products/calViva/calViva';
import { CalHidratada } from './components/products/calHidratada/calHidratada';
import { CalDolomita } from './components/products/calDolomita/calDolomita';
import { PiedraCaliza } from './components/products/piedraCaliza/piedraCaliza';
import { Carbonato } from './components/products/carbonato/carbonato';
import { Neutramol } from './components/products/neutramol/neutramol';
import { Chemestry } from './components/aplications/chemestry/chemestry';
import { PlasticRubber } from './components/aplications/chemestry/plastic&Rubber/plasticRubber';
import { ChemicalCompounds } from './components/aplications/chemestry/chemicalCompounds/chemicalCompounds';
import { ChemicalCalciumSalts } from './components/aplications/chemestry/chemicalCalciumSalts/chemicalCalciumSalts';
import { IronSteel } from './components/aplications/ironSteel/ironSteel';
import { Iron } from './components/aplications/ironSteel/iron/iron';
import { Acero } from './components/aplications/ironSteel/acero/acero';
import { EngeneerBuilding } from './components/aplications/engeneerBuilding/engeneerBuilding';
import { Aggregado } from './components/aplications/engeneerBuilding/aggregates/aggregado';
import { Asphalt } from './components/aplications/engeneerBuilding/asphalt/asphalt';
import { SoilTreatment } from './components/aplications/engeneerBuilding/soilTreatment/soilTreatment';
import { FlueGasTreatment } from './components/aplications/flueGasTreatment/flueGasTreatment';
import { GlassCeramic } from './components/aplications/glassCeramic/glassCeramic';
import { NoFerrousMining } from './components/aplications/noFerrousMining/noFerrousMining';
import { PccPulPaper } from './components/aplications/pccPulPaper/pccPulPaper';
import { WaterTreatment } from './components/aplications/waterTreatment/waterTreatment';
import { DrinkWater } from './components/aplications/waterTreatment/drinkingWater/drinkWater';
import { WasteWater } from './components/aplications/waterTreatment/wasteWater/wasteWater';
import { IndustryWater } from './components/aplications/waterTreatment/industryWater/industryWater';
import { Cales } from './components/products/productsByGroup/cales/cales';
import { Piedra } from './components/products/productsByGroup/piedra/piedra';
import { NewOne } from './components/newsroom/news/newOne';
import { NewTwo } from './components/newsroom/news/newTwo';
import { NewThree } from './components/newsroom/news/newThree';
import { CalHidratadaTipoA } from './components/products/calHidratadaTipoA/calHidratadaTipoA';
import { CalHidratadaTipoB } from './components/products/calHidratadaTipoB/calHidratadaTipoB';
import { Agropecuario } from './components/aplications/agropecuario/agropecuario';
import { SugarIndustry } from './components/aplications/agropecuario/sugarIndustry/sugarIndustry';
import { AnimalCare } from './components/aplications/agropecuario/animalCare/animalCare';
import { Food } from './components/aplications/agropecuario/food/food';
import { Services } from './components/services/services';
import ScrollToTop from './ScrollToTop';
import { Contact } from './components/contact/contact';
import { CarmeuseMas } from './components/carmeuseMas/carmeuseMas';
import { SignIn } from './components/users/signIn/signIn';
import PrototypeDashBoard from './components/dashBoards/prototypeDashBoard/prototypeDashBoard';





function App() {
  
  return (
    <HashRouter>
      <ScrollToTop/>
      <NavBar/>
      <Routes>

        <Route path='/' element={<Home/>}/>

        <Route path='/newOne' element={<NewOne/>}/>
        <Route path='/newTwo' element={<NewTwo/>}/>
        <Route path='/newThree' element={<NewThree/>}/>

        <Route path='/sigIn' element={<SignIn/>}/>
        
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/products' element={<ProductsGRAL/>}/>
        <Route path='/carmeuseMas' element={<CarmeuseMas/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/aplications' element={<Aplications/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/products/cales/quicklime' element={<CalViva/>}/>
        <Route path='/products/cales/hydratedlime' element={<CalHidratada/>}/>
        <Route path='/products/cales/hydratedlimeTipoA' element={<CalHidratadaTipoA/>}/>
        <Route path='/products/cales/hydratedlimeTipoB' element={<CalHidratadaTipoB/>}/>
        <Route path='/products/cales/dolomiticlime' element={<CalDolomita/>}/>
        <Route path='/products/cales/agriculturallime' element={<CalAgricola/>}/>
        <Route path='/products/stone/limestone' element={<PiedraCaliza/>}/>
        <Route path='/products/stone/carbonate' element={<Carbonato/>}/>
        <Route path='/products/neutramol' element={<Neutramol/>}/>

        <Route path='/products/cales' element={<Cales/>}/>
        <Route path='/products/stone' element={<Piedra/>}/>

        <Route path='/Aplications/agropecuario' element={<Agropecuario/>}/>
        <Route path='/Aplications/engeneerBuilding' element={<EngeneerBuilding/>}/>
        <Route path='/Aplications/chemical' element={<Chemestry/>}/>
        <Route path='/Aplications/steel' element={<IronSteel/>}/>
        <Route path='/Aplications/flueGasTreatment' element={<FlueGasTreatment/>}/>
        <Route path='/Aplications/glassCeramic' element={<GlassCeramic/>}/>
        <Route path='/Aplications/noFerrousMining' element={<NoFerrousMining/>}/>
        <Route path='/Aplications/pccPulPaper' element={<PccPulPaper/>}/>
        <Route path='/Aplications/waterTreatment' element={<WaterTreatment/>}/>

        <Route path='/Aplications/agropecuario/sugar' element={<SugarIndustry/>}/>
        <Route path='/Aplications/agropecuario/animal' element={<AnimalCare/>}/>
        <Route path='/Aplications/agropecuario/food' element={<Food/>}/>

        <Route path='/Aplications/chemical/plasticRubber' element={<PlasticRubber/>}/>
        <Route path='/Aplications/chemical/chemicalCompounds' element={<ChemicalCompounds/>}/>
        <Route path='/Aplications/chemical/chemicalCalciumSalts' element={<ChemicalCalciumSalts/>}/>
        
        <Route path='/Aplications/steel/iron' element={<Iron/>}/>
        <Route path='/Aplications/steel/acero' element={<Acero/>}/>

        <Route path='/Aplications/engeneerBuilding/aggregado' element={<Aggregado/>}/>
        <Route path='/Aplications/engeneerBuilding/asphalt' element={<Asphalt/>}/>
        <Route path='/Aplications/engeneerBuilding/soilTreatment' element={<SoilTreatment/>}/>

        <Route path='/Aplications/waterTreatment/drinkWater' element={<DrinkWater/>}/>
        <Route path='/Aplications/waterTreatment/wasteWater' element={<WasteWater/>}/>
        <Route path='/Aplications/waterTreatment/industryWater' element={<IndustryWater/>}/> 
        
        <Route path='/AdminContacts' element={<PrototypeDashBoard/>}/> 


      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
