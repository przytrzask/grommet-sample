import React, {Component} from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import CommonHeader from './components/CommonHeader';

export default class Main extends Component {
  render () {
    return (
      <App  centered={false}>
      <Box full={true}>
         <CommonHeader />
      
        {this.props.children}
        
        </Box>
      </App>
    );
  }
};



// <Footer alignSelf="end" primary={true} 
//          pad="small" colorIndex="grey-1">
//           <p>
//            Najlepsze Aplikacje tylko <Anchor href="ibso.pl" target="_blank">IBSO</Anchor>!
//           </p>
//         </Footer>
