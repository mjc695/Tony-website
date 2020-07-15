import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar'
import { MobileView, BrowserView, isBrowser } from 'react-device-detect'

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
          <div className={isBrowser && 'browser-pic'}>
            <BrowserView>
              <img className='tony-pic-browser' src='https://mjc695.github.io/Tony-website/tony-pic-dj.jpeg' alt='https://mjc695.github.io/Tony-website/logo192.png' />
            </BrowserView>
            <div className='smaller-text'>
              <h3 className='tonyjones'>Tony Jones</h3>
              <div className='text-info'>
                <p>Reasonable Rates For All Occassions</p>
                <p className='phone-number'>Phone Number: 718-753-1318</p>
              </div>
            </div>
          </div>
        </div>
        <MobileView>
          <img className='tony-pic-mobile' src='https://mjc695.github.io/Tony-website/tony-pic-dj.jpeg' alt='https://mjc695.github.io/Tony-website/logo192.png' />
        </MobileView>
      </header>
    </div>
  );
}

export default App;
