import './Burger.scss';
import React, {useContext} from 'react';
import Context from './Context';
import bunTop from "../assets/image/bun-topHuge.png"
import bunBottom from "../assets/image/bunHuge.png"

function Burger() {
  const { burgerItem } = useContext(Context);

    return (
      <div>
        <div className="burger">
          <div className='bunTop'><img src={bunTop} alt="bunTop" /></div>
          <div className='main'>{burgerItem.map((obj, value)=> (
            <div className={'mainBurger'} key={value} style={{zIndex: `${value+1}`}}><img src={obj.imageHuge} alt="Burger" /></div>
          ))}</div>
          <div className='bun'><img src={bunBottom} alt="bunBottom" /></div>
        </div>
      </div>
  );
}

export default Burger;