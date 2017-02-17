
import React, { Component } from 'react';
// import { navActivate } from '../actions/navActions';
import { connect } from 'react-redux';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Footer from 'grommet/components/Footer';


class NavSidebar extends Component {

  constructor() {
    super();
    // this._onClose = this._onClose.bind(this);
  }



  // _onClose() {
  //   this.props.dispatch(navActivate(false));
  // }


  render() {
    return (
      <Sidebar colorIndex='neutral-1' fixed={true}>
        <Header size='large' justify='between' pad={{ horizontal: 'medium' }}>
          <Title onClick={this._onClose} a11yTitle='Close Menu'>

            <span>Gift</span>
          </Title>
          <Button icon={<CloseIcon />} onClick={this.props._onClose} plain={true}
            a11yTitle='Close Menu' />
        </Header>
        <Menu fill={true} primary={true}>
          <p>fdefdf</p>
        </Menu>
        <Footer pad={{ horizontal: 'medium', vertical: 'small' }}>
          <p> footer goes here </p>
        </Footer>
      </Sidebar>);

  }

}

const mapStateToProps = (state) => {
  return { sidebarActive: state.sidebarActive };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _onClose: () => dispatch({ type: 'DEACTIVATE_NAV' })

  };
};

export default NavSidebar = connect(mapStateToProps, mapDispatchToProps)(NavSidebar);
