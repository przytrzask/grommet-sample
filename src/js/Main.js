import React, {Component} from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';

import CommonHeader from './components/CommonHeader';
import Stats from './components/Stats';

export default class Main extends Component {
  render () {
    return (
      <App inline={true} centered={false}>

          
           <CommonHeader />
          {this.props.children}
          
         
        
          
         
        
        
        
        
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

// <Box responsive={false} full={true}>
// </Box>