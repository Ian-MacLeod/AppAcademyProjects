import _ from "lodash";
import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_POKEMON
} from "../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return _.merge({}, state, action.pokemons);
    case RECEIVE_POKEMON:
      return Object.assign({}, state, { [action.pokemon.id]: action.pokemon });
    default:
      return state;
  }
};

export default pokemonReducer;
