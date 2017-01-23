import React, { Component } from 'react';
// import {browserHistory} from 'react-router';
import { Table, Column, Cell } from 'fixed-data-table';
// import Button from 'grommet/components/Button';


export default class Contractors extends Component {




  render() {
    const rows = [
      ['a1', 'b1', 'c1'],
      ['a2', 'b2', 'c2'],
      ['a3', 'b3', 'c3']

    ];
    return (
      <Table
        rowHeight={50}
        rowsCount={rows.length}
        width={300}
        height={300}
        headerHeight={50}>
        <Column
          header={<Cell>Col 1</Cell>}
          cell={<Cell>Column 1 static content</Cell>}
          width={2000}
          />
        <Column
          header={<Cell>Col 2</Cell>}
          cell={<Cell>Column 1 static content</Cell>}
          width={1000}
          />
        <Column
          header={<Cell>Col 3</Cell>}
          cell={<Cell>Column 1 static content</Cell>}

          width={2000}
          />
      </Table>


    );
  }
}


