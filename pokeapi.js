const apiButton = document.getElementById('apiButton');
const apiData = document.getElementById('apiData')
const base_experience = document.getElementById('base_experience');

const callAPI = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            apiData.innerText = JSON.stringify(data);
            //base_experience.innerText = `Experiencia Base: ${JSON.stringify(data.base_experience)}`
        })
        .catch(e => console.error(new Error(e)));
}

apiButton.addEventListener('click', callAPI);

const buscarBtn = document.getElementById('buscarPokemon');
const inputNombre = document.getElementById('pokemonName');
const imagenPokemon = document.getElementById('imagenPokemon');
const nombrePokemon = document.getElementById('nombrePokemon');

const buscarPokemon = () => {
    const nombre = inputNombre.value.toLowerCase().trim();
    if (!nombre) {
        alert("Escribe el nombre de un Pokémon.");
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(res => {
            if (!res.ok) throw new Error("Pokémon no encontrado");
            return res.json();
        })
        .then(data => {
            nombrePokemon.innerText = `Nombre: ${data.name}`;
            base_experience.innerText = `Experiencia Base: ${data.base_experience}`;
            imagenPokemon.src = data.sprites.other['official-artwork'].front_default;
            imagenPokemon.style.display = 'block';
        })
        .catch(err => {
            nombrePokemon.innerText = '';
            base_experience.innerText = '';
            imagenPokemon.style.display = 'none';
            alert(err.message);
        });
}

buscarBtn.addEventListener('click', buscarPokemon);