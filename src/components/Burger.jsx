import './Burger.scss';
import React, {useContext} from 'react';
import { ingredients } from './InfoIngredients';
import Context from './Context';

function Burger() {
  const { burgerItem, setBurgerItem } = useContext(Context);
  console.log(burgerItem);

    return (
      <div>
        <div className="burger">
          <div className='bunTop'><img src='.\image\bun-topHuge.png' alt="/" /></div>
          {ingredients.map((obj, index)=> (
            <div key={index}><img src={burgerItem} alt="/" /></div>
          ))}
          <div className='bun'><img src='.\image\bunHuge.png' alt="/" /></div>
        </div>
      </div>
  );
}

export default Burger;