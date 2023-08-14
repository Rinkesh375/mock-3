import { Flex } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import React from 'react';

const Pagination = ({page,updatePage,totalPage}) => {
  return (
       <Flex  style={{justifyContent:"space-between"}} m="1rem">
      <Button colorScheme='teal' size='lg' isDisabled={page===0} onClick={()=>updatePage(-20)}>Previous</Button>

      <Button colorScheme='teal' size='lg' onClick={()=>updatePage(20)} isDisabled={Math.ceil(totalPage/20) === page}>Next</Button>
       </Flex>
  );
}

export default Pagination;
