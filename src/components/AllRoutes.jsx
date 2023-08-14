import React from 'react';
import { Route,Routes } from 'react-router-dom';
import PokePage from '../Pages/PokePage';
import TypesPage from '../Pages/TypesPage';
import FavoritesPage from '../Pages/FavoritesPage';
import PokemonDetails from './PokemonDetails';
import TypesDetails from './TypeDetails';
/*
- Pokémon Page (/)
- Types Page (/types)
- Favorites Page (/favorites)
*/

const AllRoutes = () => {
  return (
      <Routes>
       <Route path='/' element={<PokePage/>}/>
       <Route path='/types' element={<TypesPage/>}/>
       <Route path='/favorites' element={<FavoritesPage/>}/>
       <Route path='/pokemon/:pokemon_name' element={<PokemonDetails/>}/>
       <Route path="/types/:type_id" element={<TypesDetails/>}/>
      </Routes>
  );
}

export default AllRoutes;
