import React from 'react';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Anchor from 'grommet/components/Anchor';
import TableHeader from 'grommet/components/TableHeader';
import StandardsOfflineStorageIcon from 'grommet/components/icons/base/StandardsOfflineStorage';
//import EditIcon from 'grommet/components/icons/base/Edit';
//import AccessAccessibilityIcon from 'grommet/components/icons/base/AccessAccessibility';
// import Table from 'grommet/components/Table';
// import TableHeader from 'grommet/components/TableHeader';


const OrdersTable = (props) => {

  // <EditIcon onClick={props.edit.bind(this, user.id)} />

let labels = props.orders.header;


console.log(props.orders)


  return (
    <Table selectable={true}>
      <TableHeader
labels={labels} />
      <tbody>

        {props.orders.data.map(order => {
          



          return (<TableRow key={order.id}>
            <td>{order.status}</td>
            
            
            
           
            

          </TableRow>);
        })




        }

      </tbody>
    </Table>

  );

};

export default OrdersTable;
