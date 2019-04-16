import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuBar from './MenuBar';

class Home extends React.Component {

  render() {
    return (
      <div>
        <MenuBar/>
        <h1>Welcome to the Student Registration</h1>
      </div>
    );
  }

}

export default (Home);
