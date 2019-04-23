import React, { Component } from 'react';
import './css/Website.css';


import Topbar from './components/Topbar';
import Welcome from './components/Welcome';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

import counterpart from 'counterpart';

counterpart.registerTranslations('en', require('./languages/en.json'));
counterpart.setLocale('en');

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