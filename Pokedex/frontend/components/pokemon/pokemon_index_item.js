import React from "react";
import { Link } from "react-router-dom";

export default ({ pokemon }) => (
  <Link to={`/pokemon/${pokemon.id}`}>
    <li>
      <img src={pokemon.image_url} />
      <p>{pokemon.name}</p>
    </li>
  </Link>
);
