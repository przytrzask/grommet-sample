import React, { Component } from 'react';

// import {browserHistory} from 'react-router';
import Box from 'grommet/components/Box';
// import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import Form from 'grommet/components/Form';
// import FormFields from 'grommet/components/FormFields';
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
import Menu from 'grommet/components/Menu';
import FilterIcon from 'grommet/components/icons/base/Filter';



export default class IndexView extends Component {


  //  <Form compact={true}>
  //  </Form>
  // <Logo colorIndex='light-1' />

  constructor() {
    super();

    this.state = { sidebarActive: false };
    this._onClose = this._onClose.bind(this);
    this._toggleLayer = this._toggleLayer.bind(this);
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
        <Layer align='right' closer={true} onClose={this._onClose} >
          <Form pad="none">
            <Box pad="small">


              <Box pad="small">

                <FormField size="large" label="numer karty">
                  <TextInput />
                </FormField>
                <FormField label="Od kwoty">
                  <input type="range" />
                </FormField>
                <FormField label="Do kwoty">
                  <input type="range" />
                </FormField>

                <FormField label="Nr transakcji" >
                  <NumberInput />
                </FormField>

              </Box>

              <Box pad="small">

                <FormField label="operacja">
                  <Select placeHolder='Search'
                    options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                    />
                </FormField>
                <FormField label="spółka">
                  <Select placeHolder='Search'
                    options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                    />
                </FormField>
                <FormField label="sklep">
                  <Select placeHolder='Search'
                    options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                    />
                </FormField>
                <FormField label="użytkownik">
                  <Select placeHolder='Search'
                    options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                    />
                </FormField>



              </Box>
              <Box pad="small"
                >

                <FormField label="Nr transakcji" >
                  <DateTime />
                </FormField>
                <FormField label="Nr transakcji" >
                  <DateTime />
                </FormField>

              </Box>
              <Box pad="small"
                >


                <FormField label="użytkownik">
                  <Select placeHolder='Search'
                    options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                    />
                </FormField>


              </Box>
              <Box direction="row" justify="center">
                <Button label="Resetuj" />
                <Button label="Filtruj" />
              </Box>




            </Box>
          </Form>
        </Layer>);
    }
    return (

      <Box>
        <Header fixed={false}
          float={false}>
          <Title>
            Widok -> transakcje
  </Title>
          <Box flex={true}
            justify='end'
            direction='row'
            responsive={false}>
            <Search inline={true}
              fill={true}
              size='medium'
              placeHolder='Wyszukaj'
              dropAlign={{ "right": "right" }} />
            <Button onClick={this._toggleLayer} icon={<FilterIcon />} />

          </Box>
        </Header>


        {layer}


      </Box>





    );
  }
}

