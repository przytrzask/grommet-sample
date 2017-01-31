import React, { Component } from 'react';

import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import Footer from 'grommet/components/Footer';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Select from 'grommet/components/Select';
import ListItem from 'grommet/components/ListItem';
import List from 'grommet/components/List';

import Legend from 'grommet/components/Legend';
// import Split from 'grommet/components/Split';
// import Sidebar from 'grommet/components/Sidebar';

import Heading from 'grommet/components/Heading';
// import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
// import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
// import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';
import DateTime from 'grommet/components/DateTime';







export default class OrdersReport extends Component {

  // <EditIcon onClick={props.edit.bind(this, user.id)} />


  constructor() {
    super();


    this._downloadReport = this._downloadReport.bind(this)

  }

  _downloadReport() {
    alert('download started');
  }



  render() {

    return (





      <Box colorIndex="light-2">
        <Header fill={true} pad={{ horizontal: "small", vertical: "medium" }}
          justify="between" size="large" >
          <Box direction="row" align="center" pad={{ between: 'small' }}
            responsive={false}>
            <Anchor icon={<LinkPreviousIcon />} path="/"
              a11yTitle="Return" />
            <Heading tag="h3" margin="none">
              <strong>Zamówienia</strong>
            </Heading>
          </Box>

        </Header>
        <Box direction="row" justify="center" >
          <Box basis="medium" direction="column">

            <Form>



              <FormFields>

                <fieldset>
                  <FormField label='Layot Karty' >
                    <TextInput suggestions={["podpowiedź1", "podpowiedź2", "podpowiedź3", "podpowiedź4"]} />
                  </FormField>
                  <FormField label='Kontrahent'
                    >

                    <Select placeHolder='Search'
                      options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                      value={undefined}
                      />
                  </FormField>

                  <FormField label='Proces'
                    >
                    <Select placeHolder='Search'
                      options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                      value={undefined}
                      />
                  </FormField>
                  <FormField label='Typ Karty'
                    >
                    <Select placeHolder='Search'
                      options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                      value={undefined}
                      />

                  </FormField>



                </fieldset>



              </FormFields>

              <Footer full={true} alignContent="start" justify="between" >
                <span />
                <Box pad='medium'>
                  <Button type="submit" primary={true} label="Zapisz Filtry"
                    />
                </Box>

              </Footer>


            </Form>
          </Box>
          <Box basis="medium" colorIndex="light-2" direction="column"></Box>

          <Form>



            <FormFields>

              <fieldset>
                <FormField label='PLU' >
                  <TextInput suggestions={["podpowiedź1", "podpowiedź2", "podpowiedź3", "podpowiedź4"]} />
                </FormField>
                <FormField label='Symbol' >
                  <TextInput suggestions={["podpowiedź1", "podpowiedź2", "podpowiedź3", "podpowiedź4"]} />
                </FormField>
                <FormField label='Promocja' >
                  <TextInput suggestions={["podpowiedź1", "podpowiedź2", "podpowiedź3", "podpowiedź4"]} />
                </FormField>              </fieldset>



            </FormFields>




          </Form>

        </Box>
        <List>
          <ListItem justify='between' alignContent="around"
            separator='horizontal'>
            <span>
              Zestawienie Kart przedawnionych na dany dzień
    </span>
            <DateTime id='id'
              name='name'
              format='D/M/YYYY'
              />
            <Button primary={true} label="Pobierz"
              />
          </ListItem>
          <ListItem justify='between' alignContent="around"
            separator='horizontal'>
            <span>
              Zestawienie Kart przedawnionych w danym okresie
    </span>
            <DateTime id='i33'
              name='name'
              format='D/M/YYYY'
              />
            <DateTime id='44ssd'
              name='name'
              format='D/M/YYYY'
              />
            <Button primary={true} label="Pobierz"
              />
          </ListItem>
          <ListItem justify='between' alignContent="around"
            separator='horizontal'>
            <span>
              Zestawienie Aktywnych kart na dany dzień
    </span>
            <DateTime id='id'
              name='name'
              format='D/M/YYYY'
              />
            <Button primary={true} onClick={this._downloadReport} label="Pobierz"
              />
          </ListItem>
        </List>
      </Box>


    );

  };

}



