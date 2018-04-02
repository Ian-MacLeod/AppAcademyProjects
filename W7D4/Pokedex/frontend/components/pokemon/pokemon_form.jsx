import React from "react";
import { withRouter } from "react-router-dom";

const POKE_TYPES = [
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel"
].sort();

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      attack: "",
      defense: "",
      poke_type: "default",
      image_url: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPokemon(this.state).then(newPokemon => {
      this.props.history.push(`pokemon/${newPokemon.id}`);
    });
  }

  render() {
    return (
      <form className="create-pokemon-form" onSubmit={this.handleSubmit}>
        <ul className="pokemon-errors">
          {this.props.errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label>
          Name
          <input
            onChange={this.update("name")}
            type="text"
            value={this.state.name}
          />
        </label>
        <label>
          Attack
          <input
            onChange={this.update("attack")}
            type="number"
            value={this.state.attack}
          />
        </label>
        <label>
          Defense
          <input
            onChange={this.update("defense")}
            type="number"
            value={this.state.defense}
          />
        </label>
        <label>
          Type
          <select
            value={this.state.poke_type}
            onChange={this.update("poke_type")}
          >
            <option value="default" disabled={true}>
              Select One
            </option>
            {POKE_TYPES.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          Image Url
          <input
            onChange={this.update("image_url")}
            type="text"
            value={this.state.image_url}
          />
        </label>
        <input type="submit" value="Create Pokemon" />
      </form>
    );
  }
}

export default withRouter(PokemonForm);
