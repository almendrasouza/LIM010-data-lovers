/* Manejo de data */

// crear funcion para ordenar por nombre con dos parametros y se llama desde el main.js
const sortPoke1 = (data, sortOrder) => { // [{},{},{}...] paso data y condicion
  const arrayNamePoke = data.slice().sort((ab, bc) => { //  slice saca una copia del array de obj, sort lo ordena ese arrydeobj de acuerdo a la condicion que se dice y retorna un newArrObject ordenado
    if (ab.name > bc.name) { //  de mayor a menor en letra del abecedario ejm almen y zalet
      return 1; //  sort esta comparando los nombres de los pokemones y ordenandoles por oden alfabetico
    } // Ejm poke 1 < poke 2 returne poke1 (porq es mayor)
    if (ab.name < bc.name) { //si poke 1 < poke2 returne poke2
      return -1; //  sort es un high order function(funcion de orden superior)es una funcion q recibe commo parametro otra funcion o retorna otra funcion
    } //  sort,map y filter son funciones de orden superior
    return 0; // que se queda en la misma posicion
  });
  if (sortOrder === 'A-Z') {
    return arrayNamePoke;
  }
  if (sortOrder === 'Z-A') {
    return arrayNamePoke.reverse(); // reverse() para que me devuelva lo contrario , revertir
  }

  return 0;
};

const sortSpawn = (data, sortOrder) => {
  const arraySpawnPoke = data.slice().sort((ab, bc) => {
    if (ab.avg_spawns > bc.avg_spawns) {
      return 1;
    }
    if (ab.avg_spawns < bc.avg_spawns) {
      return -1;
    }
    return 0;
  });
  if (sortOrder === 'Ascendente') {
    return arraySpawnPoke;
  }
  if (sortOrder === 'Descendente') {
    return arraySpawnPoke.reverse();
  }
  return 0;
};

const filterByType = (data, type) => {
  let arrayType = [];
  for (let i = 0; i < data.length; i++) { //  {},
    for (let ab = 0; ab < data[i].type.length; ab++) { //  data.type retorna un array de string y recorrer el arr de string de uno en uno y ahi obtengo el tipo
      if (data[i].type[ab] === type) { //  filtrar cada poke por su tipo//si el tipodepok es igual al tipo que pone la persona pushea/mete el pokemon dentro de un array
        arrayType.push(data[i]); //  push para ir agregando elementos en el array
      }
    }
  }
  return arrayType; //  [{},{},{}]al final obtengo un arrydeobj donde c/obj representa un pokemon que cumple la condicion
};


const filterWeaknesses = (data, weaknesses) => { //  por debilidad
  let arrayWeaknessesType = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].weaknesses.length; j++) { //  a ese obj le estoy aplicando su propiead weakn..y obtengo un array de strings y luego recorro ese arrofstring
      if (data[i].weaknesses[j] === weaknesses) { //  si la debilidad del poke es igual a la debilidad que escoge el usuario entonces push/o mete el poke dentro de un array
        arrayWeaknessesType.push(data[i]); //  push para ir agregando elementos en el array
      }
    }
  }
  return arrayWeaknessesType; // retorna un array de poke que tienen la misma debilidad
};

// funcion ara filtrar por tipo de huevo
const filterPokByKmEgg = (arrObj, kmEgg) => { //  [{},{}]y el  km de huevo que selecciona el usuario
  let newArrayPokeFilteredByKmEgg = [];
  for (let i = 0; i < arrObj.length; i++) { //  longitud del array de poke o objetos y obtener c/object
    if (arrObj[i].egg === kmEgg) { //  da valor string/si cuando al obj le aplicas su propiedad egg.cumple esa condicion
      newArrayPokeFilteredByKmEgg.push(arrObj[i]); //  que coloque este poke dentro del array vacio
    }
  }
  return newArrayPokeFilteredByKmEgg; //  [{egg:2 km},{egg:2km},{egg:2km}]
};

//  funcion para calcular  el porcentaje de pok por tipo de huevo repecto al total 151
//  tiene como parametro el result de la funcion FiltePOk.. de la anterior funcion
const calculatePercentageOfPokeFilteredByKmEgg = (arPokeFilteredByKmEgg) => { //  [{},{},{}]arr de poke ya clasificados por km de huevo
  const numberOfPoke = arPokeFilteredByKmEgg.length;
  const percentage = (numberOfPoke * 100) / 151;
  //console.log(percentage); //  number
  return percentage.toFixed(2); // string redondeado 
};


window.sortPoke1 = sortPoke1;
window.sortSpawn = sortSpawn;
window.filterByType = filterByType;
window.filterWeaknesses = filterWeaknesses;
window.filterPokByKmEgg = filterPokByKmEgg;
window.calculatePercentageOfPokeFilteredByKmEgg = calculatePercentageOfPokeFilteredByKmEgg;
