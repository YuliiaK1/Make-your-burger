import React from 'react';
import './ShowIngredients.scss';
import Ingredients from './Ingredients';
import { ingredients } from './InfoIngredients';

function ShowIngredients() {
    return (
        <div className='show-ingredients'>
            {ingredients.map((obj)=>(
            <Ingredients name={obj.name} image={obj.image} key={obj.id} ingredient={obj} value={obj.id}/>  
            ))}
        </div>

  );
}

export default ShowIngredients;
