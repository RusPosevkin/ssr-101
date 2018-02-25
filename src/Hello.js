import React, { Component } from 'react';
import picturefill from 'picturefill';
import './Hello.css';
import cat320 from './images/cat_320_240.jpg';
import cat640 from './images/cat_640_480.jpg';
import hatAndMonocle from './images/hat_and_monocle.svg';

export default class Hello extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      disableInputs: true
    };

    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    picturefill();
    this.setState({ disableInputs: false });
  }

  handleInput(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div>
        <img
          src={cat320}
          srcSet={`${cat640} 2x`}
          alt='Kitten'
        />
        <img
          src={hatAndMonocle}
          onClick={() => alert('Meow!')}
          className='Hello__hat-monocle'
        />
        <form>
          <input
            value={this.state.inputValue}
            onChange={this.handleInput}
            disabled={this.state.disableInputs}
          />
        </form>
      </div>
    );
  }
}
