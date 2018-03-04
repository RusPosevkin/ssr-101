import React, { Component } from 'react';
import picturefill from 'picturefill';
import cat320 from './images/cat_320_240.jpg';
import cat640 from './images/cat_640_480.jpg';
import hatAndMonocle from './images/hat_and_monocle.svg';
import styled from 'styled-components';

const StyledHatMonocle = styled.img`
  src: url(${props => props.src});
  position: absolute;
  top: 0;
  left: 0;
  width: 340px;
`;

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
        <StyledHatMonocle
          src={hatAndMonocle}
          onClick={() => alert('Meow!')}
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
