import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/home/home';
import { NavBar } from './components/navBar/navBar';
import { Footer } from './components/footer/footer';
import { AboutUs } from './components/aboutUs/aboutUs';
import { ProductsGRAL } from './components/products/productsGRAL/productsGRAL';
import { Aplications } from './components/aplications/aplications';





function App() {
  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/products' element={<ProductsGRAL/>}/>
        <Route path='/aplications' element={<Aplications/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
