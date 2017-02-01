import React from 'react';
import Box from 'grommet/components/Box';
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
        Niepoprawny adres strony
</Heading>
    </Box>


  );


};

export default NotFound;
