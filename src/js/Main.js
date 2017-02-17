import React, { Component } from 'react';
import App from 'grommet/components/App';
import { connect } from 'react-redux';
import Article from 'grommet/components/Article';
import Split from 'grommet/components/Split';
// import Box from 'grommet/components/Box';

import CommonHeader from './components/CommonHeader';
import NavSidebar from './components/NavSidebar';
// import Stats from './components/Stats';

class Main extends Component {


  render() {

    const
      { sidebarActive }
        = this.props;
    let nav = (sidebarActive) ? <NavSidebar /> : "";
    return (

      <App centered={false}>
        <Split priority="right" flex='right'
          onResponsive={this._onResponsive}>
          {nav}
          <Article>
            <CommonHeader />
            {this.props.children}
          </Article>
        </Split>

      </App>

    );
  }
};

const mapStateToProps = (state) => {
  return { sidebarActive: state.sidebarActive };
};
// export default connect(se)(Main);
// ecport default Main = connect((mapStateToProps)())
export default Main = connect(mapStateToProps)(Main);

