import React from 'react' ;
import TableRow from 'grommet/components/TableRow';
// import Table from 'grommet/components/Table';
// import TableHeader from 'grommet/components/TableHeader';


const TransactionTableBody = (props) => {




 
   

  return (

 <tbody>
    <TableRow>
      {props.rows.map(row => {
        return <td key={row.id}>{row.name}</td>;
      })

}
    </TableRow>
  </tbody>
  
  );

};
  
export default TransactionTableBody;
