import './App.css';
import { useState } from 'react';
// import Header from './Header';
// import Nav from './Nav';
// import Content from './Content'
// import RightMenu from './RightMenu';
// import Footer from './Footer';

function App() {
  // const [degreeF, setDegreeF] = useState(0)


  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [input3, setInput3] = useState(0)
  const [input4, setInput4] = useState(0)
  const [input5, setInput5] = useState(0)
  return (
  // <div>
  //   <span>F° = </span>
  //   <input value={degreeF} onInput={(event) => setDegreeF(event.target.value)}/><br/>
  //   <span>C° = {5/9*(degreeF - 32)}</span>
  // </div>


  <div>
    <input value={input1} onInput={(event) => setInput1(event.target.value)}/><br/>
    <input value={input2} onInput={(event) => setInput2(event.target.value)}/><br/>
    <input value={input3} onInput={(event) => setInput3(event.target.value)}/><br/>
    <input value={input4} onInput={(event) => setInput4(event.target.value)}/><br/>
    <input value={input5} onInput={(event) => setInput5(event.target.value)}/><br/>
    <span>{(Number(input1)+Number(input2)+Number(input3)+Number(input4)+Number(input5))/5}</span>
  </div>
  );
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