import React, { Component } from 'react';

import '../css/Footer.css';

import Translate from 'react-translate-component';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Container">
          <div className="Socials">
            <a href="" alt="facebook"><button><img src="icons/facebook.svg"></img></button></a>
            <a href="" alt="facebook"><button><img src="icons/twitter.svg"></img></button></a>
            <a href="" alt="facebook"><button><img src="icons/github.svg"></img></button></a>
          </div>
          <div className="Username">/rafalm99</div>
          <Translate component="div" className="FooterCopyright" content="footer.copyright"/>
        </div>
      </div>
    );
  }
}

export default Footer;