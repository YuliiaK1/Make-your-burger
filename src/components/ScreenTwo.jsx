import './ScreenTwo.scss';
import { useContext } from 'react';
import Context from './Context';
import React from 'react';
import ShowIngredients from './ShowIngredients';
import Summ from './Summ';
import Burger from './Burger';
import Price from './Price';
import { useMediaQuery } from 'react-responsive'

function ScreenTwo(props) {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
  const { setCartOpened, summItem } = useContext(Context);
    return (
      <div>
        <div className='constructor'>
          <div className="screen-two">
            <img width={480} height={380} src="./image/bg-burger.png" alt="bc-burger" />
            <Burger/> 
          </div>
          <Summ openCart={props.onClickCart}/>
        </div>
        <div>
          <ShowIngredients/>
          {isMobile && <Price summ={+summItem.toFixed(2)} open={()=>setCartOpened(true)}/>}
        </div>
      </div>
  );
}

export default ScreenTwo;