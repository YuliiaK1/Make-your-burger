import Header from './components/Header';
import Main from './components/Main';
import Ingredients from './components/Ingredients';
import Footer from './components/Footer';


const ingredients = [
  {name: 'Cutlet', image: './image/cutlet.png'},
  {name: 'Mayo',   image: './image/mayo.png'},
  {name: 'Onion',  image: './image/onion.png'},
  {name: 'Tomato', image: './image/tomatoe.png'},
  {name: 'Cheese', image: './image/cheese.png'},
  {name: 'Salad',  image: './image/salad.png'}
];

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Main />
      <div className='ingredients'>
          {ingredients.map((obj)=>(
          <Ingredients name={obj.name} image={obj.image}/>
           ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
