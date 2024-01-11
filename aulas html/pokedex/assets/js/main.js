const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

let propsIndex = 1;

function convertPokemonToLi(pokemon) {
    const propsId = `props-${propsIndex}`; 
    propsIndex++;
    const typeClasses = pokemon.types.map((type) => `type-${type}`).join(' ');

    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            <button class="btn-pokemon" onclick="viewProps('${propsId}')">Detalhes</button>
            <div class="props ${typeClasses}" id="${propsId}">
                <div class="content-props">
                <img class="poke-img-props" src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                <table class="table-props">
                    <tr>
                        <td>Nome:</td>
                        <td>${pokemon.name}</td>
                    </tr>
                    <tr>
                        <td>Número:</td>
                        <td>${pokemon.number}</td>
                    </tr>
                    <tr>
                        <td>Tipo:</td>
                        <td>${pokemon.types.map((type) => type).join(', ')}</td>
                    </tr>
                    <tr>
                        <td>XP Base:</td>
                        <td>${pokemon.xp}</td>
                    </tr>
                    <tr>
                        <td>Peso:</td>
                        <td>${pokemon.weight / 10.0} quilos</td>
                    </tr>
                    <tr>
                        <td>Altura:</td>
                        <td>${pokemon.height / 10.0} metros</td>
                    </tr>
                    <tr>
                        <td>Habilidades:</td>
                        <td>
                            <ul>
                        ${pokemon.abilities.map((ability) => `<li>${ability}</li>`).join('')}
                            </ul>
                        </td>
                    </tr>
                </table>
                <div class="div-close">
                    <button class="btn-close" onclick="noViewProps('${propsId}')">Voltar</button>
                </div>
            </div>
        </li>
    `;
}

function viewProps(propsId) {
    var prop = document.getElementById(propsId);
    prop.style.display = "block";
}

function noViewProps(propsId) {
    var prop = document.getElementById(propsId);
    prop.style.display = "none";
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
