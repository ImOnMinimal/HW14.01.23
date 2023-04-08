import './Body.css'
import { useState } from 'react';
import React from 'react';


function Good({id, name, cost, img, addProdToCart, addProdToFav}) {
  


  const [addToCart, setAddToCart] = useState(false)
  const [addToFav, setAddToFav] = useState(false)


  function clickAdd(newProd){
    setAddToCart(!addToCart)
    addProdToCart(newProd)
    
    
  }
  function clickAddToFav(newProd){
    setAddToFav(!addToFav)
    addProdToFav(newProd)
    
    
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
                {/* <img src={addedCart ? './img/profile.png' : './img/cart.png'} onClick={() => SetAddedCart(!addedCart)}/> */}
                <div className='d-flex justify-content-between'>
                  <div className='buttonAddToCart'><img className='buttonAddToCart' src={addToFav ? './img/addtofavclick.png' : './img/addtofav.png'} onClick={() =>  clickAddToFav({id: id, name: name, cost: cost, img: img})}></img></div>
                  <div className='buttonAddToCart'><img className='buttonAddToCart' src={addToCart ? './img/addtocartlightgreen.png' : './img/addtocartwhite.png'} onClick={() =>  clickAdd({id: id, name: name, cost: cost, img: img})}></img></div>
                </div>
            </div>
        </div>
      </>
    );
  }

export default Good