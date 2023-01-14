import './App.css';
import Header from './Header';
import Nav from './Nav';
import Content from './Content'
import RightMenu from './RightMenu';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header/>
      <div className="displayFlex">
        <Nav/>
        <Content/>
        <RightMenu/>
      </div>
      <Footer/>
      
    </>
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