export const fetchAllPokemon = () =>
  $.ajax({
    url: "/api/pokemons/",
    method: "GET"
  });

export const fetchPokemonDetail = id =>
  $.ajax({
    url: `/api/pokemons/${id}`,
    method: "GET"
  });
