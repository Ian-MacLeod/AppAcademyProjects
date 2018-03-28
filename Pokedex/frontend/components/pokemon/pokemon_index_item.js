import React from "react";

export default ({ pokemon }) => (
  <li>
    <p>{pokemon.name}</p>
    <img src={pokemon.image_url} />
  </li>
);
