import './Burger.scss';
import { ingredients } from './InfoIngredients';

function Burger() {
    return (
      <div>
        <div className="burger">
          {ingredients.map((obj, index)=> (
            <div key={index}><img src={obj.imageHuge} alt="/" /></div>
          ))}
        </div>
      </div>
  );
}

export default Burger;