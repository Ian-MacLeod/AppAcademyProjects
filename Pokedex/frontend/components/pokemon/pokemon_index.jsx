import React from "react";
import PokemonIndexItem from "./pokemon_index_item";

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllPokemon();
  }

  render() {
    return (
      <ul className="pokemon-index">
        {this.props.pokemons.map(pokemon => (
          <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    );
  }
}

export default PokemonIndex;
