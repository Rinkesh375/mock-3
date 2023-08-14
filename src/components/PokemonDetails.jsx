import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {  Box, Flex, Heading, Spacer, Text, Image, Stack, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, StarIcon } from '@chakra-ui/icons';


const PokemonDetails = () => {
  const { pokemon_name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
      .then(response => response.json())
      .then(data => setPokemonDetails(data));
  }, [pokemon_name]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(pokemon_name));
  }, [pokemon_name]);

  const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter(name => name !== pokemon_name);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      favorites.push(pokemon_name);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  if (!pokemonDetails) {
    return <Text>Loading...</Text>;
  }

  return (
        <>
      <Box p={4}>
        <Flex align="center">
          <Heading size="lg">Pokémon App</Heading>
          <Spacer />

        </Flex>
      </Box>
      <Box p={4}>
        <Link to="/">
          <IconButton icon={<ChevronLeftIcon />} colorScheme="blue" aria-label="Go back" />
        </Link>
        <Heading size="lg" my={4}>{pokemonDetails.name}</Heading>
        <Image src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} boxSize="200px" mx="auto" />
        <Stack spacing={2} mt={4}>
          <Text>ID: {pokemonDetails.id}</Text>
          <Text>Base Experience: {pokemonDetails.base_experience}</Text>
          <Text>Height: {pokemonDetails.height / 10} m</Text>
          <Text>Weight: {pokemonDetails.weight / 10} kg</Text>
          <Text>HP: {pokemonDetails.stats[0].base_stat}</Text>
          <Text>Attack: {pokemonDetails.stats[1].base_stat}</Text>
          <Text>Defense: {pokemonDetails.stats[2].base_stat}</Text>
          <Text>Special-Attack: {pokemonDetails.stats[3].base_stat}</Text>
          <Text>Special-Defense: {pokemonDetails.stats[4].base_stat}</Text>
          <Text>Speed: {pokemonDetails.stats[5].base_stat}</Text>
          <Text>Abilities: {pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}</Text>
          <Text>Moves: {pokemonDetails.moves.map(move => move.move.name).join(', ')}</Text>
          <IconButton
            icon={isFavorite ? <StarIcon color="yellow.500" /> : <StarIcon />}
            colorScheme="blue"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            onClick={handleFavoriteToggle}
          />
        </Stack>
      </Box>
      </>
  );
};

export default PokemonDetails;