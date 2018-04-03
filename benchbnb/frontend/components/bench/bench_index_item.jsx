import React from "react";

const BenchIndexItem = ({ bench }) => (
  <li>
    <p>Latitude: {bench.lat}</p>
    <p>Longitude: {bench.lng}</p>
    <p>description: {bench.description}</p>
  </li>
);

export default BenchIndexItem;
