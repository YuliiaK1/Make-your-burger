import React, {useContext} from 'react';
import Context from './Context';
import './Ingredients.scss';

function Ingredients({image, name, onPlus}) {
  const {summItem, setSummItem, gramItem, setGramItem, kcalItem, setKcalItem, burgerItem = [], setBurgerItem } = useContext(Context);
  let arrayOnPlus = [];
  arrayOnPlus.push(onPlus);

  const view = (onPlus) => {
    setBurgerItem([...burgerItem, onPlus.imageHuge]);
  }
  // setBurgerItem((prev)=>prev.filter((item, index) => prev.indexOf(item) != index));
  const closeView = (onPlus) => {
    setBurgerItem((prev)=>prev.filter((item) => item != onPlus.imageHuge));
  }
  
  const plusResult = (onPlus) => {
    let sumItems = arrayOnPlus.map(item => item.price).reduce((a, b) => a + b);
    setSummItem(summItem+sumItems);
  };

  const minusResult = (onPlus) => {
    let sumItems = arrayOnPlus.map(item => item.price).reduce((a, b) => a - b);
    setSummItem(summItem-sumItems);
  };

  const gramPlusResult = (onPlus) => {
    let gramItems = arrayOnPlus.map(item => item.gram).reduce((a, b) => a + b);
    setGramItem(gramItem+gramItems);
  };

  const gramMinusResult = (onPlus) => {
    let gramItems = arrayOnPlus.map(item => item.gram).reduce((a, b) => a - b);
    setGramItem(gramItem-gramItems);
  };

  const kcalPlusResult = (onPlus) => {
    let kcalItems = arrayOnPlus.map(item => item.kcal).reduce((a, b) => a + b);
    setKcalItem(kcalItem+kcalItems);
  };

  const kcalMinusResult = (onPlus) => {
    let kcalItems = arrayOnPlus.map(item => item.kcal).reduce((a, b) => a - b);
    setKcalItem(kcalItem-kcalItems);
  };

  const [count, setCount] = React.useState(0);
  const plus = () => {
    setCount(count+1);
    plusResult(onPlus);
    gramPlusResult(onPlus);
    kcalPlusResult(onPlus);
    view(onPlus);
  };
  const minus = () => {
    setCount(count-1);
    minusResult(onPlus);
    gramMinusResult(onPlus);
    kcalMinusResult(onPlus);
    closeView(onPlus); 
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