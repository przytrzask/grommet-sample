import React from 'react';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';

import TableHeader from 'grommet/components/TableHeader';

//import EditIcon from 'grommet/components/icons/base/Edit';
//import AccessAccessibilityIcon from 'grommet/components/icons/base/AccessAccessibility';
// import Table from 'grommet/components/Table';
// import TableHeader from 'grommet/components/TableHeader';


const OrdersTable = (props) => {

  // <EditIcon onClick={props.edit.bind(this, user.id)} />

  const  labels  = props.headers;


  


  return (
    <Table selectable={true}>
      <TableHeader
        labels={labels} />
      <tbody>

        {props.orders.map(order => {




          return (<TableRow key={order.id}>
            <td>{order.id}</td>
            <td>{order.status}</td>
            <td>{order.data_założenia}</td>
            <td>{order.zlecający}</td>
            <td>{order.kierunek_logistyczny}</td>
            <td>{order.nazwa_sklepu}</td>

           




          </TableRow>);
        })




        }

      </tbody>
    </Table>

  );

};

export default OrdersTable;
