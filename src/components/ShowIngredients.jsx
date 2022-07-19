import React from 'react';
import './ShowIngredients.scss';
import Ingredients from './Ingredients';
import { ingredients } from './InfoIngredients';

  //const addBurger = (obj) => {
  //setItems(prev=>[...prev, obg.image]); 
   //let result = Array.from(arr).reduce((sum, obj)=>obj.price + sum, 0);

function ShowIngredients() {
    return (
        <div className='show-ingredients'>
            {ingredients.map((obj, index)=>(
            <Ingredients name={obj.name} image={obj.image} key={index} onPlus={obj}/>   //onPlus={()=>addBurger(obj)}
            ))}
        </div>

  );
}

export default ShowIngredients;
