import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import ScreenOne from './components/ScreenOne';
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

const mmm = <div className='ingredients'>{ingredients.map((obj)=>(<Ingredients name={obj.name} image={obj.image}/> ))}</div>;

function App() {
  const[openConstructor, setOpenConstructor] = React.useState(true);
  return (
    <div className="wrapper">
      <Header onClickMake={() => setOpenConstructor(false)} onClickDiscover={() => setOpenConstructor(true)}/>
      <div className="main-section">
          <Main />
          {openConstructor?<Section onClickMake={() => setOpenConstructor(false)} />:<ScreenOne/>};
      </div>
          {openConstructor? null : mmm};
      <Footer />
    </div>
  );
}

export default App;
