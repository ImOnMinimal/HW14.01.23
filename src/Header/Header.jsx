import './Header.css'
import React from 'react';
import SideMenu from '../SideMenu/SideMenu.jsx'
import { useState } from 'react';
import {Link} from 'react-router-dom'


function Header(props) {
  const [openCart, setOpenCart] = useState(false)

    
    return (
      <>
        <div className="topLine">
          <div class="flex">
            <div className='defaultFlex'>
              <img src='./img/phone.png' className='topLineOneImage' alt='phone'></img>
              8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00
            </div>
            <div className='defaultFlex'>
              <img src='./img/PinClipart 2.svg' className='topLineTwoImage' alt='enter'></img>
              Войти / Регистрация
            </div>
          </div>
        </div>
        <div className="header">
          <div className="flex">
            <Link to="/"><span className="logo">PORTEN</span></Link>
            <div width="width75">
              <ul className="navbar">
                <li className="navElem1">ГЛАВНАЯ</li>
                <Link to="/purchases"><li className="navElem1">МОИ ПОКУПКИ</li></Link>
                <Link to="/favourite"><li className="navElem1">ЗАКЛАДКИ</li></Link>
                <li className="navElem2"><img src='./img/cart.png' className='navImage1' alt='cart'  onClick={() => setOpenCart(true)}></img></li>
                <li className="navElem2"><img src='./img/profile.png' className='navImage2' alt='profile'></img></li>
              </ul>
            </div>
          </div>
        </div>
        <SideMenu openCart={openCart} setOpenCart={setOpenCart} cart={props.cart}></SideMenu>
      </>
    );
  }

export default Header