import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h1 class="logo"><a href="/index">Mikal Young</a></h1>
        <ul id="links">
            <li><a id="link0">Home</a></li>
            <li><a id="link1">About Me</a></li>
            <li><a id="link2">Projects</a></li>
            <li><a id="link3">Contact Me</a></li>
        </ul>
      </header>
      <About />
      <Projects />
    </div>
  );
}

export default App;
