import React, {useContext} from 'react';
import Context from './Context';
import './Ingredients.scss';
//const addSumm = (obj) => { let arr = obj;console.log(arr);let result = Array.from(arr).reduce((sum, obj)=>obj.price + sum, 0);console.log(result);}

function Ingredients({image, name, onPlus}) {
  const value = useContext(Context);
  let y = [];
  y.push(onPlus);
  
  const plusResult = (onPlus) => {
    let sumItems = y.map(item => item.price).reduce((a, b) => a + b);
    value.setSummItem(value.summItem+sumItems);
  };

  const minusResult = (onPlus) => {
    let sumItems = y.map(item => item.price).reduce((a, b) => a - b);
    value.setSummItem(value.summItem-sumItems);
  };

  const gramPlusResult = (onPlus) => {
    let gramItems = y.map(item => item.gram).reduce((a, b) => a + b);
    value.setGramItem(value.gramItem+gramItems);
  };

  const gramMinusResult = (onPlus) => {
    let gramItems = y.map(item => item.gram).reduce((a, b) => a - b);
    value.setGramItem(value.gramItem-gramItems);
  };

  const kcalPlusResult = (onPlus) => {
    let kcalItems = y.map(item => item.kcal).reduce((a, b) => a + b);
    value.setKcalItem(value.kcalItem+kcalItems);
  };

  const kcalMinusResult = (onPlus) => {
    let kcalItems = y.map(item => item.kcal).reduce((a, b) => a - b);
    value.setKcalItem(value.kcalItem-kcalItems);
  };

  const [count, setCount] = React.useState(0);
  const plus = () => {
    setCount(count+1);
    plusResult(onPlus);
    gramPlusResult(onPlus);
    kcalPlusResult(onPlus);
  };
  const minus = () => {
    setCount(count-1);
    minusResult(onPlus);
    gramMinusResult(onPlus);
    kcalMinusResult(onPlus);
  };


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
              <button disabled={!count} onClick={minus}>-</button>
              <p>{count}</p>
              <button disabled={count>=3} onClick={plus}>+</button>
            </div>
      </div>
      </div>
  );
}

export default Ingredients;