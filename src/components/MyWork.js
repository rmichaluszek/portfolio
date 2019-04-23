import React, { Component } from 'react';

import '../css/MyWork.css';

import ProjectDisplay from './ProjectDisplay';

class MyWork extends Component {
  state = {
    projects: [
      { 
        title:"Portfolio", 
        technologies:['React','NodeJS','Css'], 
        coverImage:"portfolio-cover.png"
      },
      { 
        title:"Page-Notifications Website",
        technologies:['JavaScript','Css'], 
        coverImage:"page-notifications-website-cover.png"
      },
      { 
        title:"Page-NotificationsJS", 
        technologies:['JavaScript','Css'],
        coverImage:"page-notifications-cover.png"
      },
      { 
        title:"BasLinkr Mobile",
        technologies:['AndroidStudio','Gimp','JavaScript'],
        coverImage:"baslinkr-cover.png"
      },
      { 
        title:"Nul: Solve the puzzles",
        technologies:['Godot','Gimp','Inkscape'],
        coverImage:"nul-cover.png"
      },
      { 
        title:"Stellar Dust", 
        technologies:['Godot','Gimp','Inkscape'], 
        coverImage:"stellar-cover.png"
      },
    ]
  }
  render() {
    return (
      <div className="MyWork">
      <div id="mywork" className="anchor"></div>
        <div className="Container">
          <div className="Header">My work</div>

          <div className="Works-container">

            {this.state.projects.map(project => (
              <ProjectDisplay technologies={project.technologies} projectTitle={project.title} coverImage={project.coverImage}/>
            ))}

          </div>

          <center><div className="GitHubText">Some of these and other smaller projects you can find at my <a href="">GitHub</a>.</div></center>

        </div>
      </div>
    );
  }
}

export default MyWork;
