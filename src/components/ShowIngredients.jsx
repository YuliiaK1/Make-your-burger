import React from 'react';
import './ShowIngredients.scss';
import Ingredients from './Ingredients';
import { ingredients } from './InfoIngredients';

  const addBurger = (obj) => {
  //setItems(prev=>[...prev, obg.image]); 
    let arr = obj;
    console.log(arr);
    let result = Array.from(arr).reduce((sum, obj)=>obj.price + sum, 0);
    console.log(result);
  }

function ShowIngredients() {
    return (
        <div className='show-ingredients'>
            {ingredients.map((obj, index)=>(
            <Ingredients name={obj.name} image={obj.image} key={index} onPlus={()=>addBurger(obj)}/> 
            ))}
        </div>

  );
}

export default ShowIngredients;
