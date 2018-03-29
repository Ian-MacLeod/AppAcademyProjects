import _ from "lodash";

export const selectAllPokemons = state => _.values(state.entities.pokemons);

export const selectItemsForPokemon = (state, pokemonId) => {
  let pokemon = state.entities.pokemons[parseInt(pokemonId)];
  if (pokemon === undefined || pokemon.item_ids === undefined) return [];
  let itemIds = pokemon.item_ids;
  return itemIds.map(itemId => state.entities.items[itemId]);
};
