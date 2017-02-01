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





export default class Stats extends Component {




  render() {

    console.log(this.props);

    return (








      <Split priority="left" flex="right">


        <Sidebar size="small" full={true} fixed={true} colorIndex='neutral-1'>
          <Header pad='medium'
            justify='between'>
            <Title>
              STATYSTYKI
    </Title>
          </Header>
          <Box flex='grow'
            justify='start'>
            <Menu primary={true}>
              <NavAnchor path="/stats/current"
                >
                Aktualny stok
      </NavAnchor>
              <NavAnchor path="/stats/sold">
                Karty Sprzedane
      </NavAnchor>
              <NavAnchor path="/stats/shops">
                Sklepy
      </NavAnchor>
              <NavAnchor path="stats/cashiers">
                Kasjerzy
      </NavAnchor>
              <NavAnchor path="stats/transactions" >
                Transakcje
      </NavAnchor>
              <Anchor href='#'>
                Przychody Nadzwyczajne
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


//  <Box align="start" >
//         <Tabs justify='center'>
//   <Tab title='Aktualny Stok'>
//     <ChartBox/>
//   </Tab>
//   <Tab title='Karty Sprzedane'>
//     <ChartBox/>
//   </Tab>
//   <Tab title='Sklepy'>
//     <ChartBox/>
//   </Tab>
//   <Tab title='Kasjerzy'>
//     <ChartBox/>
//   </Tab>
//   <Tab title='Transakcje'>
//     <ChartBox/>
//   </Tab>
//   <Tab title='Przychody Nadzwyczajne'>
//     <ChartBox/>
//   </Tab>
// </Tabs>
//   </Box>



