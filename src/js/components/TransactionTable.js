

import React, { PropTypes } from 'react' ;
// import Table from 'grommet/components/Table';
// import TableHeader from 'grommet/components/TableHeader';
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
  return (

<ul>
      {props.columns.map(column => {
        return <li key={column.id}>column.name</li>;
      })}
    </ul>


  );


};



TransactionTable.propTypes = {
  columns : PropTypes.array};
       
export default TransactionTable;
