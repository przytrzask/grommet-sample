import React, { Component } from 'react';
import ChartBox from './ChartBox';
// import {browserHistory} from 'react-router';
import Article from 'grommet/components/Article';

import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Box from 'grommet/components/Box';





export default class Stats extends Component {




  render() {

    

    return (

      <Article align="center" pad={{ horizontal: 'medium' }} primary={true}>
       <Box align="start" fill={true}>
        <Tabs justify='center'>
  <Tab title='Aktualny Stok'>
    <ChartBox/>
  </Tab>
  <Tab title='Karty Sprzedane'>
    <ChartBox/>
  </Tab>
  <Tab title='Sklepy'>
    <ChartBox/>
  </Tab>
  <Tab title='Kasjerzy'>
    <ChartBox/>
  </Tab>
  <Tab title='Transakcje'>
    <ChartBox/>
  </Tab>
  <Tab title='Przychody Nadzwyczajne'>
    <ChartBox/>
  </Tab>
</Tabs>
  </Box>
      </Article>

    );
  }
}


