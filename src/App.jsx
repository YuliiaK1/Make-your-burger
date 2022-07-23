import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import ScreenTwo from './components/ScreenTwo';
import Footer from './components/Footer';
import Context from './components/Context';

function App() {
  const [summItem, setSummItem] = React.useState(0);
  const [gramItem, setGramItem] = React.useState(20);
  const [kcalItem, setKcalItem] = React.useState(80);
  const [burgerItem, setBurgerItem] = React.useState([]);
  return (
    <Context.Provider value={{summItem, setSummItem, gramItem, setGramItem, kcalItem, setKcalItem, burgerItem, setBurgerItem}}>
    <div className="wrapper">
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/constructor" element={<ScreenTwo/>}/>
          <Route path="*" element={<h3>404</h3>} />
        </Routes>
      <Footer />
    </div>
    </Context.Provider>
  );
}

export default App;
