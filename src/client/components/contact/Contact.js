import React, { Component } from 'react';

import './ContactStyle.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className='con'>
          <div className='baseCon'>
            <i className='fa fa-mobile'></i>
          </div>
        </div>
        <div id='contactUs' className='contactUs'>
          <section className='contactUs'>
            <ul className='contact-list-top'>
              <li>
                <h4 className='contact-list-header'>Oppening Hours</h4></li>
              <li><a className='contact-list-anchor'>Monday - Friday</a></li>
              <li><a className='contact-list-anchor2'>9:00 am - 6:00 pm</a></li>
              <hr/>
              <li><a className='contact-list-anchor'>Saturday</a></li>
              <li><a className='contact-list-anchor2'>9:00 am - 4:00 pm</a></li>
              <hr/>
              <li><a className='contact-list-anchor'>Sunday</a></li>
              <li><a className='contact-list-anchor2'>9:00 am - 2:00 pm</a></li>
              <hr/>
            </ul>
            <ul className='contact-list-top vl'>
              <li>
                <h4 className='contact-list-header'>Contact Us</h4></li>
              <li><a className='contact-list-anchor'>Gaza</a></li>
              <li><a className='contact-list-anchor2'>+972591234567</a></li>
              <hr/>
              <li><a className='contact-list-anchor'>Hebron</a></li>
              <li><a className='contact-list-anchor2'>+972591234567</a></li>
              <hr/>
              <li><a className='contact-list-anchor'>Juresalem</a></li>
              <li><a className='contact-list-anchor2'>+972591234567</a></li>
              <hr/>
            </ul>
          </section>
        </div>
      </div>
    );

  }
}

export default Contact;
