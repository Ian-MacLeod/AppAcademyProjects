import React from "react";
import { Provider } from "react-redux";
import { Route, HashRouter } from "react-router-dom";
// import App from "./app";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";

const Root = ({ store }) => (
  <Provider store={store}>
    <PokemonIndexContainer />
  </Provider>
);

export default Root;
