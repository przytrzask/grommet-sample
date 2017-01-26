
import React from 'react';

import Chart, {Base, Area, Line, Layers} from 'grommet/components/chart/Chart';
import Legend from 'grommet/components/Legend';




//import EditIcon from 'grommet/components/icons/base/Edit';
//import AccessAccessibilityIcon from 'grommet/components/icons/base/AccessAccessibility';
// import Table from 'grommet/components/Table';
// import TableHeader from 'grommet/components/TableHeader';


const ChartBox = () => {

  // <EditIcon onClick={props.edit.bind(this, user.id)} />




  


  return (
    
  <Chart loading={true}
  vertical={true}>
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
  <Legend series={[{"label": "Americas", "value": 40, "colorIndex": "graph-1"}, {"label": "Europe", "value": 20, "colorIndex": "unset"}, {"label": "Asia", "value": 15, "colorIndex": "graph-3"}]}
  onClick={false}
  total={true} />
</Chart>
 
  );

};

export default ChartBox;
