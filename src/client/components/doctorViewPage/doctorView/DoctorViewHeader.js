import React, { Component } from 'react';
import { connect } from 'react-redux';

import './doctorView.css';

class DoctorViewHeader extends Component {
  render() {
    return (
      <div>
        <div className='greenNavDocView'>
          <div>
            <a className='btnChangeDocView'>Change Password</a>
          </div>
          <div className='left-sideDocView'>
            <p className='waitingDocView'>
              Waiting<i className='fa fa-bell-o bell' />
            </p>
            <div className='circle'>this.props.waiting</div>
          </div>
        </div>

        <div className='headerDocView'>
          <div className='headDocView'>
            <img src='/assets/logo.png' className='logoDocView' alt='star' />
            <h1 className='titleDocView'>GENE MED LABS</h1>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { waiting: state.doctorView };
};
export default connect(mapStateToProps)(DoctorViewHeader);
