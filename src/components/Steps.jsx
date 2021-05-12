import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TeX from '../react-components/tex.jsx';
import mathsteps from 'mathsteps';

import print from '../print.js';
import Step from './Step.jsx';
import '../styles/steps.css';

export default class Steps extends Component {
  static propTypes = {
    input: PropTypes.string
  };

  isEquation(mathInput) {
    const comparators = ['<=', '>=', '=', '<', '>'];
    let isEquation = false;

    comparators.forEach(comparator => {
      if (mathInput.includes(comparator)) isEquation = true;
    });
    return isEquation;
  }

  renderSteps = (steps) => {
    const renderedSteps = steps.map(
      (step, index) => <Step step={step} key={index}/>);
    return <div>
      <div className='latex'><TeX>{print.oldNode(steps[0])}</TeX></div>
      {renderedSteps}
    </div>;
  }

  render() {
    const {input} = this.props;
    const isEquation = this.isEquation(input);
    const steps = isEquation
      ? mathsteps.solveEquation(input)
      : mathsteps.simplifyExpression(input);

    if (steps.length === 0) {
      return <div className='error'>
          No hay pasos para esta entrada :( <br/> <br/>
        Esto probablemente se deba a que: <br/>
        1. Tu novia te dejo <br/>
        2. Esto ya está simplificado / resuelto <br/>
        3. Tuvimos problemas para analizar su entrada.
      </div>;
    }

    return <div className='steps'>
      {this.renderSteps(steps)}
    </div>;
  }
}
