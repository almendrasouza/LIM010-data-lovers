/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const dataInfo = (arrayObjetos) => {//[{17 propiedades},{15 propiedades},{}]un array de pokemones o objetos
  let newArrayObjPokemonInfo = [];
  for (let i = 0; i < arrayObjetos.length; i++) {
    let pokemon = arrayObjetos[i];//{} un pokemon 17 propiedades
    let pokemonImg = pokemon["img"];
    // "" string
    let pokemonName = pokemon["name"];
    let pokemonHeight = pokemon["height"];// "" string
    let pokemonId = pokemon["id"];
    // number
    let pokemonEgg = pokemon["egg"];
    // string
    let pokemonSpawn = pokemon["avg_spawns"];
    let pokemonWeakness = pokemon["weaknesses"];
    let pokemonType = pokemon["type"];
    let pokemonMultipliers= pokemon["multipliers"];
    //creando un objeto que tengas solo propiedades con la informacion que yo deseo.
    newArrayObjPokemonInfo.push({
      img: pokemonImg,//string
      name: pokemonName,//string
      height: pokemonHeight,
      //string
      id: pokemonId,
      //number
      egg: pokemonEgg,//string
      spawn: pokemonSpawn,//number
      weakness: pokemonWeakness,//["",""] voy a acceder A un array de string
      type: pokemonType,// ["",""]
      multipliers:pokemonMultipliers,
    });
  }
  return newArrayObjPokemonInfo;//[{},{}]
  // [{img:"",name:,img,height,egg,id,...},{},{img:"",name:,img,height,egg,id...}]
}
window.dataInfo = dataInfo;











//crear funcion por tipo// ME FALTA TEMRINAR //NO TOCAAAAAAAAAAAAAAAAAAAAAAR
const filterPokemonByType = (arrayObjetos9, condition) => {
  // [{},{8properties}] aqui entra un array de objetos y una condicion(es un string)
  let newArrayPokemonFilterbyType = [];
  for (let i = 0; i < arrayObjetos9.length; i++) {
    arrayObjetos9[i];//{8 properties}
    const arrayOfStrings = arrayObjetos9[i].type;
    //["",""]accediendo a un array de strings
    for (let i = 0; i < arrayOfStrings.length; i++) {
      arrayOfStrings[i];
      let string = arrayOfStrings[i];
      if (condition === string) {
        arrayObjetos9[i];//{}
        newArrayPokemonFilterbyType.push(arrayObjetos9[i]);
      }
    }
  }
  return newArrayPokemonFilterbyType;
};

window.filterPokemonByType = filterPokemonByType;








