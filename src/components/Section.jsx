import './Section.scss';
import { Link } from 'react-router-dom';
function Section() {
    return (
      <div className="section">
        <button><Link to="/constructor" style={{textDecoration: "none", color: "#FFFFFF"}}>Make Burger</Link></button>
        <img width={520} height={502} src="./image/main-img-burger.png" alt="burger" />
      </div>
  );
}

export default Section;
