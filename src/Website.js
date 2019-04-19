import React, { Component } from 'react';
import './css/Website.css';

import Topbar from './Topbar';
import Welcome from './Welcome';
import MyWork from './MyWork';
import Contact from './Contact';
import Footer from './Footer';

class Website extends Component {
  render() {
    return (
      <div className="Website">
        <Topbar/>
        <Welcome/>
        <MyWork/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default Website;
