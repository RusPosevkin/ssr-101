import React, { Component } from 'react';
import picturefill from 'picturefill';

export default class Hello extends Component {
  componentDidMount() {
    picturefill();
  }

  render() {
    return (
      <img
        onClick={() => alert('Meow!')}
        src='https://loremflickr.com/320/240?lock=12'
        srcSet='https://loremflickr.com/640/480?lock=12 2x'
        alt='Kitten'
      />
    );
  }
}
