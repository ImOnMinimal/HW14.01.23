import './App.css';

function Nav(){
    const nav = {news:'Новости', home: 'Главная', tri:'пуки', chetire:'каки', pyat:'какашеааааа'}
    const link = "https://www.google.ru"
    return (
        <div className="displayFlex">
            <ul>
                <li><a href={link}>{nav.news}</a></li>
                <li><a href={link}>{nav.home}</a></li>
                <li><a href={link}>{nav.tri}</a></li>
                <li><a href={link}>{nav.chetire}</a></li>
                <li><a href={link}>{nav.pyat}</a></li>
            </ul>
        </div>
    );
}

export default Nav