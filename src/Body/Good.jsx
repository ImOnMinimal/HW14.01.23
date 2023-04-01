import './Body.css'
import { useState } from 'react';
import React from 'react';


function Good({id, name, cost, img, addProdToCart}) {
  const [ count, setCount ] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  
  let str = String(cost)
  str = str.split(" ").join("")
  let sum = parseFloat(str) * count
  sum = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")+" руб.";


  const [addToCart, setAddToCart] = useState(false)

  function clickAdd(newProd){
    setAddToCart(!addToCart)
    addProdToCart(newProd)
  }

    
    
    return (
      <>
        <div className='flex1 mainGood goodImgBg'>
            <div className='flex1 w-100 p-2'>
                <img src={img} className='goodImg' alt='img'></img>
            </div>
            <div className='flex1 goodTextBlock w-100 p-2'>
                <div className='goodText1'>{name}</div>
                <div className='goodText2'>{cost}</div>
                <div className='goodText2'>{cost} * {count} = <span className='number'>{sum}</span></div>
                {/* <img src={addedCart ? './img/profile.png' : './img/cart.png'} onClick={() => SetAddedCart(!addedCart)}/> */}
                <div className='d-flex justify-content-between'>
                  <div className="calculate" onClick={decrement}>-</div>
                  <div className="calculate">{count}</div>
                  <div className="calculate text-end" onClick={increment}>+</div>
                  <div className='buttonAddToCart'><img src={addToCart ? './img/addtocartlightgreen.png' : './img/addtocartwhite.png'} onClick={() =>  clickAdd({id: id, name: name, cost: cost, img: img})}></img></div>
                </div>
            </div>
        </div>
      </>
    );
  }

export default Good