import React, { Component} from 'react';
// import {browserHistory} from 'react-router';
import Box from 'grommet/components/Box';
// import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Sidebar from 'grommet/components/Sidebar';
import FormField from 'grommet/components/FormField';
import NumberInput from 'grommet/components/NumberInput';
import DateTime from 'grommet/components/DateTime';



export default class IndexView extends Component {




  render () {
    return (
      
      <Sidebar>
      <Box pad="small"
      colorIndex='light-2'>
  <Form compact={true}>
  <Box  pad="small"
      colorIndex=''>
  <FormFields>
    <FormField size="large" label="numer karty">
    <TextInput/>
    </FormField>
    <FormField label="Od kwoty">
    <NumberInput/>
    </FormField>
    <FormField label="Do kwoty">
    <NumberInput/>
    </FormField>
  </FormFields>
  <FormField label="Nr transakcji" >
    <NumberInput/>
    </FormField>
    </Box>
    <Box  pad="small"
      colorIndex=''>
  <FormFields>
    <FormField label="numer karty">
    <TextInput/>
    </FormField>
    <FormField label="Od kwoty">
    <NumberInput/>
    </FormField>
    <FormField label="Do kwoty">
    <NumberInput/>
    </FormField>
  </FormFields>
  <FormFields>
  <FormField label="Nr transakcji" >
    <DateTime/>
    </FormField>
    </FormFields>
    </Box>
  
</Form>
</Box>
</Sidebar>

      
    );
  }
}

