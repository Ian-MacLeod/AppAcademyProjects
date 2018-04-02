import { connect } from "react-redux";
import { selectAllPokemons } from "../../reducers/selectors";
import { fetchAllPokemon } from "../../actions/pokemon_actions";
import PokemonIndex from "./pokemon_index";

const mapStateToProps = state => ({
  pokemons: selectAllPokemons(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllPokemon: () => dispatch(fetchAllPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
