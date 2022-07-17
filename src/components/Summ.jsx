import './Summ.scss'
function Summ(props) {
    return (
      <div className="summ">
        <h2>Summary</h2>
        <hr />
        <div className="price">
          <p>${props.price}</p>
          <button>Checkout</button>
        </div>
        <p>Build a <span>$10</span> Burger and Get a Gift</p>
        <div className="time">
          <div>
            <img src="./image/Summary icons.svg" alt="" />
            <span>7 min</span>
          </div>
          <div>
            <img src="./image/Summary icons2.svg" alt="" />
            <span>20 oz</span>
          </div>
          <div>
            <img src="./image/Summary icons3.svg" alt="" />
            <span>80 kcal</span>
          </div>
        </div>
      </div>
  );
}

export default Summ;
