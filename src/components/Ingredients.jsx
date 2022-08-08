import React, {useContext} from 'react';
import Context from './Context';
import './Ingredients.scss';

function Ingredients({image, name, ingredient, value}) {
  const {summItem, setSummItem, gramItem, setGramItem, kcalItem, setKcalItem, burgerItem, setBurgerItem } = useContext(Context);
  let arrIngredient = [];
  arrIngredient.push(ingredient);

  const addIngredient = (ingredient) => {
    setBurgerItem([...burgerItem, {...ingredient, unicId: Date.now()}]);
  }
  const deleteIngredient = (value) => {
    setBurgerItem((prev)=>prev.filter((item) => item.unicId !== value));
  }
  
  const plus = () => {
    addIngredient(ingredient);
    setSummItem(summItem+arrIngredient.map(item => item.price).reduce((a, b) => a + b));
    setGramItem(gramItem+arrIngredient.map(item => item.gram).reduce((a, b) => a + b));
    setKcalItem(kcalItem+arrIngredient.map(item => item.kcal).reduce((a, b) => a + b));
  };
  const minus = () => {
    deleteIngredient(burgerItem.find((ingredient) => ingredient.id === value).unicId); 
    setSummItem(summItem-arrIngredient.map(item => item.price).reduce((a, b) => a - b));
    setGramItem(gramItem-arrIngredient.map(item => item.gram).reduce((a, b) => a - b));
    setKcalItem(kcalItem-arrIngredient.map(item => item.kcal).reduce((a, b) => a - b));
  };

  let count = burgerItem.filter(item => item.id === value).length;

    return (
      <div className="ingredients">
        <div className="ingr-card">
            <div className="image-ingr">
              <img src={image} alt="cotlet" /> 
            </div>
            <div className="name-ingr">
              <p>{name}</p>
            </div>
            <div className="counter">
              <button disabled={count<=0} onClick={minus}>-</button>
              <p>{count}</p>
              <button disabled={count>=3} onClick={plus}>+</button>
            </div>
      </div>
      </div>
  );
}

export default Ingredients;