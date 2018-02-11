import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GreenNav from '../greenNav/GreenNav';
import Header from '../header/Header';
import * as doctorViewAction from '../../actions/doctorView';
import DoctorViewPage from './doctorView/DoctorView';

import { BarLoader } from 'react-spinners';

class DoctorView extends Component {
  componentDidMount() {
    const { fetchDoctorView } = this.props;
    fetchDoctorView(this.props.match.params.id_doctor);
    console.log(this.props);
  }
  render() {
    const { isFetching , error , appointments } = this.props;

    return (
      <div>
        <GreenNav />
        <Header />
        {
          isFetching && (
            <center className='center'>
              <BarLoader
                color={'#66D49D'}
                loading={isFetching}
                width={200}
              />
            </center>
          )
        }
        {
          error && (
            <div className='data-error'>
              { error }
            </div>
          )
        }

        <div className='container-doctors'>
          {
            appointments.map((doctor,i) => (
              <DoctorViewPage key={i} name={doctor.name} description={doctor.description}
                position={doctor.position} />
            ))
          }

        </div>
      </div>
    );
  }
}

DoctorView.propTypes = {
  fetchDoctorView: PropTypes.func,
  appointments: PropTypes.array,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  match: PropTypes.object,
  cityName: PropTypes.string
};

const mapStateToProps = state => {
  return {
    appointments: state.doctors.appointments,
    error: state.doctors.error,
    isFetching: state.doctors.isFetching
  };
};

export default connect(mapStateToProps, doctorViewAction)(DoctorView);
