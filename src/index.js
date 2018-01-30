import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import App from './containers/App';
import Home from "./containers/Home/Home";
import MyMusic from "./containers/MyMusic/MyMusic";
import Friend from "./containers/Friend/Friend";
import Profile from "./containers/Profile/Profile";


render(<Provider>
  <Router>
    <App>
      <Switch>
        <Route path={'/'} exact={true} component={Home}/>
        <Route path={'/mymusic'} component={MyMusic}/>
        <Route path={'/friend'} component={Friend}/>
        <Route path={'/profile'} component={Profile}/>
      </Switch>
    </App>
  </Router>
</Provider>,window.root);