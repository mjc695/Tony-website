import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className='text-wrapper'>
          <h1 className='djwiz'>D.J. Wiz</h1>
          <div className='smaller-text'>
            <h3 className='tonyjones'>Tony Jones</h3>
            <div className='text-info'>
              <p>Reasonable Rates For All Occassions</p>
              <p>718-753-1318</p>
            </div>
          </div>
        </div>
        <img className='tony-pic' src='https://mjc695.github.io/Tony-website/tony-pic.jpg' alt='https://mjc695.github.io/Tony-website/logo192.png' />
      </header>
    </div>
  );
}

export default App;
