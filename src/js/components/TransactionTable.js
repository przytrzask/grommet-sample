

import React, { PropTypes } from 'react' ;
import Table from 'grommet/components/Table';
// import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
// import Menu from 'grommet/components/Menu';
// import Anchor from 'grommet/components/Anchor';
// import NavAnchor from './NavAnchor';







// var links = items.map((page) => {
//       return (
//         <Anchor key={page.label} path={page.path} label={page.label} />
//       );
//     });


const TransactionTable = (props) => {
if(props.columns) {

let rows = props.columns.map( (row,i) =>{
  return (
<TableRow>
<td key={i}>{columns.name}
        
      </td>
        </TableRow>

  );

});
} else {
  let rows = () => {
    return('')
  }
}

  return (

<Table scrollable={true}
  selectable={true}>
  <thead>
  <tr>
    {rows}
    </tr>
  </thead>
  <tbody>
    
     
  
    
     
  </tbody>
</Table>



  );


};



TransactionTable.propTypes = {
       columns : PropTypes.object};
       
export default TransactionTable;
