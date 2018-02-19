import React, { Component } from 'react';

import './AboutStyle.css';

class About extends Component {
  render() {
    return (
      <div id='aboutUs' className='aboutUs'>
        <div className='container-about'>
          <div className='baseAbout'>
            <i className='fas fa-users' />
          </div>
        </div>
        <div className='textA'>
          <h1>About Us</h1>
        </div>
        <div>
          <p>
            Gene Medical labs is molecular diagnostic and research center established by research scientists
            <br />
            scientists with extensive experience in human DNA diagnostics. <br />
            <br></br>
            Gene Medical labs was formed specifically to provide comprehensive, affordable, fast and<br />
            accurate service using the latest advances in DNA-based technology.<br />
          </p>
        </div>
      </div>
    );
  }
}

export default About;
