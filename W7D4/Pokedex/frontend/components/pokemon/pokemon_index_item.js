import React from "react";
import { Link } from "react-router-dom";

export default ({ pokemon }) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      <img src={pokemon.image_url} />
      <p>{pokemon.name}</p>
    </Link>
  </li>
);
