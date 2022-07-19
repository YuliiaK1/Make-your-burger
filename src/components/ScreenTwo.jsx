import './ScreenTwo.scss';
import React from 'react';
import ShowIngredients from './ShowIngredients';
import Summ from './Summ';
import Burger from './Burger';

function ScreenTwo() {
    return (
      <div>
        <div className='constructor'>
          <div className="screen-two">
            <img width={480} height={380} src="./image/bg-burger.png" alt="bc-burger" />
            <Burger/> 
          </div>
          <Summ/>
        </div>
        <div>
          <ShowIngredients/>
        </div>
      </div>
  );
}

export default ScreenTwo;