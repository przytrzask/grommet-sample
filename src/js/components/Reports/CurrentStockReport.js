
import React from 'react';

// import Chart, { Base, Area, Line, Layers } from 'grommet/components/chart/Chart';
import Legend from 'grommet/components/Legend';
// import Split from 'grommet/components/Split';
// import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import Footer from 'grommet/components/Footer';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Heading from 'grommet/components/Heading';
// import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
// import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
// import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';






const CurrentStockReport = () => {
  return (
    <Box colorIndex="light-2">
      <Header fill={true} pad={{ horizontal: "small", vertical: "medium" }}
        justify="between" size="large" >
        <Box direction="row" align="center" pad={{ between: 'small' }}
          responsive={false}>
          <Anchor animateIcon={true} icon={<LinkPreviousIcon />} path="/"
            a11yTitle="Return" />
          <Heading tag="h3" margin="none">
            <strong>Aktualny Stock</strong>
          </Heading>
        </Box>

      </Header>
      <Section align="center" full="horizontal" pad="none">
        <Form>

          

          <FormFields>

            <fieldset>
              <FormField label='Layot Karty' >
                <TextInput suggestions={["podpowiedź1","podpowiedź2","podpowiedź3","podpowiedź4"]} />
              </FormField>
              <FormField label='PLU'
                >
                <TextInput />
              </FormField>
              
             

            </fieldset>



          </FormFields>

          <Footer full={true} alignContent="start" justify="between" >
            <span />
            <Box pad='medium'>
            <Button  primary={true} label="Zapisz Filtry"
               />
              </Box>
              
          </Footer>
          <Heading align="center" tag="h3">
      Zestawienie kart preaktywowanych
    </Heading>
    <Box pad='medium'>
            <Button  primary={true} label="Pobierz"
               />
              </Box>
        </Form>


      </Section>
    </Box>

  );

};

export default CurrentStockReport;
