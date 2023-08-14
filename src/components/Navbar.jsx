import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex justifyContent="space-between">
           <Button border="none" as={Link} to="/" colorScheme="blue" variant="outline" mr={2}>Pokémon Page</Button>
          <Button border="none" as={Link} to="/types" colorScheme="blue" variant="outline" mr={2}>Types Page</Button>
          <Button border="none" as={Link} to="/favorites" colorScheme="blue" variant="outline">Favorites Page</Button>

    </Flex>
  );
}

export default Navbar;
