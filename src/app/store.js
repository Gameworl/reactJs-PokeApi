import { configureStore } from '@reduxjs/toolkit';
import allPokemonSlice from "../features/redux/AllPokemonSlice";
import detailsPokemonSlice from "../features/redux/DetailsPokemonSlice";
import randomPokemonSlice from "../features/redux/RandomPokemonSlice";
import paginationPokemonSlice from "../features/redux/PaginationPokemonSlice";
import favoriePokemon from "../features/redux/FavoriePokemonSlice";
export default configureStore({
  reducer: {
    allPokemon: allPokemonSlice,
    detailsPokemon: detailsPokemonSlice,
    randomPokemon: randomPokemonSlice,
    paginationPokemon: paginationPokemonSlice,
    favoriePokemon: favoriePokemon
  },
});
