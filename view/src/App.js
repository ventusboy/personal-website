import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import React from 'react';
import './assets/css/main1.scss'
import { useState } from 'react';

function App() {
  
  // function toggleMenu() {
  const [ toggleMenu, setToggleMenu ] = useState(false)
  // }
  function animate () {
    return toggleMenu ? 'slide-left' : 'slide-right';
  }
  function goTo (page) {
    window.location.href=`#page${page}`
    setToggleMenu(false)
  }

  return (
    <div className="App">
      <header className="navbar">
        <h1 className="logo"><a href="/index">Mikal Young</a></h1>
        <ul id="links">
          <li><button id="link0" >Home</button></li>
          <li><button id="link1" >About Me</button></li>
          <li><button id="link2" >Projects</button></li>
        </ul>
        <div className={'toggle ' + (toggleMenu ? 'toggle-active' : '')} onClick={() => {setToggleMenu(!toggleMenu)}}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id='mobile-links' className={animate()}>
          <ul>
            <li><button id="link0" onClick={() => { goTo(1) }}>Home</button></li>
            <li><button id="link1" onClick={() => { goTo(2) }}>About Me</button></li>
            <li><button id="link2" onClick={() => { goTo(3) }}>Projects</button></li>
          </ul>
        </div>
      </header>
      <div id='pages'>
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
