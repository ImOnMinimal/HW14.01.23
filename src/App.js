import './App.css';
import { useState } from 'react';
import Lesson from './Lesson.js';
// import Header from './Header';
// import Nav from './Nav';
// import Content from './Content'
// import RightMenu from './RightMenu';
// import Footer from './Footer';

function App() {

    const [isActive, setIsActive] = useState(false);


   return(
    <div>
    <div style={{backgroundColor: isActive ? 'white' : '', color: isActive ? 'black' : ''}} class="widthMax height1200"onClick={() => setIsActive(!isActive)}>
      May your OWOS be many<br/>
      And your days MEW
    </div>
  </div>
   )
}
// function App() {
//   const arr = [1, 2, 3, 4, 5, 6];

//   const res = arr.map(function(item) {
//    return <p>{item}</p>;
//   });

//   return <div>
//    {res}
//   </div>;
//  }

export default App;