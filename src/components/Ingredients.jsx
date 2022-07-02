import './Ingredients.scss';


function Ingredients(props) {
    return (
      <div className="ingredients">
        <div className="ingr-card">
            <div className="image-ingr">
              <img src={props.image} alt="cotlet" />
            </div>
            <div className="name-ingr">
              <p>{props.name}</p>
            </div>
            <div className="counter">
              <button>-</button>
              <p>0</p>
              <button>+</button>
            </div>
      </div>
      </div>
  );
}

export default Ingredients;