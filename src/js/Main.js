import React, {Component} from 'react';
import App from 'grommet/components/App';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import CommonHeader from './components/CommonHeader';
import Footer from 'grommet/components/Footer';

export default class Main extends Component {
  render () {
    return (
      <App centered={false}>
      <Box>
        <CommonHeader/>
        {this.props.children}
        <Footer alignSelf="end" primary={true} appCentered={true} 
          align="end" pad="small" colorIndex="grey-1">
          <p>
           Najlepsze Aplikacje tylko <Anchor href="ibso.pl" target="_blank">IBSO</Anchor>!
          </p>
        </Footer>
        </Box>
      </App>
    );
  }
};
