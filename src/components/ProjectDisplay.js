import React, { Component } from 'react';

import '../css/ProjectDisplay.css';

class ProjectDisplay extends Component {
  
  onClick = () => {
    this.props.onClick(this.props.index);
  }
  render() {
    return (
      <div onClick={this.onClick} className="ProjectDisplay">
          <div className="ProjectDisplayContent">
              <div className="ProjectDisplayTopbar">
                {this.props.projectTitle}
                <div className="Technologies">

                  {this.props.technologies.map(technology => (
                      <div className="Technology">
                        <img title={technology} alt={technology} src={"/images/"+technology+".svg"}></img>
                      </div>
                  ))}

                </div>
              </div>
              <img src={"images/"+this.props.coverImage}></img>
          </div>
      </div>
    );
  }
}

export default ProjectDisplay;
