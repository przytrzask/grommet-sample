import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Box from 'grommet/components/Box';

import { getContractors } from '../store';
import ContractorsTable from './ContractorsTable';



export default class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editLayer: false,

 
            

      contractorsHeaders: ['sklep','symbol','nip','adres','kod_pocztowy','miasto','osoba_kontaktowa','telefon'],
      contractors: []


    };

    // this._onAccessChange = this._onAccessChange.bind(this);
    // this._onEdit = this._onEdit.bind(this);
  }

  componentDidMount() {
    
    getContractors().then((contractors) =>

      this.setState({ contractors: contractors })


    );


  }

  


  render() {
    return (
      <Box>
        <Header fixed={false}
          float={false}>
          <Title>
            Użytkownicy

  </Title>

          <Search inline={true}
            fill={false}

            size='medium'
            placeHolder='Wyszukaj'
            />




        </Header>
        <ContractorsTable headers={this.state.contractorsHeaders} contractors={this.state.contractors}  />

      </Box>


    );
  }
}


