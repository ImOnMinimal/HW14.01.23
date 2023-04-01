import Carousel from 'react-bootstrap/Carousel';
import './MyCarousel.css'
import Good from '../Body/Good.jsx'
import React from 'react';

function MyCarousel(props) {
  let numberofgoods = document.querySelectorAll(".mainGood").length;

  let card = [
    {id: 1, name: "Louis XIV ATHOS", cost: "165 000 руб.", img: "./img/62050 1.png"},
    {id: 2, name: "Louis XXVI ATHOS", cost: "100 032 руб.", img: "./img/62050 1-1.png"},
    {id: 3, name: "Louis XVII ATHOS", cost: "177 885 руб.", img: "./img/62050 1-2.png"},
    {id: 4, name: "Louis XVII ATHOS", cost: "177 885 руб.", img: "./img/62050 1-3.png"},
    {id: 5, name: "Louis XVII ATHOS", cost: "177 885 руб.", img: "./img/62050 1-4.png"},
    {id: 6, name: "Louis XVII ATHOS", cost: "177 885 руб.", img: "./img/62050 1-5.png"},
    {id: 7, name: "Louis XVII ATHOS", cost: "177 885 руб.", img: "./img/62050 1-6.png"},
    {id: 8, name: "Louis XVII ATHOS", cost: "177 885 руб.", img: "./img/62050 1-7.png"}
  ]

  // let cards = card.map(result => {
  //   return <Good name={result.name} cost={result.cost} img={result.img} car={card} addProdToCart={(newProd) => addProdToCart(newProd)}/>
  // })
  return (<>
    <div className='textValue'>Количество товаров на странице: {numberofgoods}</div>
    <Carousel className='bgColorBlack'>
      <Carousel.Item>
        <div className='CarouselItem width1080'>
          {card.map((singleCard) => (
            <Good name={singleCard.name} cost={singleCard.cost} img={singleCard.img} card={card} addProdToCart={(newProd) => props.addProdToCart(newProd)}/>
          ))}
        
        </div>
      </Carousel.Item>
      <Carousel.Item className='bgColorBlack'>
      <div className='CarouselItem width1080'>
      {card.map((singleCard) => (
            <Good name={singleCard.name} cost={singleCard.cost} img={singleCard.img} card={card} addProdToCart={(newProd) => props.addProdToCart(newProd)}/>
          ))}
        </div>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default MyCarousel;