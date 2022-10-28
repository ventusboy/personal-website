import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import React from 'react';
import BackGround from './components/BackGround'
import './assets/css/main.scss'
import { useState } from 'react';

function App() {

  const [toggleMenu, setToggleMenu] = useState(false)

  function animate() {
    return toggleMenu ? 'slide-left' : 'slide-right';
  }
  function goTo(page) {
    // window.location.href=`#page${page}`
    var pageAnchor = document.getElementById(`page${page}`)
    pageAnchor.scrollIntoView()
    setToggleMenu(false)
  }

  return (
    <div className="App">
      <BackGround />
      <div className="navbar">
        <h1 className="logo"><a href="/index">Mikal Young</a></h1>
        <ul id="links">
          <li><button onClick={() => { goTo(1) }}>Home</button></li>
          <li><button onClick={() => { goTo(2) }}>About Me</button></li>
          <li><button onClick={() => { goTo(3) }} >Projects</button></li>
        </ul>
        {/*<div id='mobile-toggle'>
          <div className={'toggle ' + (toggleMenu ? 'toggle-active' : '')} onClick={() => { setToggleMenu(!toggleMenu) }}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div id='mobile-links' className={animate()}>
            <ul>
              <li><button onClick={() => { goTo(1) }}>Home</button></li>
              <li><button onClick={() => { goTo(2) }}>About Me</button></li>
              <li><button onClick={() => { goTo(3) }}>Projects</button></li>
            </ul>
          </div>
        </div>*/}

      </div>
      <div id='pages'>
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
