import './Burger.scss';
import React, {useContext} from 'react';
import Context from './Context';

function Burger() {
  const { burgerItem } = useContext(Context);

    return (
      <div>
        <div className="burger">
          <div className='bunTop'><img src='.\image\bun-topHuge.png' alt="bunTop" /></div>
          <div className='main'>{burgerItem.map((obj, value)=> (
            <div className={'mainBurger'} key={value} style={{zIndex: `${value+1}`}}><img src={obj.imageHuge} alt="Burger" /></div>
          ))}</div>
          <div className='bun'><img src='.\image\bunHuge.png' alt="bunBottom" /></div>
        </div>
      </div>
  );
}

export default Burger;