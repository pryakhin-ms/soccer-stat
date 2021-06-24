import React, { Component } from 'react';
import Navbar from './Navbar';
import ContentPad from './ContentPad';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ContentPad />
      </>
    );
  }
}
