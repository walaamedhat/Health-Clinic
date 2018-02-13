import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Home from './components/home';
import DoctorsPage from './components/doctorsPage';
<<<<<<< HEAD
import DoctorViewPage from './components/doctorViewPage/';
import store from './store';
=======
>>>>>>> aa51193ccf520b5a2516187c077651e4a246b9ed

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/doctors/:cityName' component={DoctorsPage} />
<<<<<<< HEAD
          <Route exact path='/doctor/:id_doctor' component={DoctorViewPage} />
          {/* <Route exact path='/login' component={Login} /> */}
          {/* <Route path='/' component={PageNotFound} /> */}
=======
>>>>>>> aa51193ccf520b5a2516187c077651e4a246b9ed
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
