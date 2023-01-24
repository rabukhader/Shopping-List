import LOGO from '../../assets/img/logo.png'
import './Navbar.css'
import Cart from './../Cart/Cart';

const Navbar = () => {
  return (
    <>
    <div className="navbar" id='navbar'>
        <div className="container navbarContainer">
            <div className="logo">
                <img src={LOGO} alt="logo" width='50' />
            </div>
            <div className="nav">
                <ul className='navList'>
                    <li><a href="#">Home</a></li>
                    <li><Cart /></li>
                </ul>
            </div>
        </div>

    </div>
    
    
    </>
  )
}

export default Navbar