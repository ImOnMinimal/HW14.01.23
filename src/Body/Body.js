import './Body.css'
import Good from './Good.js'


function Body() {
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
            <div className='width50 newSeason'>
                <div className='newSeasonText'>
                    СЕЗОН 2020/21
                </div>
                <div className='flex1 goods'>
                    <Good/>
                    <Good/>
                    <Good/>
                </div>
            </div>
            <div className='newCollection width50'>
                <div className='newCollectionText'>НОВАЯ КОЛЛЕКЦИЯ</div>
                <button>КАТАЛОГ</button>
            </div>
        </div>
      </>
    );
  }

export default Body