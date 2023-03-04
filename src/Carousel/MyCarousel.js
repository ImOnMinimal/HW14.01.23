import Carousel from 'react-bootstrap/Carousel';
import './MyCarousel.css'
import Good from '../Body/Good.js'

function MyCarousel() {
  return (
    <Carousel className='bgColorBlack'>
      <Carousel.Item>
        <div className='CarouselItem width1080'>
        <Good/>
        <Good/>
        <Good/>
        <Good/>
        <Good/>
        <Good/>
        <Good/>
        <Good/>
        </div>
      </Carousel.Item>
      <Carousel.Item className='bgColorBlack'>
      <div className='CarouselItem width1080'>
        <Good/>
        <Good/>
        <Good/>
        <Good/>
        <Good/>
        <Good/>
        <Good/>
        <Good/>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;