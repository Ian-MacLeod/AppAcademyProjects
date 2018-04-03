# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.create!([
  {
    description: "#1 bench",
    lat: 37.784679,
    lng: -122.428608
  },
  {
    description: "#2 bench",
    lat: 37.791773,
    lng: -122.426474
  },
  {
    description: "#3 bench",
    lat: 37.779498,
    lng: -122.444083
  },
  {
    description: "worst bench",
    lat: 37.776698,
    lng: -122.417094
  }
])
