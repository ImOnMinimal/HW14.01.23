import './SideMenu.css'
import SideMenuGood from './SideMenuGood.jsx'
import { useState } from 'react';
import React from 'react';



function SideMenu({openCart, setOpenCart, cart, cartEmpty}) {
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
    // const [ count1, setCount1 ] = useState(0);
    // function increment() {
    //   setCount1(count1 + 1);
    // }
    // function decrement() {
    //   setCount1(count1 - 1);
    // }

    // let str = cart
    // str = String(str)
    // str = str.split(" ").join("")
    // let sum = parseFloat(str) * count1
    // console.log(str)
    // sum = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")+" руб.";
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
  

    let emptyCart = {}
    let buttonsDisplay = {}
    if(cartEmpty == false){
      emptyCart = {display: 'none'}
      buttonsDisplay = {display: 'block'}
    }
    else if(cartEmpty == true){
      emptyCart = {display: 'block'}
      buttonsDisplay = {display: 'none'}
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
                    <div style={emptyCart} className='bodyFlexEmptyCart'>
                        <div className='w-100'>
                            <div className="squareBoxEmptyCart">
                                <div className='squareText1EmptyCart'>NO GOODS</div><br/>
                                <div className='squareText2EmptyCart'><img src='./img/noFavorites.png'></img></div>
                            </div>
                        </div>
                        <div className='bottomTextEmptyCart'>
                            You know, that Fumo Plush that you can't help but squeeze? Plush are here! Discover the whimsical shapes, sizes, and designs of these Fumo Plush today at Fumo Plush Shop. They’re perfect for kids but if you are an adult who needs a little stress relief in your life, we won’t judge! And they come in all sorts of colors and patterns to suit any taste! We have so many different kinds of Fumo Plushs.<br/>
                            Fumo Plushs are the sweetest gifts to give to your loved ones for special occasions like birthdays, holidays, or to show them how much you care! They are also an adorable addition to your plush collection!
                        </div>
                    </div>
                    {/* {cards} */}
                    {cart.map((item) => (<SideMenuGood id={item.id} name={item.name} cost={item.cost} img={item.img}/>))}
                    <div className='text-white' style={buttonsDisplay}>
                      
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