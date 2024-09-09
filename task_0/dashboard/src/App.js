import React from 'react';
import './App.css';
import Notifications from './Notifications';
import { getFullYear, getFooterCopy } from './utils.js';
import logo from './holberton_logo.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton logo" />
        <h1 className="App-title">
        
          School Dashboard<br /></h1>
        
      </header>
      <body>
        <div className="App-body"><p>
        <span className="line-break"></span>
          
          <Notifications />
          Login to access the full dashboard</p></div>
          <form>
            <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" placeholder="Enter your email"/>
            </div><div><label htmlFor="password">password: </label>
            <input type="password" id="password" name="password" placeholder="Enter your password"/>
          </div>
          <button type="submit">OK</button></form>
          
      </body>
      <footer className="App-footer">
        <div>
          <p className="footer-text">
            <span className="line-break"></span>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>
        </div>
        
      </footer>
    </div>

  );
}

export default App;
