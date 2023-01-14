import './App.css';

function RightMenu(){
    const nav = {news:'Новости', home: 'Главная', tri:'Три', chetire:'Четыре', pyat:'puagbapguhauphga'}
    const link = "https://www.google.ru"
    return (
        <div className="alignRight">
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

export default RightMenu