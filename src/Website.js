import React, { Component } from 'react';
import './css/Website.css';

import Topbar from './components/Topbar';
import Welcome from './components/Welcome';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectFullScreen from './components/ProjectFullScreen';

import counterpart from 'counterpart';

counterpart.registerTranslations('en', require('./languages/en.json'));
counterpart.registerTranslations('pl', require('./languages/pl.json'));

class Website extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      language: localStorage.getItem('lang'),
      currentProject: {
        title: "",
        description: "",
        technologies: [],
        links: [],
        screenshots: []
      }
    }
    this.changeLanguage = (lang) => {
      this.setState({language: lang});
      counterpart.setLocale(lang);
      localStorage.setItem('lang',lang);
    }

    this.onProjectFullScreenClose = () => {
      this.hideFullScreenProject(0)
    }
    this.hideFullScreenProject = () => {
      document.body.className = "";
      document.body.style.right = "0px";
      this.refs.ProjectFullScreenDisplay.unlockScreen();
    }
    this.showFullScreenProject = (project) => {
      this.setState({currentProject: project});
      var scrollDiv = document.createElement("div");
      scrollDiv.className = "scrollbar-measure";
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);

      this.refs.ProjectFullScreenDisplay.lockScreen();
      document.body.className = "ProjectFullScreenActive";
      document.body.style.right = Math.floor(scrollbarWidth/2)+"px";
    }

    if(this.state.language) this.changeLanguage(this.state.language);
    else {
      this.setState({'language':'pl'});
      this.changeLanguage('pl');
    }
  }

  render() {
    return (
      <div ref={"Website"} className="Website">
        <Topbar language={this.state.language} changeLanguage={this.changeLanguage}/>
        <Welcome/>
        <MyWork showProject={this.showFullScreenProject}/>
        <Contact/>
        <Footer/>
        <ProjectFullScreen onClose={this.onProjectFullScreenClose} ref="ProjectFullScreenDisplay" project={this.state.currentProject}/>
      </div>
    );
  }
}

export default Website;