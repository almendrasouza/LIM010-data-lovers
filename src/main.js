/* Manejo del DOM */
const loginBox = document.getElementById('login-box');
const btnLogin = document.getElementById('btnlogin');
const pokemonCardDiv = document.getElementById("pokemon-card");

btnLogin.addEventListener('click', () => {
  const userValue = document.getElementById('username').value;
  const passwordValue = document.getElementById('password').value;
  if (userValue === 'c' && passwordValue === '1') {
    loginBox.classList.add('hide');
    pokemonCardDiv.classList.remove('hide');
  } else {
    document.getElementById('result1').innerHTML = "Contraseña errada,intentelo nuevamente";
  }
});
/* Manejo del DOM */

const arrayDeObjPokemon = POKEMON.pokemon; //Obtengo array de objetos, c/objeto representa un pokemon
console.log(arrayDeObjPokemon);
//obten c/uno de los elementos dentro del array.

dataInfo(arrayDeObjPokemon)
// [{},{img,name,height,id,egg},{}]
//console.log(dataInfo(arrayDeObjPokemon));//[{},{img,name,height,id,egg}]


const newArrayObjPokemonWith8Keys = dataInfo(arrayDeObjPokemon); //[{},{},{}]

for (let i = 0; i < newArrayObjPokemonWith8Keys.length; i++) {
newArrayObjPokemonWith8Keys[i]; //{img,name,height,id,egg}
pokemonCardDiv.innerHTML += `<div class="pokemon-card-style">
<p id="pokemon-name">Nombre:${newArrayObjPokemonWith8Keys[i].name}</p>
<img id="pokemon-img" src="${newArrayObjPokemonWith8Keys[i].img}"alt=""> 
<p id="pokemon-egg">Huevo:${newArrayObjPokemonWith8Keys[i].egg}</p>
<p id="pokemon-height">Altura:${newArrayObjPokemonWith8Keys[i].height}</p>
<p id="pokemon-spawn">Frecuencia de Aparicion:${newArrayObjPokemonWith8Keys[i].spawn}</p>
<p id="pokemon-id">Id:${newArrayObjPokemonWith8Keys[i].id}</p>
</div>`;
};
//hacer un dropdown en html que imprima
