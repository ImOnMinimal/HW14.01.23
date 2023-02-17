import './Header.css'

function Header() {
    return (
      <>
        <div className="topLine">
          <div class="flex">
            <div className='defaultFlex'>
              <img src='./img/phone.png' className='topLineOneImage'></img>
              8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00
            </div>
            <div className='defaultFlex'>
              <img src='./img/PinClipart 2.svg' className='topLineTwoImage'></img>
              Войти / Регистрация
            </div>
          </div>
        </div>
        <div className="header">
          <div class="flex">
            
          </div>
        </div>
      </>
    );
  }

export default Header