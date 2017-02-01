import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// import {browserHistory} from 'react-router';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
// import TextInput from 'grommet/components/TextInput';
import Form from 'grommet/components/Form';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import FormFields from 'grommet/components/FormFields';
import Footer from 'grommet/components/Footer';
import Anchor from 'grommet/components/Anchor';
import CloseIcon from 'grommet/components/icons/base/Close';
// import Title from  'grommet/components/Title';
import Button from 'grommet/components/Button';




export default class CancelTransaction extends Component {




  render() {

    

    return (

      <Article align="center" pad={{ horizontal: 'medium' }} primary={true}>
        <Form onSubmit={this._onSubmit}>

          <Header size="large" justify="between" pad="none">
            <Heading tag="h2" margin="none" strong={true}>
             Anuluj Transakcje

            </Heading>
            <Anchor icon={<CloseIcon />} onClick={browserHistory.goBack}
              a11yTitle='Close Add Virtual Machine Form' />
          </Header>

          <FormFields>

            <fieldset>
              <FormField label='Numer Karty'
               >
                <TextInput/>
              </FormField>
              <FormField label='Numer Transakcji'
                >
                <TextInput />
              </FormField>
              
             

            </fieldset>



          </FormFields>

          <Footer full={true} >
            <span />
            <Box pad='medium'>
            <Button fill={true} type="submit" primary={true} label="Edytuj"
              onClick={this._onSubmit} />
              </Box>
             
          </Footer>
        </Form>

      </Article>

    );
  }
}

