import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/home/home';
import { NavBar } from './components/navBar/navBar';
import { Footer } from './components/footer/footer';
import { AboutUs } from './components/aboutUs/aboutUs';
import { ProductsGRAL } from './components/products/productsGRAL/productsGRAL';
import { Aplications } from './components/aplications/aplications';
import { CalAgricola } from './components/products/calAgricola/calAgricola';
import { CardProtoypeProd } from './components/cards/cardProtoypeProd/cardProtoypeProd';
import { CalViva } from './components/products/calViva/calViva';
import { CalHidratada } from './components/products/calHidratada/calHidratada';
import { CalDolomita } from './components/products/calDolomita/calDolomita';
import { PiedraCaliza } from './components/products/piedraCaliza/piedraCaliza';
import { Carbonato } from './components/products/carbonato/carbonato';
import { Neutramol } from './components/products/neutramol/neutramol';
import { Chemestry } from './components/aplications/chemestry/chemestry';
import { AplicationPrototype } from './components/aplications/aplicationPrototype/aplicationPrototype';





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


        {/* <Route path='/agricola' element={<Neutramol/>}/>
        <Route path='/construction' element={<Neutramol/>}/> */}
        <Route path='/chemical' element={<Chemestry/>}/>
        {/* <Route path='/gas' element={<Neutramol/>}/>
        <Route path='/ceramics' element={<Neutramol/>}/>
        <Route path='/steel' element={<Neutramol/>}/>
        <Route path='/mining' element={<Neutramol/>}/>
        <Route path='/pcc' element={<Neutramol/>}/>
        <Route path='/water' element={<Neutramol/>}/> */}

        <Route path='/chemical/plasticRubber' element={<AplicationPrototype/>}/>

      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
