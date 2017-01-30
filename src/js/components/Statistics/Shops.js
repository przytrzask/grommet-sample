
import React from 'react';

import Chart, {Base, Area, Line, Layers} from 'grommet/components/chart/Chart';
import Legend from 'grommet/components/Legend';
// import Split from 'grommet/components/Split';
// import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
// import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
// import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
// import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';






const Shops = () => {

  // <EditIcon onClick={props.edit.bind(this, user.id)} />




  


  return (
    
    
          
          
          
        <Box colorIndex="light-2">
          <Header fill={true} pad={{horizontal: "small", vertical: "medium"}}
            justify="between" size="large" >
            <Box direction="row" align="center" pad={{between: 'small'}}
              responsive={false}>
              <Anchor animateIcon={true} icon={<LinkPreviousIcon />} path="/"
                a11yTitle="Return" />
              <Heading tag="h3" margin="none">
                <strong>Sklepy</strong>
              </Heading>
            </Box>
            
          </Header>
<Section full={true} align="center" full={true} pad="none">
          
        

  <Chart full={false} loading={true}
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

</Section>
</Box>

 
  );

};

export default Shops;


