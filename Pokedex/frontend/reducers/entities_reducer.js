import { combineReducers } from "redux";
import pokemonReducer from "./pokemon_reducer";

const entitiesReducer = combineReducers({
  pokemons: pokemonReducer
});

export default entitiesReducer;
