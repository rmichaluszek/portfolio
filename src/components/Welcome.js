import React, { Component } from 'react';

import '../css/Welcome.css';

import Translate from 'react-translate-component';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div className="Container">

          <div className="Middle">
            <div className="Content">
              <Translate component="div" unsafe={true} content="welcome.header" className="WelcomeHeader"/>
              <Translate component="div" unsafe={true} content="welcome.smallerText" className="SmallerText"/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Welcome;
