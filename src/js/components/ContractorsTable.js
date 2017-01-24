import React from 'react';
import TableRow from 'grommet/components/TableRow';
import ZoomInIcon from 'grommet/components/icons/base/ZoomIn';
import Table from 'grommet/components/Table';
import Anchor from 'grommet/components/Anchor';
import TableHeader from 'grommet/components/TableHeader';
import EditIcon from 'grommet/components/icons/base/Edit';
import AccessAccessibilityIcon from 'grommet/components/icons/base/AccessAccessibility';
// import Table from 'grommet/components/Table';
// import TableHeader from 'grommet/components/TableHeader';


const ContractorsTable = (props) => {

  // <EditIcon onClick={props.edit.bind(this, user.id)} />






  return (
    <Table selectable={true}>
      <TableHeader
        labels={props.headers} />
      <tbody>

        {props.contractors.map(contractor => {
          



          return (<TableRow key={contractor.id}>
            <td>{contractor.nazwa}</td>
            <td>{contractor.sklep}</td>
            <td>{contractor.symbol}</td>
            <td>{contractor.nip}</td>
            <td>{contractor.adres}</td>
            <td>{contractor.kod_pocztowy}</td>
            <td>{contractor.miasto}</td>
            <td>{contractor.osoba_kontaktowa}</td>
           
            

          </TableRow>);
        })




        }

      </tbody>
    </Table>

  );

};

export default ContractorsTable;
