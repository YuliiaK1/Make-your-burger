import './Header.scss';
function Header() {
    return (
        <header className="header">
          <div className="header-left">
          <img width={57} height={57} src=".\image\header-logo.png" alt="header-logo" />
           <ul>
            <li className="active">Discover</li>
            <li>Make your burger</li>
           </ul>
          </div>
          <div className="header-right">
            <ul>
              <li>
                <img src=".\image\phone.svg" alt="phone" />
                <span>Call Me Back</span>
              </li>
              <li><span>8 800 437-87-22</span></li>
              <li><img width={41} height={41} src=".\image\avatar-dropdown.png" alt="avatar" /></li>
            </ul>
          </div>
        </header>
    );
  }
  
  export default Header;