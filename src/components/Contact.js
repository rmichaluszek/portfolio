import React, { Component } from 'react';

import '../css/Contact.css';

import Translate from 'react-translate-component';
import counterpart from 'counterpart';

import axios from 'axios'; // to send the mail and receive status

class Contact extends Component {

  state = {
    name: "",
    email: "",
    title: "",
    content: ""
  }

  updateName = (e) => {
    this.setState({name:e.target.value});
  }
  updateEmail = (e) => {
    this.setState({email:e.target.value});
  }
  updateTitle = (e) => {
    this.setState({title:e.target.value});
  }
  updateContent = (e) => {
    this.setState({content:e.target.value});
  }

  sendMail = (e) => {
    var button = e.target;
    button.disabled = true;
    axios.get('https://rafalm.com/mail/sendMail.php?email='+this.state.email+"&name="+this.state.name+"&title="+this.state.title+"&content="+this.state.content)
    .then(response => {
      if(response.data.success) {
        button.innerHTML = counterpart.translate('contact.messageSent');
        return;
      } else {
        button.innerHTML = counterpart.translate('contact.messageError');
      }
    });
  }
  render() {
    return (
      <div className="Contact">
        <div id="contact" className="anchor"></div>
        <div className="Container">

          <Translate content="contact.header" unsafe={true} component="div" className="Header"/>
          <Translate content="contact.contactTitle" unsafe={true} component="div" className="ContactTitle"/>

          <div className="ContactContainer">

              <div className="Form">

                <label>
                  <Translate content="contact.name" component="div"/>
                  <Translate onChange={this.updateName} name="name" component="input" attributes={{placeholder: 'contact.namePlaceholder' }}/>
                </label>
                <label>
                  <Translate content="contact.email" component="div"/>
                  <Translate onChange={this.updateEmail} name="email" component="input" attributes={{placeholder: 'contact.emailPlaceholder' }}/>
                </label>
                <label>
                  <Translate content="contact.title" component="div"/>
                  <Translate onChange={this.updateTitle} name="title" component="input" attributes={{placeholder: 'contact.titlePlaceholder' }}/>
                </label>
                <label>
                  <Translate content="contact.content" component="div"/>
                  <Translate onChange={this.updateContent} name="content" rows="6" component="textarea" attributes={{placeholder: 'contact.contentPlaceholder' }}/>
                </label>
                <Translate onClick={this.sendMail} name="send" component="button" content='contact.submit'/>
        
              </div>

              <div className="References">
                <div className="Reference">
                  <div className="ReferenceQuoteSymbolLeft">“</div>
                  <div className="ReferenceQuoteSymbolRight">”</div>

                  <div className="ReferenceQuote">
                  [...] Mimo naszych zgłoszeń zapotrzebowania, właściciel systemu Baselinker, nie był zainteresowany wykonaniem wersji mobilnej, którą w łatwy sposób można by obsługiwać przy pomocy smartfona.
                  <br></br><br></br>
                  Zdecydowaliśmy powierzyć to zadanie Panu Rafałowi, dzięki czemu od dwóch lat mamy możliwość korzystania z praktycznego i przyjaznego w obsłudze narzędzia mobilnego. Polecam usługi Pana Rafała.
                  </div>
                  <Translate className="ReferenceLink" content="contact.referenceLink" component="div" unsafe={true} />
                  <div className="ReferenceSignature">
                    Paweł Mróz - <b>Zoologic</b>
                  </div>
                </div>
                
              </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Contact;
