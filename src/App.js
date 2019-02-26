import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuBar from './components/MenuBar';
import Home from './components/Home';
import AddPlayer from './components/AddPlayer';
import ViewPlayers from './components/ViewPlayers';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: 'demo-app'});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-player" component={AddPlayer} />
            <Route exact path="/view-players" component={ViewPlayers} />
          </div>
        </Router>
      </div>
    );
  }
}

export default (App);
