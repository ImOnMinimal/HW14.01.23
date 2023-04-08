import './BodyFavourite.css'
import React from 'react';


function GoodFavourite({name, cost, img}) {
  
  



  

    
    
    return (
      <>
        <div className='flex1 mainGood goodImgBg'>
            <div className='flex1 w-100 p-2'>
                <img src={img} className='goodImg' alt='img'></img>
            </div>
            <div className='flex1 goodTextBlock w-100 p-2'>
                <div className='goodText1'>{name}</div>
                <div className='goodText2'>{cost}</div>
                
            </div>
        </div>
      </>
    );
  }

export default GoodFavourite