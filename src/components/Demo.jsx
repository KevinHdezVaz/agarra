import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

import Steps from './Steps.jsx';
import '../styles/demo.css';

export default class App extends Component {
 
  state = {
    mathString: ''
  };

  onMathStringChange = (_, newValue) => {
    this.setState({
      mathString: newValue
    });
  }

  componentDidMount(){
    this.nameInput.focus();
  }
 
  render() {
    // TODO: render input in tex as it's being drawn
    return <div className='demo'>
      <div className='input'>
        <span className='yourInput'>
          Entrada de datos:
        </span>
        <TextField
          name='mathString'
          value={this.state.mathString}
          ref={this.myRef}
          hintText='Ingresa la ecuación a realizar'
          ref={(input) => { this.nameInput = input; }} 
          onChange={this.onMathStringChange}
          underlineFocusStyle={{borderColor: '#1d84ff'}}
        />
      </div>
      <div className="stepsTitle">Pasos</div>
      <Steps input={this.state.mathString}/>
    </div>;
  }
}
