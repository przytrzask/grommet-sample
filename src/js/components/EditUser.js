import React, { Component } from 'react';

// import {browserHistory} from 'react-router';
import Article from 'grommet/components/Article';
import TextInput from 'grommet/components/TextInput';
import Form from 'grommet/components/Form';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Footer from 'grommet/components/Footer';
import Anchor from 'grommet/components/Anchor';
import CloseIcon from 'grommet/components/icons/base/Close';
// import Title from  'grommet/components/Title';
import Button from 'grommet/components/Button';




export default class EditUser extends Component {




  render() {

    console.log(this.props);

    return (

      <Article align="center" pad={{ horizontal: 'medium' }} primary={true}>
        <Form onSubmit={this._onSubmit}>

          <Header size="large" justify="between" pad="none">
            <Heading tag="h2" margin="none" strong={true}>
              Edytuj Użytkownika

            </Heading>
            <Anchor icon={<CloseIcon />} path="/users"
              a11yTitle='Close Add Virtual Machine Form' />
          </Header>

          <FormFields>

            <fieldset>
              <FormField label='Imię'
                error='przykład błędu'>
                <TextInput />
              </FormField>
              <FormField label='Nazwisko'
                >
                <TextInput />
              </FormField>
              <FormField label='Login'
                >
                <TextInput />
              </FormField>
              <FormField label='Zmień hasło'
                >
                <input type="password" />
              </FormField>
              <FormField label='Powtórz Hasło'
                >
                <input type="password" />
              </FormField>
              <FormField label='telefon'
                error='wymagane'>
                <TextInput />
              </FormField>

            </fieldset>



          </FormFields>

          <Footer full={true} align="stretch" >
            <span />
            <Button type="submit" primary={false} label="Edytuj"
              onClick={this._onSubmit} />
            <Button type="submit" primary={false} label="Anuluj"
              onClick={this._onSubmit} />
          </Footer>
        </Form>

      </Article>

    );
  }
}


