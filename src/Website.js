import React, { Component } from 'react';
import './css/Website.css';

import Topbar from './Topbar';
import Welcome from './Welcome';
import MyWork from './MyWork';
import Contact from './Contact';

class Website extends Component {
  render() {
    return (
      <div className="Website">
        <Topbar/>
        <Welcome/>
        <MyWork/>
        <Contact/>
      </div>
    );
  }
}

export default Website;
