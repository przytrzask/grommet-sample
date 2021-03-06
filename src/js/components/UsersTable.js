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


const UsersTable = (props) => {

  // <EditIcon onClick={props.edit.bind(this, user.id)} />






  return (
    <Table selectable={true}>
      <TableHeader
        labels={props.headers} />
      <tbody>

        {props.users.map(user => {
          let zoom;
          if (user.zoom) {
            zoom = <ZoomInIcon onClick={props.access} />;

          }



          return (<TableRow key={user.id}>
            <td>{user.sklep}</td>
            <td>{user.status}</td>
            <td>{user.login}</td>
            <td>{user.Data}</td>
            <td>{user.imię}</td>
            <td>{user.Nazwisko}</td>
            <td><Anchor icon={<EditIcon />}
  animateIcon={true}
  primary={false}
  reverse={false}
  disabled={false}
  path={"users/" + user.id}/></td>

            <td> {zoom}</td>
            <td><AccessAccessibilityIcon /></td>

          </TableRow>);
        })




        }

      </tbody>
    </Table>

  );

};

export default UsersTable;
