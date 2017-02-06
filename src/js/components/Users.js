import React, { Component } from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Box from 'grommet/components/Box';

import { getUsersHeaders, getUsers } from '../store';
import UsersTable from './UsersTable';



export default class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editLayer: false,

      usersHeaders: [],
      users: []


    };

    this._onAccessChange = this._onAccessChange.bind(this);
    this._onEdit = this._onEdit.bind(this);
  }

  componentDidMount() {
    getUsersHeaders().then((usersHeaders) =>

      this.setState({ usersHeaders: usersHeaders })

    );

    getUsers().then((users) =>

      this.setState({ users: users })


    );


  }

  _onAccessChange() {
    alert('wowowow');
  }

  _onEdit (id) {
    
    this.setState({ editLayer: true });
    // this.setState
  }


  render() {
    return (
      <Box responsive={false}
          >
        
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
        <UsersTable headers={this.state.usersHeaders} users={this.state.users}  edit={this._onEdit} />

      </Box>


    );
  }
}


