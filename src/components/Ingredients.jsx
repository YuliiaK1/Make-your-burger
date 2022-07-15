import React from 'react';
import './Ingredients.scss';

function Ingredients({image, name, onPlus}) {
  const [count, setCount] = React.useState(0);
  
  const plus = () => {
    setCount(count+1);
    onPlus();
  };

  const minus = () => {
    setCount(count-1);
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