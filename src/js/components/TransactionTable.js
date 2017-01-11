

import React from 'react' ;
// import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';

// import TableRow from 'grommet/components/TableRow';
// import Menu from 'grommet/components/Menu';
// import Anchor from 'grommet/components/Anchor';
// import NavAnchor from './NavAnchor';







// var links = items.map((page) => {
//       return (
//         <Anchor key={page.label} path={page.path} label={page.label} />
//       );
//     });




const TransactionTable = (props) => {
  let labels = [];
  props.columns.map(column => {
    labels.push(column.name);
  });

  return (

 <TableHeader className="#49516f"  labels={labels} />


  );


};







// import TableRow from 'grommet/components/TableRow';
// import Menu from 'grommet/components/Menu';
// import Anchor from 'grommet/components/Anchor';
// import NavAnchor from './NavAnchor';







// var links = items.map((page) => {
//       return (
//         <Anchor key={page.label} path={page.path} label={page.label} />
//       );
//     });





// TransactionTable.propTypes = {
//   columns : PropTypes.array};
       
export default TransactionTable;  




