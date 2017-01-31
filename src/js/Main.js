import React, { Component } from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
// import Box from 'grommet/components/Box';

import CommonHeader from './components/CommonHeader';
// import Stats from './components/Stats';

export default class Main extends Component {
  render() {
    return (

      <App inline={true} centered={false}>
        <Box full={true} flex={false} colorIndex="light-2">

          <CommonHeader />

          {this.props.children}
        </Box>

      </App>

    );
  }
};


