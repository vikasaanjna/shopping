import { Link } from 'react-router-dom';
import icon from '../cart-dash.svg';
import './navbar.css'

function Navbar() {
    return (
      <div>
  
  <nav className="navbar bg-light">
    <div className="container-fluid">
     <Link  style={{textDecoration: 'none' }} to={"/"}> <span  className="navbar-brand mb-0 h1">SHOPPING WEBSITE</span> </Link>
     <Link to={"cart"} > <img className='imageAlignment' src={icon}></img> </Link>
    </div>
  </nav>
      </div>
    );
  }
  
  export default Navbar;
  