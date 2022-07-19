import React, {useContext} from 'react';
import Context from './Context';
import './Summ.scss'

function Summ() {
  const value = useContext(Context);
    return (
      <div className="summ">
        <h2>Summary</h2>
        <hr />
        <div className="price">
          <p>${+value.summItem.toFixed(2) || 0}</p>
          <button>Checkout</button>
        </div>
        <p>Build a <span>$20</span> Burger and Get a Gift</p>
        <div className="time">
          <div>
            <img src="./image/Summary icons.svg" alt="" />
            <span>7 min</span>
          </div>
          <div>
            <img src="./image/Summary icons2.svg" alt="" />
            <span>{value.gramItem}gr</span>
          </div>
          <div>
            <img src="./image/Summary icons3.svg" alt="" />
            <span>{value.kcalItem}kcal</span>
          </div>
        </div>
      </div>
  );
}

export default Summ;
