import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';
import Heading from 'grommet/components/Heading';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Paragraph from 'grommet/components/Paragraph';
import CheckBox from 'grommet/components/CheckBox';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';



import { getContractors } from '../store';
import ContractorsTable from './ContractorsTable';



export default class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      deleteLayer: false,
      contractorsHeaders: ['sklep','symbol','nip','adres','kod_pocztowy','miasto','osoba_kontaktowa','telefon',"   "],
      contractors: []
      


    };

    this._onClickDelete = this._onClickDelete.bind(this);
    // this._onAccessChange = this._onAccessChange.bind(this);
    // this._onEdit = this._onEdit.bind(this);
  }

  componentDidMount() {
    
    getContractors().then((contractors) =>

      this.setState({ contractors: contractors })


    );


  }

  _onClickDelete(){

    this.setState({deleteLayer: !this.state.deleteLayer})
    
  }

  


  render() {
    let deleteLayer;
    if(this.state.deleteLayer) {

     deleteLayer =  (<Layer closer={true}
  onClose={this._onClickDelete}>
  <Form>
  <Header>
    <Heading>
      Usuwanie Użytkownika
    </Heading>
  </Header>
  <FormFields>
    <fieldset>
      <Paragraph>
        Użytkownik zostanie usunięty na trwałe
      </Paragraph>
      <FormField>
        <CheckBox id='agree'
          name='agree'
          label='Potwierdzam usunięcie użytkownika' />
      </FormField>
    </fieldset>
  </FormFields>
  <Footer pad={{"vertical": "medium"}}>
    <Button label='Usuń'
      type='submit'
      primary={true}
      />
  </Footer>
</Form>
  
     </Layer>)
    }
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
        <ContractorsTable deleteLayer={this._onClickDelete} headers={this.state.contractorsHeaders} contractors={this.state.contractors}  />
        {deleteLayer}
      </Box>


    );
  }
}


