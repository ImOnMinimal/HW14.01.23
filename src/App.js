import './App.css';
import Header from './Header/Header.js'
import Body from './Body/Body.js'
import MyCarousel from './Carousel/MyCarousel.js';
import Footer from './Footer/Footer.js'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';

function App() {
  return(
  <>
    <Header/>
    <Body/>
    <MyCarousel/>
    <Footer/>
  </>
  )
}
export default App;