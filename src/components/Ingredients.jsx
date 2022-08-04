import React, {useContext, useEffect} from 'react';
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
    setBurgerItem((prev)=>prev.filter((item) => item !== onPlus.imageHuge));
  }
  
  const plusResult = () => {
    let sumItems = arrayOnPlus.map(item => item.price).reduce((a, b) => a + b);
    setSummItem(summItem+sumItems);
  };

  const minusResult = () => {
    let sumItems = arrayOnPlus.map(item => item.price).reduce((a, b) => a - b);
    setSummItem(summItem-sumItems);
  };

  const gramPlusResult = () => {
    let gramItems = arrayOnPlus.map(item => item.gram).reduce((a, b) => a + b);
    setGramItem(gramItem+gramItems);
  };

  const gramMinusResult = () => {
    let gramItems = arrayOnPlus.map(item => item.gram).reduce((a, b) => a - b);
    setGramItem(gramItem-gramItems);
  };

  const kcalPlusResult = () => {
    let kcalItems = arrayOnPlus.map(item => item.kcal).reduce((a, b) => a + b);
    setKcalItem(kcalItem+kcalItems);
  };

  const kcalMinusResult = () => {
    let kcalItems = arrayOnPlus.map(item => item.kcal).reduce((a, b) => a - b);
    setKcalItem(kcalItem-kcalItems);
  };
  
  let burgerSetting = {"Cutlet":0, "Mayo":0, "Onion":0, "Tomato":0, "Cucumber":0, "Cheese":0, "Salad":0};
  const getFromStorage = () => { 
    const storage = window.localStorage.getItem('burgerSetting[name]');
    return storage !== null ? parseInt(storage) : 0;
    };
    const [count, setCount] = React.useState(getFromStorage);
    useEffect(
        () => window.localStorage.setItem('burgerSetting[name]', count),
        [count]
    );

  const plus = () => {
    setCount(count => count + 1);
    plusResult(onPlus);
    gramPlusResult(onPlus);
    kcalPlusResult(onPlus);
    view(onPlus);
  };
  const minus = () => {
    setCount(count => count - 1);
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