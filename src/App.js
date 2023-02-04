import './App.css';
import { useState } from 'react';
import Lesson from './Lesson.js';
// import Header from './Header';
// import Nav from './Nav';
// import Content from './Content'
// import RightMenu from './RightMenu';
// import Footer from './Footer';

function App() {
  // const [on, setOn] = useState(false); 


  const [isActive, setIsActive] = useState(false);
  return(
  <div>
    {/* <input type="button" checked={on} onClick={() => setOn(!on)} ></input>
    <p>{ on ? 'Включено' : 'Выключено'}</p>  */}


    <div style={{backgroundColor: isActive ? 'white' : '', color: isActive ? 'black' : ''}} class="widthMax height1200"onClick={() => setIsActive(!isActive)}>
      May your OWOS be many<br/>
      And your days MEW
    </div>
  </div>
  )
}
export default App;