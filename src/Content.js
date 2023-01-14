import './App.css';
import Post from './Post';

function Content(){
    const nav = {news:'Новости', home: 'Главная', tri:'Три', chetire:'Четыре', pyat:'puagbapguhauphga'}
    return (
        <div className="alignRight">
            <Post/>
            <Post/>
        </div>
    );
}

export default Content