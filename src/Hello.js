import React, { Component } from 'react';
import picturefill from 'picturefill';
import './Hello.css';
import cat320 from './images/cat_320_240.jpg';
import cat640 from './images/cat_640_480.jpg';
import hatAndMonocle from './images/hat_and_monocle.svg';

export default class Hello extends Component {
  componentDidMount() {
    picturefill();
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
      </div>
    );
  }
}
