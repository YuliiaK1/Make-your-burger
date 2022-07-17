import './Section.scss';
import { Link } from 'react-router-dom';
function Section() {
    return (
      <div className="section">
        <Link to="/constructor"><button >Make Burger</button></Link>
        <img width={520} height={502} src="./image/main-img-burger.png" alt="burger" />
      </div>
  );
}

export default Section;
