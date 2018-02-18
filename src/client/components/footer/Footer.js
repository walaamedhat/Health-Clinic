import React, { Component } from 'react';

import './FooterStyle.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className='push' />
        <footer id='footer'>
          <div className='footer-center'>
            <div className='footer-copy'>
              <p>
                2018 Gene Med Labs .com © All Rights Reserved. Designed by
                <span className='wmy'> WMY</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
