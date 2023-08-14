import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Heading, Text, IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';



const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (pokemonName) => {
    const updatedFavorites = favorites.filter(name => name !== pokemonName);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <Box p={4}>
        <Heading size="lg">Favorites Page</Heading>
      
        {favorites.length === 0 ? (
          <Text>No favorite Pokémon yet.</Text>
        ) : (
          favorites.map(pokemonName => (
            <Box key={pokemonName} borderWidth="1px" p={4} borderRadius="md" mb={2}>
              <Text>{pokemonName}</Text>
              <IconButton
                icon={<StarIcon color="yellow.500" />}
                colorScheme="blue"
                aria-label="Remove from favorites"
                onClick={() => removeFromFavorites(pokemonName)}
              />
            </Box>
          ))
        )}
      </Box>
    </>
  );
};

export default FavoritesPage;
