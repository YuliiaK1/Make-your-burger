import React, {useContext} from 'react';
import Context from '../components/Context';
import { NavLink, useLocation } from 'react-router-dom';
import './MobileHeader.scss';
import logo from "../assets/image/header-logo.png"
import phoneRed from "../assets/image/phone.svg"
import phoneGreen from "../assets/image/phoneOn.svg"

function MobileHeader() {
  const {callbackOn, setCallbackOn} = useContext(Context);
  const [clicked, setClicked] = React.useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === '/Make-your-burger';

  function callBackOn() {
    setCallbackOn(current => !current);
  }
    return (
      <div className="mobile">
        <img width={48} height={48} src={logo} alt="header-logo" />
          <ul>
            <li style={{backgroundColor: callbackOn ? '#efffed' : '#FFEDED'}}>
                  <img src={callbackOn ? phoneGreen : phoneRed} alt="phone" />
                  <span style={{color: callbackOn ? '#31af0e' : '#FF4D4F'}} onClick={callBackOn}>Call Me Back</span>
            </li>
          </ul>
        <button id='burgerBar' onClick={()=>setClicked(!clicked)} style={{position: clicked&& "fixed", right: clicked&& "0"}}>
            <i id='bar' className={clicked?'fas fa-times':'fas fa-bars'}></i>
        </button>
        {clicked && <div className="burger-menu">
         <nav onClick={()=>setClicked(!clicked)}>
            {isMainPage? <NavLink to="/constructor" style={{textDecoration: 'none', animationDelay: "0.2s" }}><li >Make your burger</li></NavLink> : <NavLink to="/Make-your-burger" style={{textDecoration: 'none', animationDelay: "0.2s" }}><li >Discover</li></NavLink> }
            <NavLink to="/Make-your-burger" style={{textDecoration: 'none', animationDelay: "0.2s" }}><li >Account</li></NavLink>
            <NavLink to="/Make-your-burger" style={{textDecoration: 'none', animationDelay: "0.2s" }}><li >8 800 437-87-22</li></NavLink>
         </nav>
        </div>}
      </div>
  );
}
   
  export default MobileHeader;