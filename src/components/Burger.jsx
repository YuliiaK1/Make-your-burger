import './Burger.scss';
import React, {useContext} from 'react';
import { ingredients } from './InfoIngredients';
import Context from './Context';

function Burger() {
  const { burgerItem =[], setBurgerItem } = useContext(Context);

    return (
      <div>
        <div className="burger">
          <div className='bunTop'><img src='.\image\bun-topHuge.png' alt="/" /></div>
          {burgerItem.map((obj, index)=> (
            <div className='mainBurger' key={index}><img src={obj} alt="/" /></div>
          ))}
          <div className='bun'><img src='.\image\bunHuge.png' alt="/" /></div>
        </div>
      </div>
  );
}

export default Burger;