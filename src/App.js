import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header'
import React from 'react';
import Meals from './Components/Meals/Meals'

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Meals/>
    </React.Fragment>
  );
}

export default App;