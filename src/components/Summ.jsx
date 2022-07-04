import './Summ.scss'
function Summ() {
    return (
      <div className="summ">
        <h2>Summary</h2>
        <hr />
        <div className="price">
          <p>$0.00</p>
          <button>Checkout</button>
        </div>
        <p>Build a <span>$10</span> Burger and Get a Gift</p>
        <div className="time">
          <div>
            <img src="./image/Summary icons.svg" alt="" />
            <span>0 min</span>
          </div>
          <div>
            <img src="./image/Summary icons2.svg" alt="" />
            <span>0 oz</span>
          </div>
          <div>
            <img src="./image/Summary icons3.svg" alt="" />
            <span>0 kcal</span>
          </div>
        </div>
      </div>
  );
}

export default Summ;
