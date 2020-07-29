import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Index';
import Routes from './appRouters/Index';
import Footer from './components/Footer/Index';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;






