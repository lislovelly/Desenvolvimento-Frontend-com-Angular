// pokemonDetails.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');

    if (pokemonId) {
        getPokemonDetails(pokemonId).then(displayPokemonDetails);
    }

    const modal = document.getElementById('pokemonDetailsModal');
    const closeButton = document.querySelector('.close');

    closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; 
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

function getPokemonDetails(pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    return fetch(url)
        .then((response) => response.json());
}

function displayPokemonDetails(pokemonDetails) {
    const pokemonDetailsContainer = document.getElementById('pokemonDetailsContainer');
    const pokemonDetailsContent = document.getElementById('pokemonDetailsContent');

    const typesHtml = pokemonDetails.types.map(type => {
        const typeClassName = `type type-${type.type.name}`;
        return `<span class="${typeClassName}">${type.type.name}</span>`;
    }).join(''); 

    const detailHtml = `
        <h2 class="name">${pokemonDetails.name}</h2>
        <img class="image" src="${pokemonDetails.sprites.other.dream_world.front_default}" alt="${pokemonDetails.name}">
        <p class="number">#${pokemonDetails.id}</p>
        <p class="types">${typesHtml}</p>
    `;

    pokemonDetailsContainer.innerHTML = detailHtml;
    pokemonDetailsContent.classList.add(`type-${pokemonDetails.types[0].type.name}`);
    
    
}









