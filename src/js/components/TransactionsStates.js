
import React from 'react';

import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
// import Form from 'grommet/components/Form';
// import FormField from 'grommet/components/FormField';
// import TextInput from 'grommet/components/TextInput';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
// import NumberInput from 'grommet/components/NumberInput';
// import Select from 'grommet/components/Select';
// import Button from 'grommet/components/Button';
// import Tile from 'grommet/components/Tile';
// import Tiles from 'grommet/components/Tiles';
// import Paragraph from 'grommet/components/Paragraph';
// import Value from 'grommet/components/Value';
// import Label from 'grommet/components/label';







const TransactionsStates = () => {

  // <EditIcon onClick={props.edit.bind(this, user.id)} />

  return (
    <Box>
      <List selectable={true}>
        <ListItem justify='between' alignContent="around"
          separator='horizontal'>
          <span>
            Zestawienie Kart przedawnionych w danym okresie
    </span>
        </ListItem>
        <ListItem justify='between' alignContent="around"
          separator='horizontal'>
          <span>
            Zestawienie Aktywnych kart na dany dzień
    </span></ListItem>
      </List>
      <Header>
        <Title>
          Filtruj
            </Title>
      </Header>
      
    </Box>);
};

export default TransactionsStates;




