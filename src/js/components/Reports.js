import React, { Component } from 'react';
// import {Router, browserHistory} from 'react-router';

// import {browserHistory} from 'react-router';
// import Article from 'grommet/components/Article';

// import Tabs from 'grommet/components/Tabs';
// import Tab from 'grommet/components/Tab';
import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import NavAnchor from './NavAnchor';
import Footer from 'grommet/components/Footer';
import Split from 'grommet/components/Split';





export default class Reports extends Component {




  render() {

    


    return (








      <Split priority="left" flex="right">


        <Sidebar full={true} fixed={true} basis="xxlarge" colorIndex='neutral-1'>
          <Header pad='medium'
            justify='between'>
            <Title>
              RAPORTY
    </Title>
          </Header>
          <Box flex='grow'
            justify='start'>
            <Menu primary={true}>
              <NavAnchor path="/reports/current"
                >
                Aktualny stok
      </NavAnchor>
              <NavAnchor path="/reports/sold">
                Karty Sprzedane
      </NavAnchor>
              <NavAnchor path="/reports/orders">
                Zamówienia
      </NavAnchor>
              <NavAnchor path="reports/transactions">
                Transakcje
      </NavAnchor>
              <NavAnchor path="reports/calculation" >
                Rozliczenia
      </NavAnchor>
              <Anchor href='#'>
                B2B
      </Anchor>
            </Menu>
          </Box>
          <Footer pad='medium'>
            <p>Footer</p>
          </Footer>
        </Sidebar>
        {this.props.children}


      </Split>




    );
  }
}


