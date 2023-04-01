import './Body.css'
import Good from './Good.jsx'
import React from 'react';



function Body() {
    let card = [
        {id: 1, name: "Louis XIV ATHOS", cost: "165 000 руб.", img: "./img/goodimage.png"},
        {id: 2, name: "Louis XXVI ATHOS", cost: "100 032 руб.", img: "./img/goodimage1.png"},
        {id: 3, name: "Louis XVII ATHOS", cost: "177 885 руб.", img: "./img/goodimage2.png"}
      ]
    
      let cards = card.map(result => {
        return <Good name={result.name} cost={result.cost} img={result.img}/>
      })
    return (
      <>
        <div className="bodyIntro">
            <div className='bodyFlex'>
                <div className='width100'>
                    <div className="squareBox">
                        <div className='squareText1'>PORTEN</div><br/>
                        <div className='squareText2'>САНКТ-ПЕТЕРБУРГ</div>
                    </div>
                </div>
                <div className='bottomText'>
                    You know, that Fumo Plush that you can't help but squeeze? Plush are here! Discover the whimsical shapes, sizes, and designs of these Fumo Plush today at Fumo Plush Shop. They’re perfect for kids but if you are an adult who needs a little stress relief in your life, we won’t judge! And they come in all sorts of colors and patterns to suit any taste! We have so many different kinds of Fumo Plushs.<br/>
                    Fumo Plushs are the sweetest gifts to give to your loved ones for special occasions like birthdays, holidays, or to show them how much you care! They are also an adorable addition to your plush collection!
                </div>
            </div>
        </div>
        <div className='bodyNews'>
            <div className='width1140 newSeason'>
                <div className='newSeasonText'>
                    СЕЗОН 2020/21
                </div>
                <div className='flex1 goods'>
                    {cards}
                </div>
            </div>
            <div className='newCollection width880'>
                <div className='newCollectionText'>НОВАЯ КОЛЛЕКЦИЯ</div>
                <div className='flex1'>
                    <button className='buttonCollection'>КАТАЛОГ</button>
                </div>
            </div>
        </div>
        <div className='collectionBlock'>
            <div className='width880'>
                <img src="./img/collectionimg.png" className='collectionImg'></img>
            </div>
            <div className='width1140 oldCollection'>
                <div className='oldCollectionText1'>
                    КОЛЛЕКЦИЯ 2018
                </div>
                <div className='flex1 oldCollectionText2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. 
                </div>
                <div className='flex1'>
                    <button className='buttonCollection'>ПОСМОТРЕТЬ КОЛЛЕКЦИЮ</button>
                </div>
            </div>
        </div>

        
      </>
    );
  }

export default Body