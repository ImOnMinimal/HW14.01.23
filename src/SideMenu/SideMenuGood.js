import './SideMenu.css'
import { useState } from 'react';


function SideMenuGood() {
  
  
  // const [addedCart, SetAddedCart] = useState(false)
  const [ count, setCount ] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  const price = 165000
  const sum = price * count
  

  
    return (
      <>
        <div className='flex1 mainSideMenuGood sideMenuGoodImgBg'>
            <div className='flex1 w-50'>
                <img src='./img/goodimage.png' className='sideMenuGoodImg' alt='img'></img>
            </div>
            <div className='flex1 sideMenuGoodTextBlock'>
                <div className='sideMenuGoodText1'>Louis XVI ATHOS</div>
                <div className='sideMenuGoodText2'>165 000 руб.</div>
                <div className='sideMenuGoodText2'>165 000 руб. * {count} = <span className='number'>{sum}</span></div>
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