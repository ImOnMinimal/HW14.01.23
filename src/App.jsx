import './App.css';
import Header from './Header/Header.jsx'
import Body from './Body/Body.jsx'
import BodyPurchases from './BodyPurchases/BodyPurchases.jsx'
import BodyFavourite from './BodyFavourite/BodyFavourite.jsx'
import MyCarousel from './Carousel/MyCarousel.jsx';
import Footer from './Footer/Footer.jsx'
import React from 'react';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
// import Button from 'react-bootstrap/Button';

function App() {
  const [cart, setCart] = useState([])
  function addProdToCart(newProd){
    setCart(prev => [...prev, newProd])
  }
  return(
  <>
    
    <Routes>
      <Route path='/' element={<><Header cart={cart}/><Body/><MyCarousel addProdToCart={(newProd) => addProdToCart(newProd)}/><Footer/></>}/>
      <Route path='favourite' element={<><Header cart={cart}/><BodyFavourite/><Footer/></>}/>
      <Route path='purchases' element={<><Header cart={cart}/><BodyPurchases/><Footer/></>}/>
    </Routes>
    
    
    
  </>
  )
}
export default App;