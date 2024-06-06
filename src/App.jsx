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





function App() {
  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/products' element={<ProductsGRAL/>}/>
        <Route path='/aplications' element={<Aplications/>}/>
        <Route path='/calAgricola' element={<CalAgricola/>}/>
        <Route path='/product' element={<CardProtoypeProd/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
