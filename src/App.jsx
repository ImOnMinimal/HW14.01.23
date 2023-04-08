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

  // function addProdToCart(newProd){
  //   setCart(prev => [...prev, newProd])
  // }
  



  
  
  function addProdToCart(newProd) {

    let alreadyAdded = false

    for (let i = 0; i < cart.length; i++) {
        if (cart[i]['id'] == newProd.id) {
            alreadyAdded = true
        }
    }

    if (!alreadyAdded) {

        setCart(prev => [...prev, newProd])

    }
      else {
          setCart(cart.filter(p => p.id !== newProd.id));
          
      }
}
    
  return(
  <>
    
    <Routes>
      <Route path='/' element={<><Header cart={cart}/><Body addProdToCart={(newProd) => addProdToCart(newProd)} cart={cart}/><MyCarousel addProdToCart={(newProd) => addProdToCart(newProd)} cart={cart}/><Footer/></>}/>
      <Route path='favourite' element={<><Header cart={cart}/><BodyFavourite/><Footer/></>}/>
      <Route path='purchases' element={<><Header cart={cart}/><BodyPurchases/><Footer/></>}/>
    </Routes>
    
    
    
  </>
  )
}
export default App;