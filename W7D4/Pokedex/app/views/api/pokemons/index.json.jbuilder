@pokemons.each do |pokemon|
  json.set! pokemon.id do
    json.partial! 'api/pokemons/pokemon', pokemon: pokemon
  end
end
