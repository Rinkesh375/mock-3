import { Link } from 'react-router-dom';
import React from 'react';
import { GridItem,HStack,Heading,Text,Flex ,VStack} from '@chakra-ui/react';


const PokemonCard = ({index,name,url}) => {
  return (
      <GridItem  border="1px solid black"> <Link to={`/pokemon/${name}`}>
      <VStack >
        <Heading as="h3" size="lg">{name}</Heading>
        <Text>#{index+1}</Text>
      </VStack>

      </Link></GridItem>
     
  );
}

export default PokemonCard;
