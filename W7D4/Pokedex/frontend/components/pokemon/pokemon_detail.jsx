import React from "react";
import { Route } from "react-router-dom";
import ItemDetail from "../items/item_detail";

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPokemonDetails(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.pokemonId !== nextProps.match.params.pokemonId
    ) {
      nextProps.fetchPokemonDetails(nextProps.match.params.pokemonId);
    }
  }

  render() {
    const { pokemon, items } = this.props;
    if (pokemon === undefined || pokemon.moves === undefined)
      return <div className="loading" />;
    return (
      <div className="pokemon-detail">
        <img src={pokemon.img_url} />
        <h2>{pokemon.name}</h2>
        <p>Type: {pokemon.poke_type}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Moves: {pokemon.moves.join(", ")}</p>
        <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>
        <Route
          path="/pokemon/:pokemonId/items/:itemId"
          render={props => (
            <ItemDetail items={items} itemId={props.match.params.itemId} />
          )}
        />
      </div>
    );
  }
}

export default PokemonDetail;
