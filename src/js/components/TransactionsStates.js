
import React from 'react';

import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';






const TransactionsStates = () => {

  // <EditIcon onClick={props.edit.bind(this, user.id)} />







  return (

    <Box>
      <List selectable={true}>
        <ListItem justify='between' alignContent="around"
          separator='horizontal'>
          <span>

          </span>


        </ListItem>
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
    </span>



        </ListItem>
      </List>
    </Box>)

}

export default TransactionsStates;
