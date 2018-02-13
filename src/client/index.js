import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Home from './components/home';
import DoctorsPage from './components/doctorsPage';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/doctors/:cityName' component={DoctorsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
