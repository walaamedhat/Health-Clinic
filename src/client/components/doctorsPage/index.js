import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GreenNav from '../greenNav/GreenNav';
import Header from '../header/Header';
import * as dataDoctorAction from '../../actions/dataDoctor';
import Doctor from './doctor/Doctor';

import { BarLoader } from 'react-spinners';

class DoctorsPage extends Component {
  componentDidMount() {
    const { fetchDoctors } = this.props;
    fetchDoctors(this.props.match.params.cityName);
  }
  render() {
    const { isFetching, error, data } = this.props;

    return (
      <div>
        <GreenNav />
        <Header />
        {isFetching && (
          <center className='center'>
            <BarLoader color={'#66D49D'} loading={isFetching} width={200} />
          </center>
        )}
        {error && <div className='data-error'>{error}</div>}

        <div className='container-doctor'>
          {data.map((doctor, i) => (
            <Doctor
              key={i}
              id={doctor.id}
              name={doctor.name}
              description={doctor.description}
              position={doctor.position}
              location={doctor.location}
            />
          ))}
        </div>
      </div>
    );
  }
}

DoctorsPage.propTypes = {
  fetchDoctors: PropTypes.func,
  data: PropTypes.array,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  match: PropTypes.object,
  cityName: PropTypes.string
};

const mapStateToProps = state => {
  return {
    data: state.doctors.data,
    error: state.doctors.error,
    isFetching: state.doctors.isFetching
  };
};

export default connect(mapStateToProps, dataDoctorAction)(DoctorsPage);
