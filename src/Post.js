import './App.css';
import image from './islandrampager.jpg'

function Post(){
    const nav = {news:'Новости', home: 'Главная', tri:'Три', chetire:'Четыре', pyat:'puagbapguhauphga'}
    return (
        <div className="alignCenter">
                <h3>cursed krutoi :smiling_imp:</h3>
                <img src={image}></img>
        </div>
    );
}

export default Post