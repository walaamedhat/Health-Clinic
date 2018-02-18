import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as secretaryViewAction from '../../actions/secretaryView';
import SecretaryTableViewPage from './secretaryView/SecretaryTableViewPage';
import SecretaryViewHeader from './secretaryView/SecretaryViewHeader';
import SecretaryCalendarView from './secretaryView/SecretaryCalendarView';

class SecretaryView extends Component {
  componentDidMount() {
    const { fetchSecretaryView } = this.props;
    fetchSecretaryView(this.props.match.params.location);
  }
  render() {
    const { isFetching, error, secretaryAppointments } = this.props;

    return (
      <div>
        {isFetching && (
          <center className='center'>
            <BarLoader color={'#66D49D'} loading={isFetching} width={200} />
          </center>
        )}
        {error && <div className='appointments-error'> {error}</div>}
        <div>
          <SecretaryViewHeader />
        </div>
        <div>
          <div className='midlleSecView'>
            <SecretaryCalendarView />
            <SecretaryTableViewPage
              secretaryAppointments={secretaryAppointments}
            />
          </div>
        </div>
      </div>
    );
  }
}

SecretaryView.propTypes = {
  fetchSecretaryView: PropTypes.func,
  secretaryAppointments: PropTypes.array,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  match: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = state => {
  return {
    secretaryAppointments: state.secretaryAppointments.secretaryAppointments,
    error: state.secretaryAppointments.error,
    isFetching: state.secretaryAppointments.isFetching
  };
};

export default connect(mapStateToProps, secretaryViewAction)(SecretaryView);
