import React from 'react';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import AlertIcon from 'grommet/components/icons/base/Alert';
import Heading from 'grommet/components/Heading';


const NotFound = () => {
  return (
    <Box alignSelf="center" justify="center" align="center" pad="medium">

      <AlertIcon size="huge" />
      <Heading strong={false}
        uppercase={true}
        truncate={false}
        align='start'>
        Błąd 404
</Heading>
    </Box>


  );


};

export default NotFound;
