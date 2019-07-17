/* Manejo de data original*/

// crear funcion para ordenar por nombre con dos parametros, puede ser ciualquier nombre relacionado, y se llamada desde el main.js
const sortPoke1 = (data, sortOrder) => { // [{},{},{}...] y condicio
  const arrayNamePoke = data.slice().sort((ab, bc) => { //  slice saca una copia del array de obj, sort lo ordena ese arrydeobj de acuerdo a la condicion que se dice y retorna un nuevoarraydeobjetos ordenado
    if (ab.name > bc.name) { //  de mayor a menor en letra del abecedario ejm almen y zalet
      return 1; //  sort esta comparando los nombres de los pokemones y ordenandoles por oden alfabetico
    }
    if (ab.name < bc.name) {
      return -1; //  sort es un high order function(funcion de orden superior)es una funcion q recibe commo parametro otra funcon o retorna otra funcion
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

const filterType = (data, type) => {
  let arrayType = [];
  for (let i = 0; i < data.length; i++) { //  {},
    for (let ab = 0; ab < data[i].type.length; ab++) { //  data.type retorna un array de string y recorrer el arr de setring de uno en uno y ahi obtengo el tipo
      if (data[i].type[ab] === type) { //  filtrar cada poke por su tipo//si el tipodepok es igual al tipo que pone la persona pushea/mete el pokemon dentro de un array
        arrayType.push(data[i]); //  push para ir agregando elementos en el array
      }
    }
  }
  return arrayType; //  [{},{},{}]al final obtengo un arrydeobj donde c/obj representa un pokemon que cumple la condicion
};
//  ejemplo si la person  hce clilck en agua, saldra pokemones de  agua un array de  poke de agua

const filterWeaknesses = (data, weaknesses) => { //  por debilidad
  let arrayWeaknessesType = [];
  for (let i = 0; i < data.length; i++) {
    for (let ab = 0; ab < data[i].weaknesses.length; ab++) { //  a ese obj le estoy aplicando su propiead weakn..y obtengo un array de strings y luego recorreidno ese arradestrin
      if (data[i].weaknesses[ab] === weaknesses) { //  siladebiliaddel poke es igual a ladebilidad que escoge el usuario entonces push/o mete el poke dentro de un array
        arrayWeaknessesType.push(data[i]); //  push para ir agregando elementos en el array
      }
    }
  }
  return arrayWeaknessesType; // retorna un array de poke que tienen la misma debilidad
};

// funcion ara filtrar por tipo de huevo
const filterPokByKmEgg = (arrObj, kmEgg) => { //  [{},{}]y el  km de huevo que selecciona el usuario
  let newArrayPokeFilteredByKmEgg = [];
  for (let i = 0; i < arrObj.length; i++) { //  longitud del array de poke o objetos y obtener c/obejto
    if (arrObj[i].egg === kmEgg) { //  da valor string/si cuando al obj le aplicas su propiedad egg.cumple esa condicion
      newArrayPokeFilteredByKmEgg.push(arrObj[i]); //  que coloque este poke dentro del array vacio
    }
  }
  return newArrayPokeFilteredByKmEgg; //  [{egg:2 km},{egg:2km},{egg:2km}]
};

//  funcion para calcular  el porcentaje de pok por tipo de huevo repecto al total 151
//  tiene como parametro el result de la funcion FiltePOk.. de la anterior funcion
const calculatePercentageOfPokeFilteredByKmEgg = (arPokeFilteredByKmEgg) => { //  [{},{},{}]arry de poke ya clasificados por km de huevo
  const numberOfPoke = arPokeFilteredByKmEgg.length;
  const percentage = (numberOfPoke * 100) / 151;
  console.log(percentage);
  return percentage; //  number
};


window.sortPoke1 = sortPoke1;
window.sortSpawn = sortSpawn;
window.filterType = filterType;
window.filterWeaknesses = filterWeaknesses;
window.filterPokByKmEgg = filterPokByKmEgg;
window.calculatePercentageOfPokeFilteredByKmEgg = calculatePercentageOfPokeFilteredByKmEgg;
