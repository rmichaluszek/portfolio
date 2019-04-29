import React, { Component } from 'react';

import '../css/MyWork.css';

import Translate from 'react-translate-component';

import ProjectDisplay from './ProjectDisplay';

class MyWork extends Component {
  state = {
    projects: require('../projects/projects.json')
  }
  
  onProjectPressed = (index) => {
    this.props.showProject(this.state.projects[index]);
  }
  render() {
    return (
      <div className="MyWork">
      <div id="mywork" className="anchor"></div>
        <div className="Container">
          <Translate content="mywork.header" className="Header"/>

          <div className="Works-container">

            {this.state.projects.map((project,index) => (
              <ProjectDisplay onClick={this.onProjectPressed} index={index} technologies={project.technologies} projectTitle={project.title} coverImage={project.coverImage}/>
            ))}

          </div>

          <center><Translate className="GitHubText" content="mywork.githubText" component="div" unsafe={true} /></center>

        </div>
      </div>
    );
  }
}

export default MyWork;
