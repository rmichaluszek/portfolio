import React, { Component } from 'react';
import './css/Topbar.css';

import Logo from './Logo';

class Topbar extends Component {
  render() {
    return (
      <div className="Topbar">
        <div className="Container">
          <Logo/>
          <div className="Links">
          
            <a href="#ssss" className="Link">sssss</a>
            <a href="#mywork" className="Link">My work</a>
            <a href="#contact" className="Link">Contact</a>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
