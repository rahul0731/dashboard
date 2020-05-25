import React, { Component } from 'react';
import '../App.css';
import Navigation from './nav';
import Monitoring from './value1';
import Buttons from './buttons';
import GAUGES from './gauge';

class display extends Component {
  render() {
    return (
      <div className="App" style={{background:'black'}}>
        <header className="">
          <Navigation/>
        </header>
        <div className="container  my-sm-auto  my-md-auto">
        <div className="row justify-content-center">
          <div className="col-md-8">
          <Monitoring/>
          </div>
          <div className="col-md-3 mt-sm-5">
          <GAUGES/>
          </div>
        </div>
        </div>
        <footer >
             <Buttons />
        </footer>
        </div>
    );
  }
}

export default display;
