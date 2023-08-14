import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';

const TypesPage = () => {
  const [typesList, setTypesList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then(response => response.json())
      .then(data => setTypesList(data.results));
  }, []);

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Types Page</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {typesList.map(type => (
          <GridItem key={type.name}>
            <Link to={`/types/${type.name}`}>
              <Box borderWidth="1px" p={4} borderRadius="md" cursor="pointer">
                {type.name}
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default TypesPage;