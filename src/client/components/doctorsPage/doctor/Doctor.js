import React, { Component } from 'react';
import { connect } from 'react-redux';
import './doctor.css';
import * as dataPatient from '../../../actions/reserveDataPatient';
import PropTypes from 'prop-types';
import SkyLight from 'react-skylight';
import Basic from '../../calender';

class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      id: e.target.id
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.reserveData(this.state);
    this.props.reserveAppointment();
    event.preventDefault();
  }

  render() {
    const myBigGreenDialog = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      height: 'auto',
      textAlign: 'center'
    };
    const sytleCalender = {
      height: '320px'
    };

    return (
      <div className='doctor'>
        <div className='class-h2'>
          <h2 className='name'>Dr.{this.props.name}</h2>
        </div>
        <div className='inner-doctor'>
          <img src='/assets/Mahmoud.png' />
          <h5>{this.props.position}</h5>
          <p>{this.props.description}</p>
        </div>
        <div className='img'>
          <img
            name={this.props.name}
            id={this.props.id}
            src='/assets/calender.png'
            onClick={() => this.simpleDialog.show()}
          />
        </div>
        <SkyLight
          dialogStyles={myBigGreenDialog}
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          title='Calender of the doctor'
        >
          <div className='popup'>
            <div className='calender' style={sytleCalender}>
              <Basic />
            </div>
            <div>
              <form className='input' onSubmit={this.handleSubmit}>
                <input
                  id={this.props.id}
                  type='text'
                  name='name'
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  className='patientname'
                  placeholder='Name'
                />
                <input
                  id={this.props.id}
                  type='text'
                  name='phone'
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  className='phone'
                  placeholder='Phone'
                />
                <input type='submit' value='Book' />
              </form>
            </div>
          </div>
        </SkyLight>
      </div>
    );
  }
}

Doctor.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  reserveData: PropTypes.func,
  reserveAppointment: PropTypes.func,
  time: PropTypes.string
};

export default connect(null, dataPatient)(Doctor);
