import React from 'react';
import './Main.scss';
import Section from './Section';


function Main() {
    return (
      <div className="main-section">
        <div className='main'>
          <h1>Make Your Burger</h1>
        </div>
        <div>
          <Section/>
        </div>
      </div>
  );
}

export default Main;
