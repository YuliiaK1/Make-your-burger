import './Footer.scss';
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
                <li><img src="./image/payment-logos-1.png" alt="visa" /></li>
                <li><img src="./image/payment-logos-2.png" alt="masterCard" /></li>
                <li><img src="./image/payment-logos-3.png" alt="googlePay" /></li>
                <li><img src="./image/payment-logos-4.png" alt="applePay" /></li>
                <li><img src="./image/payment-logos-5.png" alt="payPas" /></li>
                <li><img src="./image/payment-logos.png" alt="bitcoin" /></li>
                <li><img src="./image/Etherium.png" alt="processor" /></li>
            </ul>
        </div>
      </div>
  );
}
  
  export default Footer;