import * as APIUtil from "../util/api_util";
import { receiveItems } from "./item_actions";
import { receivePokemonErrors } from "./error_actions";

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";

export const receiveAllPokemon = pokemons => ({
  type: RECEIVE_ALL_POKEMON,
  pokemons
});

export const receivePokemon = pokemon => ({
  type: RECEIVE_POKEMON,
  pokemon
});

// export const createPokemon = pokemon => ({
//   type: CREATE_POKEMON,
//   pokemon
// });

export const fetchAllPokemon = () => dispatch => {
  APIUtil.fetchAllPokemon().then(
    pokemons => {
      dispatch(receiveAllPokemon(pokemons));
    },
    e => console.error(e)
  );
};

export const fetchPokemonDetails = id => dispatch => {
  APIUtil.fetchPokemonDetail(id).then(
    payload => {
      dispatch(receiveItems(payload.items));
      dispatch(receivePokemon(payload.pokemon));
    },
    e => console.error(e)
  );
};

export const createPokemon = pokemon => dispatch =>
  APIUtil.createPokemon(pokemon).then(
    payload => {
      dispatch(receivePokemon(payload));
      return payload;
    },
    payload => dispatch(receivePokemonErrors(payload.responseJSON))
  );
