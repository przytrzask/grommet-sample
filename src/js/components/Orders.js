import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Box from 'grommet/components/Box';
import OrdersTable from './OrdersTable';

import { getOrders } from '../store';

// import UsersTable from './UsersTable';



export default class Orders extends Component {

  constructor(props) {
    super(props);

    this.state = {

      orders: []


    };


  }

  componentDidMount() {

    getOrders().then((orders) =>


      this.setState({ orders: orders })



    );

  }





  render() {
    console.log(this.state.orders);

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

        <OrdersTable orders={this.state.orders} />
      </Box>


    );
  }
}


