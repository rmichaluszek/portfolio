import React, { Component } from 'react';

import './css/Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div className="Container">

          <div className="Middle">
            <div className="Content">
              <div className="WelcomeHeader">Hello, I'm <b>Rafał Michałuszek</b></div>
              <div className="SmallerText">
              <p>I build responsive <b>websites</b>, easy to use <b>JS libraries</b> and also doing a bit of <b>gamedev</b>.</p>
              <p>Look below at <a href="#mywork">my work</a>, and <a href="#contact">contact me</a>. Feel free.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Welcome;
