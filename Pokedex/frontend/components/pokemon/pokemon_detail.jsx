import React from "react";

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPokemonDetails(this.props.match.params.pokemonId);
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
      <div className="pokemon-detail">
        <img src={pokemon.img_url} />
        <h2>{pokemon.name}</h2>
        <p>Type: {pokemon.poke_type}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Moves: {pokemon.moves.join(", ")}</p>
      </div>
    );
  }
}

export default PokemonDetail;
