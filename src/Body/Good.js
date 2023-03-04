import './Body.css'
import { useState } from 'react';


function Good() {
  const [ count, setCount ] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  let price = 165000
    return (
      <>
        <div className='flex1 mainGood goodImgBg'>
            <div className='flex1 w-100 p-2'>
                <img src='./img/goodimage.png' className='goodImg' alt='img'></img>
            </div>
            <div className='flex1 goodTextBlock w-100 p-2'>
                <div className='goodText1'>Louis XVI ATHOS</div>
                <div className='goodText2'>165 000 руб.</div>
                <div className='goodText2'>165 000 руб. * {count} = {price*count}</div>
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

export default Good