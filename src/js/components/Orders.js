import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Box from 'grommet/components/Box';
import { getOrders } from '../store';
import OrdersTable from './OrdersTable';



// import UsersTable from './UsersTable';



export default class Orders extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
      
      orders: [],
      headers: []


    };


  }

  

  componentDidMount() {

    getOrders().then((orders) =>

      
      this.setState({ orders: orders.data, headers: orders.headers })



    );

  }





  render() {
    console.log(this.state.orders);

    return (
      <Box  responsive={false} colorIndex="neutral-1">
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

        <OrdersTable headers={this.state.headers} orders={this.state.orders} />
      </Box>


    );
  }
}


