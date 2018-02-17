import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as secretaryViewActions from '../../../actions/secretaryView';
import './secretaryView.css';
import 'react-table/react-table.css';

import ReactTable from 'react-table';

import PropTypes from 'prop-types';

class SecretaryViewPage extends Component {
  filterByState(list, state) {
    return list.filter(el => el.status === state);
  }
  render() {
    const { secretaryAppointments, changeStatus } = this.props;
    if (!secretaryAppointments) return <div />;

    return (
      <div className='flexSecView'>
        <div className='tablesSecView'>
          <div>
            <ReactTable
              data={this.filterByState(secretaryAppointments, 'out')}
              columns={[
                {
                  Header: 'Schedule',
                  columns: [
                    {
                      Header: 'Patient Name',
                      id: 'patientName',
                      accessor: d => d.patient_name
                    },

                    {
                      Header: 'Doctor Name',
                      id: 'doctorName',
                      accessor: d => d.doctor_name
                    },

                    {
                      Header: 'Time',
                      id: 'time',
                      accessor: d => d.time
                    },

                    {
                      Header: 'Confirm',
                      id: 'confirm',
                      accessor: d => (
                        <button
                          onClick={() => changeStatus(d.id, 'waiting')}
                          type='submit'
                        >
                          Confirm
                        </button>
                      )
                    }
                  ]
                }
              ]}
              defaultPageSize={5}
              className='-striped -highlight'
            />
            <br />
          </div>
          <div>
            <ReactTable
              data={this.filterByState(secretaryAppointments, 'waiting')}
              columns={[
                {
                  Header: 'Schedule',
                  columns: [
                    {
                      Header: 'Patient Name',
                      id: 'patientName',
                      accessor: d => d.patient_name
                    },

                    {
                      Header: 'Doctor Name',
                      id: 'doctorName',
                      accessor: d => d.doctor_name
                    },

                    {
                      Header: 'Time',
                      id: 'time',
                      accessor: d => d.time
                    },

                    {
                      Header: 'Confirm',
                      accessor: 'waiting',
                      Cell: () => <button type='submit'>In</button>
                    }
                  ]
                }
              ]}
              defaultPageSize={5}
              className='-striped -highlight'
            />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

SecretaryViewPage.propTypes = {
  secretaryAppointments: PropTypes.array,
  changeStatus: PropTypes.func
};

export default connect(undefined, secretaryViewActions)(SecretaryViewPage);
