import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Home from './components/home';
import DoctorsPage from './components/doctorsPage';
import DoctorViewPage from './components/doctorViewPage/';
import SecretaryViewPage from './components/secretaryView/';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/doctors/:cityName' component={DoctorsPage} />
          <Route exact path='/doctor/:id_doctor' component={DoctorViewPage} />
          <Route exact path='/secretary/:location' component={SecretaryViewPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
