/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const dataPoker = (pokeData) => {//[{},{}] como parametro un array de objetos
  let newArrayPoke = [];
  for (let i = 0; i < pokeData.length; i++) { //[{}{}....]recorriendo cada uno de los objetos, c/pokemon
  
  //{}ya estoy obteniendo cada uno de los objetos
  newArrayPoke.push({//sirve para agregar un elmento dentro de un array se trabja con array esn un metodo que trabaja con array
      nombre: pokeData[i].name,//el objeto tiene una propiedad name
      imagen: pokeData[i].img,
      multipliers: pokeData[i].multipliers,//aqui estiy creando un objeto de la data original solamente con la info que yo quiero
    });
  }
  return newArrayPoke;//[{},{}] retorna un nuevo array de objetos con la propiedad nombre, imagen,etc
};


// crear funcion para ordenar por nombre con dos parametros, puede ser ciualquier nombre relacionado, y se llamada desde el main.js
const sortPoke1 = (data, sortOrder) => {// [{},{},{}...] y condicio
  const arrayNamePoke = data.slice().sort((a, b) => { // slice saca una copia del array de obj, sort lo ordena ese arrydeobj de acuerdo a la condicion que se dice y retorna un nuevoarraydeobjetos ordenado
     if (a.name > b.name) { //de mayor a menor en letra del abecedario ejm almen y zalet
      return 1; //sort esta comparando los nombres de los pokemones y ordenandoles por oden alfabetico
    }
    if (a.name < b.name) { 
      return -1; //sort es un high order function(funcion de orden superior)es una funcion q recibe commo parametro otra funcon o retorna otra funcion
       } //sort,map y filter son funciones de orden superior
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
  const arraySpawnPoke = data.slice().sort((a, b) => {
    if (a.avg_spawns > b.avg_spawns) {
      return 1;
    }
    if (a.avg_spawns < b.avg_spawns) {
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
  for (let i = 0; i < data.length; i++) {//{},
    for (let a = 0; a < data[i].type.length; a++) {//data.type retorna un array de string y recorrer el arr de setring de uno en uno y ahi obtengo el tipo
      if (data[i].type[a] === type) {//filtrar cada poke por su tipo//si el tipodepok es igual al tipo que pone la persona pushea/mete el pokemon dentro de un array
        arrayType.push(data[i]); // push para ir agregando elementos en el array
      }
    }
  }
  return arrayType;//[{},{},{}]al final obtengo un arrydeobj donde c/obj representa un pokemon que cumple la condicion
};
//ejemplo si la person  hce clilck en agua, saldra pokemones de  agua un array de  poke de agua

const filterWeaknesses = (data, weaknesses) => {//por debilidad
  let arrayWeaknessesType = [];
  for (let i = 0; i < data.length; i++) {

    for (let a = 0; a < data[i].weaknesses.length; a++) {//a ese obj le estoy aplicando su propiead weakn..y obtengo un array de strings y luego recorreidno ese arradestrin
      if (data[i].weaknesses[a] === weaknesses) {//siladebiliaddel poke es igual a ladebilidad que escoge el usuario entonces push/o mete el poke dentro de un array
        arrayWeaknessesType.push(data[i]); // push para ir agregando elementos en el array
      }
    }
  }
  return arrayWeaknessesType;//retorna un array de poke que tienen la misma debilidad
};





/*// funcion para calcular por tipo de huevo
const calculateEgg = (data, eggs)=>{
  let calculateEgg = 0;
  let numberTypeEgg;
  let percentageEgg;
  data.filter((pokem) =>{

    if (pokem.egg === eggs) {
      calculateEgg++;
      numberTypeEgg = (calculateEgg * 100) / data.length;
      percentageEgg = numberTypeEgg.toFixed(2);
    }
  });
  return percentageEgg;
};



//funcion ara filtrar por tipo de huevo
const filterEggs = (data, typeEgg) => {
  let newArrayEggs = [];
  for (let i = 0; i < data.length; i++) {
    for (let a = 0; a < data[i].egg.length; a++) {
      if (data[i].egg[a] === typeEgg) {
        newArrayEggs.push(data[i]); // push para ir agregando elementos en el array
      }
    }
  }
  return newArrayEggs;
};*/


window.sortPoke1 = sortPoke1;
window.sortSpawn = sortSpawn;
window.filterType = filterType;
window.filterWeaknesses = filterWeaknesses;

