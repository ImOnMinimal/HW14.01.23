import './Body.css'


function Good() {
    return (
      <>
        <div className='flex1 mainGood goodImgBg'>
            <div className='flex1 marginAuto'>
                <img src='./img/goodimage.png' className='goodImg' alt='img'></img>
            </div>
            <div className='flex1 goodTextBlock'>
                <div className='goodText1'>Louis XVI ATHOS</div>
                <div className='goodText2'>165 000 руб.</div>
            </div>
        </div>
      </>
    );
  }

export default Good