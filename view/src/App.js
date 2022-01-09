import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import React from 'react';
import './assets/css/main1.scss'

function App() {
  
  function toggleMenu() {
    
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
        <div className='toggle' onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id='mobile-links'>
          <ul>
            <li><button id="link0" >Home</button></li>
            <li><button id="link1" >About Me</button></li>
            <li><button id="link2" >Projects</button></li>
          </ul>
        </div>
      </header>
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
