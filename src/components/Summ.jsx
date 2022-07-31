import React, {useContext} from 'react';
import Context from './Context';
import './Summ.scss'

function Summ(props) {
  console.log(props);
  const value = useContext(Context);
  let conditional = +value.summItem.toFixed(2);
  
  const addSauce = (obj) => {
    if(obj>=20) {
      return <div className='sauce'><img src="../image/sauce.png" alt="sauce" /> <p>+Tomato Ketchup <span>2 gr</span></p></div>
    }
  }
  const limitBurger = (obj) => {
    if(obj>=35) {
      return <div className='limit'><img src="../image/mini-smile.png" alt="mini-smile" /><p>You are sure?</p></div>
    }
  }

    return (
      <div className="summ">
        <h2>Summary</h2>
        <hr />
        <div className="price">
          <p>${conditional || 0}</p>
          <button onClick={props.openCart}>Checkout</button>
        </div>
        <p>Build a <span>$20</span> Burger and Get a free Sauce </p>
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
        {addSauce(conditional)}
        {limitBurger(conditional)}
      </div>
  );
}

export default Summ;
