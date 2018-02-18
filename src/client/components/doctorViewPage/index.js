import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as doctorViewAction from '../../actions/doctorView';
import * as calenderDoctor from '../../actions/doctorsCalender';
import DoctorViewPage from './doctorView/DoctorViewPage';
import DoctorViewHeader from './doctorView/DoctorViewHeader';
import Footer from '../footer/Footer';
import Basic from '../calender';

class DoctorView extends Component {
  componentDidMount() {
    this.props.event(this.props.match.params.id_doctor);
    this.props.doctorView(this.props.match.params.id_doctor);
  }
  render() {
    const { isFetching, error, appointments } = this.props;

    return (
      <div>
        <div>
          {isFetching && (
            <center className='center'>
              <BarLoader color={'#66D49D'} loading={isFetching} width={200} />
            </center>
          )}
          {error && <div className='appointments-error'> {error}</div>}
          <div>
            <DoctorViewHeader appointments={appointments} />
          </div>
          <DoctorViewPage appointments={appointments} />
        </div>
        <div className='calenderD'>
          <Basic />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

DoctorView.propTypes = {
  match: PropTypes.object,
  doctorView: PropTypes.func,
  appointments: PropTypes.array,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  id_doctor: PropTypes.string,
  event: PropTypes.func
};

const mapStateToProps = state => {
  return {
    appointments: state.doctorView.appointments,
    error: state.doctorView.error,
    isFetching: state.doctorView.isFetching
  };
};
const mapDispatchToProps = {
  doctorView: doctorViewAction.fetchDoctorView,
  event: calenderDoctor.fetchDoctorsCalender
};
export default connect(mapStateToProps, mapDispatchToProps)(DoctorView);
