import './App.css';

function InCart() {
    let [inCart, setInCart] = useState(false);

      return <div>
        <span>{inCart ? 'в корзине' : 'не в корзине'}</span>
        <button onClick={() => setInCart(!inCart)}>btn</button>
      </div>;
  }

export default InCart