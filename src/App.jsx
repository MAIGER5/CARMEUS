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





function App() {
  return (
    <HashRouter>
      <NavBar/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/products' element={<ProductsGRAL/>}/>
        <Route path='/aplications' element={<Aplications/>}/>
        <Route path='/quicklime' element={<CalViva/>}/>
        <Route path='/hydratedlime' element={<CalHidratada/>}/>
        <Route path='/dolomiticlime' element={<CalDolomita/>}/>
        <Route path='/agriculturallime' element={<CalAgricola/>}/>
        <Route path='/limestone' element={<PiedraCaliza/>}/>
        <Route path='/carbonate' element={<Carbonato/>}/>
        <Route path='/neutramol' element={<Neutramol/>}/>

        <Route path='/cales' element={<Cales/>}/>
        <Route path='/stone' element={<Piedra/>}/>

        <Route path='/engeneerBuilding' element={<EngeneerBuilding/>}/>
        <Route path='/chemical' element={<Chemestry/>}/>
        <Route path='/steel' element={<IronSteel/>}/>
        <Route path='/flueGasTreatment' element={<FlueGasTreatment/>}/>
        <Route path='/glassCeramic' element={<GlassCeramic/>}/>
        <Route path='/noFerrousMining' element={<NoFerrousMining/>}/>
        <Route path='/pccPulPaper' element={<PccPulPaper/>}/>
        <Route path='/waterTreatment' element={<WaterTreatment/>}/>

        <Route path='/plasticRubber' element={<PlasticRubber/>}/>
        <Route path='/chemicalCompounds' element={<ChemicalCompounds/>}/>
        <Route path='/chemicalCalciumSalts' element={<ChemicalCalciumSalts/>}/>
        <Route path='/iron' element={<Iron/>}/>
        <Route path='/acero' element={<Acero/>}/>

        <Route path='/aggregado' element={<Aggregado/>}/>
        <Route path='/asphalt' element={<Asphalt/>}/>
        <Route path='/soilTreatment' element={<SoilTreatment/>}/>

        <Route path='/drinkWater' element={<DrinkWater/>}/>
        <Route path='/wasteWater' element={<WasteWater/>}/>
        <Route path='/industryWater' element={<IndustryWater/>}/> 
        
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
