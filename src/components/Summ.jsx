import React, {useContext} from 'react';
import Context from './Context';
import './Summ.scss'
import Price from './Price';
import sauce from '../assets/image/sauce.png';
import smile from '../assets/image/mini-smile.png';
import time from '../assets/image/time-icon.svg';
import grIcon from '../assets/image/gr-icon.svg';
import kcal from '../assets/image/kcal-icon.svg';

function Summ(props) {
  const{isMobile} = useContext(Context);
  const value = useContext(Context);
  let summResult = +value.summItem.toFixed(2);
  
  const addSauce = (obj) => {
    if(obj>=20) {
      return <div className='sauce'><img src={sauce} alt="sauce" /> <p>+Tomato Ketchup <span>2 gr</span></p></div>
    }
  }
  const limitBurger = (obj) => {
    if(obj>=35) {
      return <div className='limit'><img src={smile} alt="mini-smile" /><p>You are sure?</p></div>
    }
  }

    return (
      <div className="summ">
        <h2>Summary</h2>
        <hr />
        {isMobile ? null : <Price summ = {summResult} open={props.openCart}/>}
        {isMobile ? null :  <p>Build a <span>$20</span> Burger and Get a free Sauce </p>}
        
        <div className="time">
          <div>
            <img src={time} alt="" />
            <span>7 min</span>
          </div>
          <div>
            <img src={grIcon} alt="" />
            <span>{value.gramItem}gr</span>
          </div>
          <div>
            <img src={kcal} alt="" />
            <span>{value.kcalItem}kcal</span>
          </div>
        </div>

        {isMobile ? <button className='sauceMobile'>Build a<span>$20</span>Burger and Get a free Sauce</button> : null}
        {addSauce(summResult)}
        {isMobile ? null : limitBurger(summResult)}
      </div>
  );
}

export default Summ;
