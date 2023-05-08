// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  // a = 'Himank';
  render() {
    return (
      <div>
        {/* Hello {this.a} */}
        <Navbar/>
        <News pageSize={6} country='in' category=""/>
      </div>
    )
  }
}

