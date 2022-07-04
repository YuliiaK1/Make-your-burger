import React from 'react';
import './ShowIngredients.scss';
import Ingredients from './Ingredients';


const ingredients = [
    {name: 'Cutlet', image: './image/cutlet.png'},
    {name: 'Mayo',   image: './image/mayo.png'},
    {name: 'Onion',  image: './image/onion.png'},
    {name: 'Tomato', image: './image/tomatoe.png'},
    {name: 'Cheese', image: './image/cheese.png'},
    {name: 'Salad',  image: './image/salad.png'}
  ];


function ShowIngredients() {
    return (
        <div className='show-ingredients'>
            {ingredients.map((obj)=>(<Ingredients name={obj.name} image={obj.image}/> ))}
        </div>

  );
}

export default ShowIngredients;
