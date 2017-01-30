import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/app';
import Demo from './components/demo';
import reducers from './reducers';
import Async from './middleware/async';
import Landing from './components/landingPage';
import Login from './components/login';
import SignUp from './components/signup';
import Contact from './components/Contact';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={Landing} />
      <Route path="/home" component={App} />
      <Route path="/demo" component={Demo} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/contactUs" component={Contact} />
    </Router>
  </Provider>
  , document.querySelector('.container'));


          // <Route path="*" component={FourOhFour}/>
          // <Route path="/player" component={Player} />
          // <Route path="/signUp" component={SignUp} />
          // <Route path="/signin" component={LoginForm} />
          // <Route path="/about" component={About} />
          // <Route path="/profile" component={Profile} />
