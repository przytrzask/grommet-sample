
import React from 'react';

import Chart, {Base, Area, Line, Layers} from 'grommet/components/chart/Chart';
import Legend from 'grommet/components/Legend';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';






const ChartBox = () => {

  // <EditIcon onClick={props.edit.bind(this, user.id)} />




  


  return (
    
    <Split priority="left" flex="left">
          
          
          
        
          


  <Chart loading={true}
  vertical={false}>
  <Base height='medium'
    width='large' />
  <Layers>
    <Area values={[50, 45, 30, 35, 0, 5, 10, 15, 75, 80, 90, 100]}
      colorIndex='graph-1'
      smooth={true}
      activeIndex={11} />
    <Line values={[100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50]}
      colorIndex='accent-1'
      smooth={true}
      activeIndex={11} />
  </Layers>
  <Legend series={[{"label": "aktywne", "value": 40, "colorIndex": "graph-1"}, {"label": "Nieaktywne", "value": 20, "colorIndex": "unset"}, {"label": "inne", "value": 15, "colorIndex": "graph-3"}]}
  onClick={false}
  total={true} />
</Chart>
<Sidebar basis="xxlarge" colorIndex='neutral-1'
  full={true}>
  <Header pad='medium'
    justify='between'>
    <Title>
      FILTRY
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
  
</Sidebar>
</Split>
 
  );

};

export default ChartBox;
