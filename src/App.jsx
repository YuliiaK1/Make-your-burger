import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import ScreenTwo from './components/ScreenTwo';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Context from './components/Context';
import MobileHeader from './componentsMobile/MobileHeader';
import { useMediaQuery } from 'react-responsive'

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
  const [summItem, setSummItem] = React.useState(0);
  const [gramItem, setGramItem] = React.useState(20);
  const [kcalItem, setKcalItem] = React.useState(80);
  const [burgerItem, setBurgerItem] = React.useState([]);
  const [callbackOn, setCallbackOn] = React.useState(false)
  const [cartOpened, setCartOpened] = React.useState(false);
  return (
    <Context.Provider value={{summItem, setSummItem, gramItem, setGramItem, kcalItem, setKcalItem, burgerItem, setBurgerItem, isMobile, callbackOn, setCallbackOn, setCartOpened}}>
    <div className="wrapper">
      {isMobile ? <MobileHeader/> : <Header/>}
      {cartOpened && <Modal onClickCart={()=>setCartOpened(false)}/>}
        <Routes>
          <Route path="/Make-your-burger" element={<Main/>}/>
          <Route path="/constructor" element={<ScreenTwo onClickCart={()=>setCartOpened(true)}/>}/>
          <Route path="*" element={<h3>404</h3>} />
        </Routes>
        {!isMobile ? <Footer/> : null}
    </div>
    </Context.Provider>
  );
}

export default App;

//{cartOpened ? <Modal/> : null}