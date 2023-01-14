import './App.css';

function Header() {
    const logo = "https://fikiwiki.com/uploads/posts/2022-02/1645039762_34-fikiwiki-com-p-kartinki-logotipov-34.png"
    const saitName = "PukiKakiKakashechki"
    return (
        <div className="displayFlex">
            <div className='widthHalf headerHeight'>
                <img src={logo} class="headerHeight"></img>
            </div>
            <h1 className='widthHalf headerHeight'>
                {saitName}
            </h1>
        </div>
    );
  }

export default Header