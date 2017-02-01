import React, { Component } from 'react';

// import {browserHistory} from 'react-router';
import Box from 'grommet/components/Box';
// import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import NumberInput from 'grommet/components/NumberInput';
import DateTime from 'grommet/components/DateTime';
import Select from 'grommet/components/Select';
// import Title from  'grommet/components/Title';
import Button from 'grommet/components/Button';
import Layer from 'grommet/components/Layer';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Sidebar from 'grommet/components/Sidebar';
import Table from 'grommet/components/Table';
import Label from 'grommet/components/Label';
import FilterIcon from 'grommet/components/icons/base/Filter';
import TransactionTable from './TransactionTable';
import TransactionTableBody from './TransactionsBody';


// import Anchor from 'grommet/components/Anchor';
// import NavAnchor from './NavAnchor';
import { getColumns, getRows } from '../store';



export default class IndexView extends Component {



  constructor() {
    super();

    this.state = {
      sidebarActive: false,
      columns: [],
      rows: []
    };
    this._onClose = this._onClose.bind(this);
    this._toggleLayer = this._toggleLayer.bind(this);
  }

  componentDidMount() {
    getColumns().then((columns) =>

      this.setState({ columns: columns })

    );

    getRows().then((rows) =>

      this.setState({ rows: rows })


    );


  }

  _onClose() {
    this.setState({ sidebarActive: false });

  }

  _toggleLayer() {
    this.setState({ sidebarActive: true });
  }

  render() {

    let layer = this.state.sidebarActive;
    if (this.state.sidebarActive) {
      layer = (
       
        <Layer flush={true} peek={true} align='left' closer={true} onClose={this._onClose}  >
        <Sidebar pad="medium" colorIndex='light-2'>
          
            <Header>
              <Title>
                Filtruj
            </Title>
            </Header>
            
        


        <Box pad="small" size="medium" 
          
          wrap={false}
          reverse={false}
          pad='none'
          margin='none'
          colorIndex='light-2'
          >
          
          <Box direction='row'
            justify='between'
            align='center'

            pad='none'
            margin='none'
            colorIndex='light-2'
            >
            <Label size="small">
              nanannana
</Label>
            <FormField size="medium">
              <NumberInput />
            </FormField>
          </Box>

          <Box direction='row'
            justify='between'
            align='center'

            pad='none'
            margin='none'
            colorIndex='light-2' >
            <Label size="small">
              nanannana
</Label>
            <FormField size="medium">
             <Select placeHolder='Search'
              options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
              />
            </FormField>
            
          </Box>
          <Box direction='row'
            justify='between'
            align='center'

            pad='none'
            margin='none'
            colorIndex='light-2' >
            <Label size="medium" margin="none">
              Numer Karty
</Label>
            <FormField size="medium">
             <TextInput/>
            </FormField>
            
          </Box>


        </Box>
      

      <Box pad="small" size="medium">
        


        <Box size="medium" 
          align='between'
          wrap={false}
          reverse={false}
          pad='none'
          margin='small'
          colorIndex='light-2'
          >
         
          <Box direction='row'
            justify='between'
            align='center'

            pad='none'
            margin='none'
            colorIndex='light-2'
            >
            <Label size="small">
              naa
</Label>
            <FormField size="small">
              <NumberInput />
            </FormField>
          </Box>

          <Box direction='row'
            justify='between'
            align='center'

            pad='none'
            margin='none'
            colorIndex='light-2' >
            <Label size="small">
              nanannana
</Label>
            <FormField size="medium">
             <Select placeHolder='Wybierz'
              options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
              />
            </FormField>
            
          </Box>
          <Box direction='row'
            justify='between'
            align='center'

            pad='none'
            margin='none'
            colorIndex='light-2' >
            <Label size="small">
              nanannana
</Label>
            <FormField size="medium">
             <TextInput/>
            </FormField>
            
          </Box>


        </Box>

        
      </Box>
      
      </Sidebar>
        </Layer>
        );
    }
    return (

      <Box responsive={false}
        colorIndex="light-2"
        >
        <Header fixed={false}
          float={false}>
          <Button onClick={this._toggleLayer} icon={<FilterIcon />} />
          <Title>
            Transakcje

  </Title>

          <Search inline={true}
            fill={true}

            size='medium'
            placeHolder='Wyszukaj'
            />




        </Header>
        <Table scrollable={true} selectable={true}>
          <TransactionTable color="brand" columns={this.state.columns} />
          <TransactionTableBody color="brand" rows={this.state.rows} />
        </Table>

        {layer}



      </Box>





    );
  }
}


