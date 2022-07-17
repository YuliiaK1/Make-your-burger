import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import ScreenTwo from './components/ScreenTwo';
import Footer from './components/Footer';

export const AppContext = React.createContext({});  

function App() {
  const [summItems, setSumm] = React.useState([]);
  const [burgerItems, setBurger] = React.useState([]);
  return (
    <AppContext.Provider value={{summItems, burgerItems}}>
    <div className="wrapper">
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/constructor" element={<ScreenTwo/>}/>
          <Route path="*" element={<h3>404</h3>} />
        </Routes>
      <Footer />
    </div>
    </AppContext.Provider>
  );
}

export default App;
