import _ from "lodash";

export const selectAllPokemons = state => _.values(state.entities.pokemons);

export const selectItemsForPokemon = (state, pokemonId) => {
  let pokemon = state.entities.pokemons[pokemonId];
  if (pokemon === undefined) return [];
  let itemIds = pokemon.items;
  return itemIds.map(itemId => state.entities.items[itemId]);
};
