import React, { Component } from 'react';

import '../css/ProjectFullScreen.css';

class ProjectFullScreen extends Component {
  state = {
    show: false
  }
  lockScreen = () => {
    this.setState({'show':true});
  }

  render() {
    return (
      <div className={this.state.show? "ProjectFullScreen ProjectFullScreenShow":"ProjectFullScreen"}>
      
          <div className={this.state.show?"ProjectFullScreenPanel ProjectFullScreenPanelShow":"ProjectFullScreenPanel"}>

              <div className="ProjectFullScreenTopbar">
                  sdasdas
                  {this.props.project.title}
              </div>

          </div>

      </div>
    );
  }
}

export default ProjectFullScreen;
