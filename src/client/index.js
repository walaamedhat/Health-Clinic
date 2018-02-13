import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Home from './components/home';
import DayView from './components/calender';
import DoctorsPage from './components/doctorsPage';
import MyCalendar from './components/calender';
import SecertaryPage from './components/secertaryPage';
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/calender' component={DayView} />
          <Route exact path='/doctors/:cityName' component={DoctorsPage} />
          <Route exact path='/calender' component={MyCalendar} />
          <Route exact path='/secertary' component={SecertaryPage} />
          {/* <Route exact path='/login' component={Login} /> */}
          {/* <Route path='/' component={PageNotFound} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
