import React, { Component } from 'react';

import '../css/Contact.css';

import Translate from 'react-translate-component';

class Contact extends Component {

  sendMail = () => {

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
              <form>
                <label>
                  <Translate content="contact.name" component="div"/>
                  <Translate name="name" component="input" attributes={{placeholder: 'contact.namePlaceholder' }}/>
                </label>
                <label>
                  <Translate content="contact.email" component="div"/>
                  <Translate name="email" component="input" attributes={{placeholder: 'contact.emailPlaceholder' }}/>
                </label>
                <label>
                  <Translate content="contact.title" component="div"/>
                  <Translate name="title" component="input" attributes={{placeholder: 'contact.titlePlaceholder' }}/>
                </label>
                <label>
                  <Translate content="contact.content" component="div"/>
                  <Translate name="content" rows="6" component="textarea" attributes={{placeholder: 'contact.contentPlaceholder' }}/>
                </label>
                <Translate onClick={this.sendMail} name="content" type="submit" component="input" attributes={{ value:'contact.submit'}}/>
              </form>
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
