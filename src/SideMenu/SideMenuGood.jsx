import './SideMenu.css'
import { useState } from 'react';
import React from 'react';


function SideMenuGood({name, cost, img}) {
  const [ count, setCount ] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  let str = cost.split(" ").join("")
  let sum = parseFloat(str) * count
  sum = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")+" руб.";
  



  

  
  

  
    return (
      <>
        <div className='flex1 mainSideMenuGood sideMenuGoodImgBg'>
            <div className='flex1 w-50'>
                <img src={img} className='sideMenuGoodImg' alt='img'></img>
            </div>
            <div className='flex1 sideMenuGoodTextBlock'>
                <div className='sideMenuGoodText1'>{name}</div>
                <div className='sideMenuGoodText2'>{cost}</div>
                <div className='sideMenuGoodText2'>{cost} * {count} = <span className='number'>{sum}</span></div>
                {/* <img src={addedCart ? './img/profile.png' : './img/cart.png'} onClick={() => SetAddedCart(!addedCart)}/> */}
                <div className='d-flex justify-content-between'>
                  <div className="calculate" onClick={decrement}>-</div>
                  <div className="calculate">{count}</div>
                  <div className="calculate text-end" onClick={increment}>+</div>
                </div>
            </div>
        </div>
      </>
    );
  }
export default SideMenuGood