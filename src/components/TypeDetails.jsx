import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {  Box, Text, Grid, GridItem,VStack ,Heading} from '@chakra-ui/react';


const TypesDetails = () => {
  const { type_id } = useParams();
  const [typeDetails, setTypeDetails] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${type_id}`)
      .then(response => response.json())
      .then(data => setTypeDetails(data));

    fetch(`https://pokeapi.co/api/v2/type/${type_id}`)
      .then(response => response.json())
      .then(data => setPokemonList(data.pokemon));
  }, [type_id]);

  return (
    
      <Box p={4}>
        <Link to="/types">Go back</Link>
        <Text fontSize="xl" fontWeight="bold" mt={4}>Pokémon of Type: {typeDetails && typeDetails.name}</Text>
        <Grid templateColumns="1fr" gap={4}>
          {pokemonList.map((pokemon,index) => (
            <GridItem key={pokemon.pokemon.name}  border="1px solid black">
              <Link to={`/pokemon/${pokemon.pokemon.name}`}>
              <VStack >
        <Heading as="h3" size="lg">{pokemon.pokemon.name}</Heading>
        <Text>#{index+1}</Text>
      </VStack>
                {/* <Box borderWidth="1px" p={4} borderRadius="md" cursor="pointer">
                  {pokemon.pokemon.name}
                </Box> */}
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
    
  );
};

export default TypesDetails;