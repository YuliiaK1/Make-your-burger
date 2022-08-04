import React from 'react';
import './ShowIngredients.scss';
import Ingredients from './Ingredients';
import { ingredients } from './InfoIngredients';

function ShowIngredients() {
    return (
        <div className='show-ingredients'>
            {ingredients.map((obj, index)=>(
            <Ingredients name={obj.name} image={obj.image} key={obj.id} onPlus={obj}/>  
            ))}
        </div>

  );
}

export default ShowIngredients;
