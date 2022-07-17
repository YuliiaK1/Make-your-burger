import './ScreenTwo.scss';
import React from 'react';
import ShowIngredients from './ShowIngredients';
import Summ from './Summ';
import Burger from './Burger';
import {AppContext} from '../App'

function ScreenTwo() {
  const {burgerItems, summItems} = React.useContext(AppContext);
    return (
      <div>
        <div className='constructor'>
          <div className="screen-two">
            <img width={480} height={380} src="./image/bg-burger.png" alt="bc-burger" />
            <Burger items={burgerItems}/> 
          </div>
          <Summ price={11}/>
        </div>
        <div>
          <ShowIngredients/>
        </div>
      </div>
  );
}

export default ScreenTwo;