import React, { Component } from 'react';
import '../css/Topbar.css';

import Translate from 'react-translate-component';

import Logo from './Logo';

class Topbar extends Component {

  state = {
      mobileMenuToggled: false
  }

  onLanguageChange = (e) => {
      this.props.changeLanguage(e.target.value);
  }

  toggleMobileMenu = (e) => {
      var isMenuShown = !this.state.mobileMenuToggled;
      this.setState({'mobileMenuToggled':isMenuShown});
  }

  render() {
    return (
      <div className="Topbar">
        <div className="Container">
          <Logo/>
          <div onClick={this.toggleMobileMenu} className={this.state.mobileMenuToggled ? 'MenuButton MenuButtonActive': 'MenuButton'}>&#9776;</div>
          <div className={this.state.mobileMenuToggled ? 'Links MenuShown': 'Links'}>
            <Translate content="topbar.title" component="a" href="#"/>
            <Translate content="topbar.mywork" component="a" href="#mywork"/>
            <Translate content="topbar.contact" component="a" href="#contact"/>
            <select value={this.props.language} onChange={this.onLanguageChange}>
              <option value="en">English</option>
              <option value="pl">Polski</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
