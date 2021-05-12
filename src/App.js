import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import logo from './logo.png';
import Demo from './components/Demo.jsx'
import './styles/App.css';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <div className='App'>
          <div className='App-header'>
             <h2>EasyMath</h2>
          
          </div>
          <Demo/>
         </div>
      </MuiThemeProvider>
    );
  }
}
