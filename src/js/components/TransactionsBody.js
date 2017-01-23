import React from 'react';
import TableRow from 'grommet/components/TableRow';
import Status from 'grommet/components/icons/Status';
import PrintIcon from 'grommet/components/icons/base/Print';
// import Table from 'grommet/components/Table';
// import TableHeader from 'grommet/components/TableHeader';


const TransactionTableBody = (props) => {







  return (

    <tbody>

      {props.rows.map(row => {



        return (<TableRow key={row.id}>
          <td>{row.numerkarty}</td>
          <td>{row.operacja}</td>
          <td>{row.kwota}</td>
          <td>{row.saldo}</td>
          <td>{row.bbdfgbb}</td>
          <td>{row.bbdfgbb}</td>

          <td>{row.kwota}</td>
          <td><Status value={row.status} /></td>
          <td>{row.bbdfgbb}</td>
          <td>{row.bbdfgbb}</td>
          <td>{row.bbdfgbb}</td>
          <td>{row.bbdfgbb}</td>
          <td>{row.bbdfgbb}</td>
          <td>{row.bbdfgbb}</td>
          <td><PrintIcon /></td>

        </TableRow>);
      })




      }

    </tbody>

  );

};

export default TransactionTableBody;
