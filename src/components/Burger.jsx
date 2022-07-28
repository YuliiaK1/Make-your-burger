import './Burger.scss';
import React, {useContext} from 'react';
import { ingredients } from './InfoIngredients';
import Context from './Context';

function Burger() {
  const { burgerItem =[], setBurgerItem } = useContext(Context);

    return (
      <div>
        <div className="burger">
          <div className='bunTop'><img src='.\image\bun-topHuge.png' alt="bunTop" /></div>
          <div className='main'>{burgerItem.map((obj, index)=> (
            <div className='mainBurger' key={index} style={{zIndex: `${index+1}`}}><img src={obj} alt="Burger" /></div>
          ))}</div>
          <div className='bun'><img src='.\image\bunHuge.png' alt="bunBottom" /></div>
        </div>
      </div>
  );
}

export default Burger;