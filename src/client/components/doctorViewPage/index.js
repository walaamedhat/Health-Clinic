import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as doctorViewAction from '../../actions/doctorView';
import DoctorViewPage from './doctorView/DoctorViewPage';
import DoctorViewHeader from './doctorView/DoctorViewHeader';

class DoctorView extends Component {
  componentDidMount() {
    const { fetchDoctorView } = this.props;
    fetchDoctorView(this.props.match.params.id_doctor);
  }
  render() {
    const { isFetching , error , appointments } = this.props;

    return (
      <div>
        <div>
          <DoctorViewHeader
          />
        </div>
        <div>
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
              <div className='appointments-error'>
                { error }
              </div>
            )
          }

          <DoctorViewPage

            appointments={appointments}

          />
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
  id_doctor: PropTypes.string
};

const mapStateToProps = state => {
  return {
    appointments: state.doctorView.appointments,
    error: state.doctorView.error,
    isFetching: state.doctorView.isFetching
  };
};

export default connect(mapStateToProps, doctorViewAction)(DoctorView);
