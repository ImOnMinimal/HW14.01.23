import './SideMenu.css'
import SideMenuGood from './SideMenuGood.js'
import { useState } from 'react';



function SideMenu() {
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
  
    let count = []
    function update(){
      count = [...document.querySelectorAll(".number")].map(a=>a.innerText);
      count = count.map(str => {return Number(str)})
      count = count.reduce((partialSum, a) => partialSum + a, 0);
    }

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
  

  
  
  
    return (
      <>
        {/* <div className='Overflow' style={styleOverflow} onClick={() => SetOpenCart(false)}></div>
        <div className='sideMenu SideBlock' style={styleSideBlock}> */}
        <div className='flex1 sideMenu'>

        
              <div className='leftSide'>
                  <div style={sideMenuHide}>
                    <SideMenuGood/>
                    <SideMenuGood/>
                    <SideMenuGood/>
                    <div className='text-white'>
                      {count}
                      <button className='countBlock' onClick={update}>vrrrrr</button>
                      <button className='countBlock' onClick={() => setShow(true)}>Оформить заказ</button>
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
        </div>
        {/* </div> */}
      </>
    );
  }

export default SideMenu