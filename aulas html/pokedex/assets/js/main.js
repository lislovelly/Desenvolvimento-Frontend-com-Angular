
function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type"${type}>${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>               
        </li>`
}

const pokemonList = document.getElementById("pokemonList")
//pokeApi.getPokemons requisição http para buscar uma lista de pokemon
//then((pokemons = []) recebemos a lista de pokemon
//pokemons.map(convertPokemonToLi) transformanmos esses pokemons em uma lista html
//join('') concatenamos essa lista sem nehhum separador
pokeApi.getPokemons().then((pokemons = []) => { 
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
})



    





