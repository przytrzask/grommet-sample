
import React from 'react';


// import Legend from 'grommet/components/Legend';
// import Split from 'grommet/components/Split';
// import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
// import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
// import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
// import Layer from 'grommet/components/Layer';
// import Section from 'grommet/components/Section';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';






const SoldCardsReport = () => {

  // <EditIcon onClick={props.edit.bind(this, user.id)} />




  


  return (
    
    
          
          
          
        <Box colorIndex="light-2">
          <Header fill={true} pad={{horizontal: "small", vertical: "medium"}}
            justify="between" size="large" >
            <Box direction="row" align="center" pad={{between: 'small'}}
              responsive={false}>
              <Anchor icon={<LinkPreviousIcon />} path="/"
                a11yTitle="Return" />
              <Heading tag="h3" margin="none">
                <strong>Sprzedane Karty</strong>
              </Heading>
            </Box>
            
          </Header>

</Box>

 
  );

};

export default SoldCardsReport;

