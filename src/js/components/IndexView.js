import React, { Component } from 'react';

// import {browserHistory} from 'react-router';
import Box from 'grommet/components/Box';
// import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import Form from 'grommet/components/Form';
// import FormFields from 'grommet/components/FormFields';
import Sidebar from 'grommet/components/Sidebar';
import FormField from 'grommet/components/FormField';
import NumberInput from 'grommet/components/NumberInput';
import DateTime from 'grommet/components/DateTime';
import Split from 'grommet/components/Split';
import Select from 'grommet/components/Select';
// import Article from 'grommet/components/Article';
import CommonHeader from './CommonHeader';
import Header from 'grommet/components/Header';
// import Title from  'grommet/components/Title';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Paragraph from 'grommet/components/Paragraph';
import Layer from 'grommet/components/Layer';

export default class IndexView extends Component {


  //  <Form compact={true}>
  //  </Form>
  // <Logo colorIndex='light-1' />

  constructor() {
    super();

    this.state = { sidebarActive: true };
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    this.setState({ sidebarActive: false });
    
  }

  render() {

    let layer = this.state.sidebarActive;
    if (this.state.sidebarActive){ layer = (
      <Layer align='right' closer={true} onClose={this._onClose} >
        <Form pad="none">
          <Box pad="small">


            <Box pad="small">

              <FormField size="large" label="numer karty">
                <TextInput />
              </FormField>
              <FormField label="Od kwoty">
                <input type="range"></input>
              </FormField>
              <FormField label="Do kwoty">
                <input type="range"></input>
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
            <Button  label="Resetuj"/>
            <Button label="Filtruj" />
            </Box>




            </Box>
          </Form>
          </Layer>)}
    return (

      <Box>
      
      Widok -> transakcje 
                                      {layer}


          </Box>

        
       


        );
  }
}


