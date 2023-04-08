import './BodyFavourite.css'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import GoodFavourite from './GoodFavourite.jsx'
import '../Carousel/MyCarousel.css'



function BodyFavourite({cartFav, cartEmptyFav}) {
    let emptyCart = {}
    // let buttonsDisplay = {}
    if(cartEmptyFav == false){
      emptyCart = {display: 'none'}
      // buttonsDisplay = {display: 'block'}
    }
    else if(cartEmptyFav == true){
      emptyCart = {display: 'block'}
      // buttonsDisplay = {display: 'none'}
    }
    return (
      <>
        <div className="bodyIntroFavourite">
            <div className='bodyFlexFavourite'>
                <div className='w-100'>
                    <div className="squareBoxFavourite" style={emptyCart}>
                        <div className='squareText1Favourite'>NO FAVORITES</div><br/>
                        <div className='squareText2Favourite'><img src='./img/noFavorites.png'></img></div>
                    </div>
                    <Carousel>
                      <Carousel.Item>
                        <div className='CarouselItem width1080'>
                          {cartFav.map((singleCard) => (
                            <GoodFavourite id={singleCard.id} name={singleCard.name} cost={singleCard.cost} img={singleCard.img}/>
                          ))}
                        
                        </div>
                      </Carousel.Item>
                    </Carousel>
                </div>
                <div className='bottomTextFavourite' style={emptyCart}>
                    You know, that Fumo Plush that you can't help but squeeze? Plush are here! Discover the whimsical shapes, sizes, and designs of these Fumo Plush today at Fumo Plush Shop. They’re perfect for kids but if you are an adult who needs a little stress relief in your life, we won’t judge! And they come in all sorts of colors and patterns to suit any taste! We have so many different kinds of Fumo Plushs.<br/>
                    Fumo Plushs are the sweetest gifts to give to your loved ones for special occasions like birthdays, holidays, or to show them how much you care! They are also an adorable addition to your plush collection!
                </div>
            </div>
        </div>
      </>
    );
  }

export default BodyFavourite