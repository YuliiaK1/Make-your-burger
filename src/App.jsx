import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import ScreenOne from './components/ScreenOne';
import Footer from './components/Footer';


function App() {
  const[openConstructor, setOpenConstructor] = React.useState(false);
  return (
    <div className="wrapper">
      <Header/>
        <Routes>
          <Route path="/home" element={<Main/>}/>
          <Route path="/constructor" element={<ScreenOne/>}/>
          <Route path="*" element={<h3>404</h3>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
