import React, { Component } from 'react';

import '../css/Footer.css';

import Translate from 'react-translate-component';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Container">
          <div className="Socials">
            <a href="https://www.facebook.com/rafalm99" alt="facebook"><button><img src="/images/facebook.svg"></img></button></a>
            <a href="https://twitter.com/rafalm99" alt="twitter"><button><img src="/images/twitter.svg"></img></button></a>
            <a href="https://github.com/rafalm99" alt="github"><button><img src="/images/github.svg"></img></button></a>
          </div>
          <div className="Username">/rafalm99</div>
          <Translate component="div" className="FooterCopyright" content="footer.copyright"/>
        </div>
      </div>
    );
  }
}

export default Footer;