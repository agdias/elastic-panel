import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/styles/main.css'
import  Header  from './components/Header'


class App extends Component {
  render() {
    return (
      <div className="main">
         <Header />
      </div>
    );
  }
}

export default App;
