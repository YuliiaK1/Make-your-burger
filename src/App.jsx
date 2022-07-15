import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import ScreenTwo from './components/ScreenTwo';
import Footer from './components/Footer';


function App() {
  return (
    <div className="wrapper">
      <Header/>
        <Routes>
          <Route path="/home" element={<Main/>}/>
          <Route path="/constructor" element={<ScreenTwo/>}/>
          <Route path="*" element={<h3>404</h3>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
