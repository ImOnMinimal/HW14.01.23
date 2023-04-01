import './SideMenu.css'
import SideMenuGood from './SideMenuGood.jsx'
import { useState } from 'react';
import React from 'react';



function SideMenu({openCart, setOpenCart, cart}) {
  // const [openCart, SetOpenCart] = useState(true)

  // let styleOverflow = {}
  // let styleSideBlock = {}

  // if (openCart === true) {
  //     styleOverflow = {width: '100%'};
  //     styleSideBlock = {width: '385px'};
  // } 
  // else {
  //     styleOverflow = {width: '0'};
  //     styleSideBlock = {width: '0'};
  // }
  // let count = document.querySelectorAll(".number").innerText
  
    const [count, setCount] = useState("0 руб.")
    let newCount = []
    function update(){
      newCount = [...document.querySelectorAll(".number")].map(a=>a.innerText);
      newCount = newCount.map(count => {return count.split(" ").join("")})
      newCount = newCount.map(count => {return parseFloat(count)})
      newCount = newCount.reduce((partialSum, a) => partialSum + a, 0);
      newCount = newCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")+" руб.";
      setCount(newCount)
    }
    // ----------
    const [ count1, setCount1 ] = useState(0);
    function increment() {
      setCount1(count + 1);
    }
    function decrement() {
      setCount1(count - 1);
    }

    let str = cart
    str = String(str)
    str = str.split(" ").join("")
    let sum = parseFloat(str) * count
    sum = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")+" руб.";
    // ----------
    const [show, setShow] = useState(false);

    let purchaseNotification = {}
    let sideMenuHide = {}

    if (show === true) {
        purchaseNotification = {width: 'flex'};
        sideMenuHide = {display: 'none'}
    } 
    else {
        purchaseNotification = {display: 'none'};
        sideMenuHide = {display: 'block'}
    }
  

    

    
  
    let styleOverflow = {}
    let styleSideBlock = {}

    if (openCart == true) {
        styleOverflow = {width: '100%'};
        styleOverflow = {height: '150vh'};
        styleSideBlock = {height: '385px'};
    } 
    else {
        styleOverflow = {width: '0'};
        styleOverflow = {height: '0'};
        styleSideBlock = {width: '0'};
    }





    


    // let card = [props.card]

    // let cards = card.map(result => {
    //   return <SideMenuGood name={result.name} cost={result.cost} img={result.img}/>
    // })


    // function addProdToCart(newProd) {

    //   let alreadyAdded = false

    //   for (let i = 0; i < cart.length; i++) {
    //       if (cart[i]['id'] == newProd.id) {
    //           alreadyAdded = true
    //       }

    //   }

    //   if (!alreadyAdded) {

    //       SetCart(prev => [...prev, newProd])

    //   }
    //   else {
    //       SetCart(cart.filter(p => p.id !== newProd.id));
    //   }
    // }
  
    return (
      <>
        <div className='Overflow' style={styleOverflow} onClick={() => setOpenCart(false)}></div>
        <div className='sideMenu SideBlock' style={styleSideBlock}>
        {/* <div className='flex1 sideMenu'> */}

        
              <div className='leftSide'>
                  <div style={sideMenuHide}>
                    {/* {cards} */}
                    {
                    cart.map((item) => {
                      return <div className='flex1 mainSideMenuGood sideMenuGoodImgBg'>
                      <div className='flex1 w-50'>
                          <img src={item.img} className='sideMenuGoodImg' alt='img'></img>
                      </div>
                      <div className='flex1 sideMenuGoodTextBlock'>
                          <div className='sideMenuGoodText1'>{item.name}</div>
                          <div className='sideMenuGoodText2'>{item.cost}</div>
                          <div className='sideMenuGoodText2'>{item.cost} * {count1} = <span className='number'>{sum}</span></div>
                          {/* <img src={addedCart ? './img/profile.png' : './img/cart.png'} onClick={() => SetAddedCart(!addedCart)}/> */}
                          <div className='d-flex justify-content-between'>
                            <div className="calculate" onClick={decrement}>-</div>
                            <div className="calculate">{count1}</div>
                            <div className="calculate text-end" onClick={increment}>+</div>
                          </div>
                      </div>
                    </div>
                    })
                    }
                    <div className='text-white'>
                      
                      <button className='countBlock' onClick={() => update()}>{count}</button>
                      <button className='countBlock' onClick={() => setShow(true)}>Оформить заказ</button>
                      <button className='countBlock' onClick={() => setOpenCart(false)}>Оформить заказ</button>
                    </div>
                  </div>
                  <div class="purchaseNotification" style={purchaseNotification}>
                    <div className="purchaseConfirm">
                        <div className='purchaseText'>ORDER COMPLETE</div><br/>
                        <div className='purchaseImg'><img src='./img/cartImg.png'></img></div>
                    </div>
                  </div>

              </div>
              <div className='rightSide'>
                
              </div>
        {/* </div> */}
        </div>
      </>
    );
  }

export default SideMenu