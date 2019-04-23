import React, { Component } from 'react';
import '../css/Topbar.css';

import Translate from 'react-translate-component';

import Logo from './Logo';

class Topbar extends Component {
  render() {
    return (
      <div className="Topbar">
        <div className="Container">
          <Logo/>
          <div className="Links">
            <Translate content="topbar.title" component="a" href="#"/>
            <Translate content="topbar.mywork" component="a" href="#mywork"/>
            <Translate content="topbar.contact" component="a" href="#contact"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
