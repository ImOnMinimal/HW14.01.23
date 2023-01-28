import './App.css';
import { useState } from 'react';
// import Header from './Header';
// import Nav from './Nav';
// import Content from './Content'
// import RightMenu from './RightMenu';
// import Footer from './Footer';

function App() {
  // const [degreeF, setDegreeF] = useState(0)
  // function handleChange1(event){
  //   setDegreeF(+event.target.value);
  // }


  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [input3, setInput3] = useState(0)
  const [input4, setInput4] = useState(0)
  const [input5, setInput5] = useState(0)
  function handleChange1(event){
    setInput1(+event.target.value);
  }
  function handleChange2(event){
    setInput2(+event.target.value);
  }
  function handleChange3(event){
    setInput3(+event.target.value);
  }
  function handleChange4(event){
    setInput4(+event.target.value);
  }
  function handleChange5(event){
    setInput5(+event.target.value);
  }
  let sum = input1+input2+input3+input4+input5
  return (
  // <div>
  //   <span>F° = </span>
  //   <input value={degreeF} onInput={handleChange1}/><br/>
  //   <span>C° = {degreeF / 33.8}</span>
  // </div>


  <div>
    <input value={input1} onInput={handleChange1}/><br/>
    <input value={input2} onInput={handleChange2}/><br/>
    <input value={input3} onInput={handleChange3}/><br/>
    <input value={input4} onInput={handleChange4}/><br/>
    <input value={input5} onInput={handleChange5}/><br/>
    <span>Среднее арифметическое = {sum / 5}</span>
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