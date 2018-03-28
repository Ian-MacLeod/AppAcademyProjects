import _ from "lodash";

export const selectAllPokemons = state => _.values(state.entities.pokemons);
