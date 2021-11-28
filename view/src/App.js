import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h1 className="logo"><a href="/index">Mikal Young</a></h1>
        <ul id="links">
            <li><button id="link0" >Home</button></li>
            <li><button id="link1" >About Me</button></li>
            <li><button id="link2" >Projects</button></li>
            <li><button id="link3" >Contact Me</button></li>
        </ul>
      </header>
      <About />
      <Projects />
    </div>
  );
}

export default App;
