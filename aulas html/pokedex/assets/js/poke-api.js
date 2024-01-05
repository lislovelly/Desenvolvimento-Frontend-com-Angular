const pokeApi = {}

function convertPokeApoDetalToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}


pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((Response) => Response.json())
    .then(convertPokeApoDetalToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
//return fetch(url) requisição para trazer a lista de pokemons 
//converteu essa lista pra json
//e transformar essa lista de pokemons em uma busca por detalhes
//de promessas dos detalhes dos pokemons
//then((detailRequests) requisiçoes de detalhes, 
//Promise.all(detailRequests)) lista de promessas esperando ser resolvida
    return fetch(url)
    .then((Response) => Response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
        
}

//Promise.all esperando que todas essas promessas terminem
//.then((results) quando elas terminarem vai cahmar o then com os resultados
Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4'),
    fetch('https://pokeapi.co/api/v2/pokemon/5'),
]).then((results) => {
    console.log(results)
})