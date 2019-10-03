import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <a href="">Home</a>
          <Link to='./Home.js'>Home</Link>
        </div>
        <div>
          <a href="">About</a>
          <Link to='./About.js'>About</Link>
        </div>
        <div>
          <a href="">Contact</a>
          <Link to='./Contact.js'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
