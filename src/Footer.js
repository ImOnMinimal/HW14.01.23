import './App.css';

function Footer() {
    let date = new Date();
    return (
        <div className="widthMax">
            <h1>&copy;copyright все права защищены {date.getFullYear()} год</h1>
        </div>
    );
  }

  export default Footer;