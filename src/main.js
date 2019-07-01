/* Manejo del DOM */
const pokemonCardDiv=document.getElementById("pokemon-card");
const arrayDeObjPokemon= POKEMON.pokemon;//Obtengo array de objetos, c/objeto representa un pokemon
//obten c/uno de los elementos dentro del array.
console.log(arrayDeObjPokemon);


dataInfo(arrayDeObjPokemon) // [{},{img,name,height,id,egg},{}]
 //console.log(dataInfo(arrayDeObjPokemon));//[{},{img,name,height,id,egg}]

const newArrayObjPokemonWith8Keys=dataInfo(arrayDeObjPokemon);//[{},{},{}]
for(let i=0; i<newArrayObjPokemonWith8Keys.length;i++){
newArrayObjPokemonWith8Keys[i];//{img,name,height,id,egg}  

pokemonCardDiv.innerHTML+=`<div class="pokemon-card-style">
<p id="pokemon-name">Nombre:${newArrayObjPokemonWith8Keys[i].name}</p>
<img  id="pokemon-img" src="${newArrayObjPokemonWith8Keys[i].img}" alt="">  
<p id="pokemon-egg">Huevo:${newArrayObjPokemonWith8Keys[i].egg}</p>
<p id="pokemon-height">Altura:${newArrayObjPokemonWith8Keys[i].height}</p>
<p id="pokemon-spawn">Frecuencia de Aparicion:${newArrayObjPokemonWith8Keys[i].spawn}</p>
<p id="pokemon-id">Id:${newArrayObjPokemonWith8Keys[i].id}</p> 
</div>`;
};




 
//hacer un dropdown en html que imprima