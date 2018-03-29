import { connect } from "react-redux";
import { selectItemsForPokemon } from "../../reducers/selectors";
import { fetchPokemonDetails } from "../../actions/pokemon_actions";
import PokemonDetail from "./pokemon_detail";

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemons[ownProps.match.params.pokemonId],
    items: selectItemsForPokemon(state, ownProps.match.params.pokemonId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPokemonDetails: () => dispatch(fetchPokemonDetails(ownProps.pokemonId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
