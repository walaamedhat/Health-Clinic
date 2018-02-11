import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GreenNav from '../greenNav/GreenNav';
import Navbar from '../navbar/Navbar';
import * as dataDoctorAction from '../../actions/dataDoctor';
import Doctor from './doctor/Doctor';
import { BarLoader } from 'react-spinners';
class DoctorsPage extends Component {
  componentDidMount() {
    const { fetchDoctors } = this.props;
    fetchDoctors(this.props.match.params.cityName);
    console.log(this.props);
  }
  render() {
    const { isFetching , error , data } = this.props;

    return (
      <div>
        <GreenNav />
        <Navbar />
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
            data.map((doctor,i) => (
              <Doctor key={i} id={doctor.id} name={doctor.name} description={doctor.description} position={doctor.position}/>
            ))
          }

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
