import React, { Component } from 'react';

import '../css/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div id="contact" className="anchor"></div>
        <div className="Container">
          <div className="Header">Contact</div>
          <div className="ContactTitle">
              Do you have something that I can do for you? Send me an e-mail at <b>contact@rafalm.com</b>, or use <b>form</b> from below.
          </div>

          <div className="ContactContainer">

              <div className="Form">
              <form>
                <label>
                  Name:
                  <input type="text" name="name" placeholder="Land here your name"/>
                </label>
                <label>
                  Email:
                  <input type="text" name="name" placeholder="I should response somewhere"/>
                </label>
                <label>
                  Email:
                  <textarea rows="6" name="name" placeholder="What can I do for you?"/>
                </label>
                <input type="submit" value="Send" />
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
