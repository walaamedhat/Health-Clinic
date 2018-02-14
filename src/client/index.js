import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import Home from './components/home';
import DoctorsPage from './components/doctorsPage';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/doctors/:cityName' component={DoctorsPage} />
          <Redirect to='/' />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
