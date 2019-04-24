import React, { Component } from 'react';
import './css/Website.css';


import Topbar from './components/Topbar';
import Welcome from './components/Welcome';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

import counterpart from 'counterpart';

counterpart.registerTranslations('en', require('./languages/en.json'));
counterpart.registerTranslations('pl', require('./languages/pl.json'));

class Website extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      language: "pl"
    }
    this.changeLanguage = (lang) => {
      this.setState({language: lang});
      counterpart.setLocale(lang);
    }
    this.changeLanguage(this.state.language);
  }

  render() {
    return (
      <div className="Website">
        <Topbar language={this.state.language} changeLanguage={this.changeLanguage}/>
        <Welcome/>
        <MyWork/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default Website;