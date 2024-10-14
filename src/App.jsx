import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import p1 from './components/assests/p2.jpg';

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="content-container">
        <main className="main-content">
          <About />
          <Projects />
          <Contact />
        </main>
        <div className="side-image" style={{ backgroundImage: `url(${p1})` }}></div>
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()} KOTTE SRISHA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
