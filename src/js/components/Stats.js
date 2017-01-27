import React, { Component } from 'react';
import ChartBox from './ChartBox';
// import {browserHistory} from 'react-router';
import Article from 'grommet/components/Article';

import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Split from 'grommet/components/Split';





export default class Stats extends Component {




  render() {

    

    return (

<Split priority="right" flex="right">
          
          
          
        
          

<Sidebar basis="xxlarge" colorIndex='neutral-1'
  full={false}>
  <Header pad='medium'
    justify='between'>
    <Title>
      STATYSTYKI
    </Title>
  </Header>
  <Box flex='grow'
    justify='start'>
    <Menu primary={true}>
      <Anchor href='#'
        className='active'>
        Aktualny stok
      </Anchor>
      <Anchor href='#'>
        Karty Sprzedane
      </Anchor>
      <Anchor href='#'>
        Sklepy
      </Anchor>
      <Anchor href='#'>
        Kasjerzy
      </Anchor>
      <Anchor href='#'>
        Transakcje
      </Anchor>
      <Anchor href='#'>
        Przychody Nadzwyczajne
      </Anchor>
    </Menu>
  </Box>
  <Footer pad='medium'>
    
  </Footer>
</Sidebar>
<ChartBox />
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