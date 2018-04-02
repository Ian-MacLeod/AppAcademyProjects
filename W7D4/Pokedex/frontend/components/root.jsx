import React from "react";
import { Provider } from "react-redux";
import { Route, HashRouter, Switch } from "react-router-dom";
// import App from "./app";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import PokemonDetailContainer from "./pokemon/pokemon_detail_container";
import PokemonFormContainer from "./pokemon/pokemon_form_container";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Switch>
          <Route
            path="/pokemon/:pokemonId"
            component={PokemonDetailContainer}
          />
          <Route path="/" component={PokemonFormContainer} />
        </Switch>
        <Route path="/" component={PokemonIndexContainer} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
