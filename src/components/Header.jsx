import React, {useContext} from 'react';
import Context from './Context';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import logo from "../assets/image/header-logo.png"
import phoneRed from "../assets/image/phone.svg"
import phoneGreen from "../assets/image/phoneOn.svg"
import avatar from "../assets/image/avatar-dropdown.png"

function Header() {
  const {callbackOn, setCallbackOn} = useContext(Context);

  function callBackOn() {
    setCallbackOn(current => !current);
  }
    return (
        <header className="header">
          <div className="header-left">
          <img width={57} height={57} src={logo} alt="header-logo" />
           <ul>
            <NavLink to="/" style={{ textDecoration: 'none' }}><li >Discover</li></NavLink>
            <NavLink to="/constructor" style={{ textDecoration: 'none' }}><li>Make your burger</li></NavLink>
           </ul>
          </div>
          
          <div className="header-right">
            <ul>
              <li style={{backgroundColor: callbackOn ? '#efffed' : '#FFEDED'}}>
                <img src={callbackOn ? phoneGreen : phoneRed} alt="phone" />
                <span style={{color: callbackOn ? '#31af0e' : '#FF4D4F'}} onClick={callBackOn}>Call Me Back</span>
              </li>
              <li className='hidden'><span>8 800 437-87-22</span></li>
              <li><img width={41} height={41} src={avatar} alt="avatar" /></li>
            </ul>
          </div>
        </header>
    );
  }
  
  export default Header;