import './Footer.scss';
import { imageFooter } from '../assets/image/imageFooter';
function Footer() {
    return (
      <div className="footer">
        <div className="left-footer">
            <p>2022. Make Your Burger</p>
            <a href="/#">Privacy Policy</a>
            <span>&#124;</span>
            <a href="/#">Terms &#38; Conditions</a>
        </div>
        <div className="right-footer">
            <ul>
              {imageFooter.map((obj)=>(
                <li key={obj.id}><img src={obj.image} alt={obj.alt}/></li> 
              ))}
            </ul>
        </div>
      </div>
  );
}
  
  export default Footer;