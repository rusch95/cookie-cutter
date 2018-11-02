import React, { Component } from 'react';
import './app.css';

import AppBar from './AppBar';
import SearchBar from './SearchBar';


// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <SearchBar />
      </div>
    );
  }
}
