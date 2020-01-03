import React from 'react';
import './App.scss';
import Navbar from './components/Nav/Navbar';


const pages=['home', 'about'];
function App() {
  return (
    <div className="container">
      <Navbar pages={pages} />
      <header>Welcome to YAAS!</header>
      
    </div>
  );
}

export default App;
