/* Manejo del DOM */
const loginVista = document.getElementById('login-box');
const pokemonVista = document.getElementById('pokemon-vista');
const btnLogin = document.getElementById('btnlogin');
const contenedor = document.getElementById('pokemon-card');
const pokeData = POKEMON.pokemon;
const mainHeader = document.getElementById('main-header');
btnLogin.addEventListener('click', () => {
  const userValue = document.getElementById('username').value;
  const passwordValue = document.getElementById('password').value;
  if (userValue === 'LABORATORIA' && passwordValue === 'LABORATORIA') {
    loginVista.classList.add('hide');
    pokemonVista.classList.remove('hide');
    mainHeader.classList.remove('hide');
  } else {
    document.getElementById('result1').innerHTML = 'Contraseña errada,intentelo nuevamente';
  }
});

const showPoke = (arrayPokeObj) => { //  [{},{}]
  let showDivOfPoke = '';
  for (let i = 0; i < arrayPokeObj.length; i++) {
    if (arrayPokeObj[i].multipliers === null) {
      arrayPokeObj[i].multipliers = 0;
    } else {
      arrayPokeObj[i].multipliers;
    }
    let divPokInfo = `
  
      <div class= "pokemonvista">
       <img class="image" src ="${arrayPokeObj[i].img}"/>
         
         <div class="caracteristics">
         <p class="colorpoke"> ${arrayPokeObj[i].name}</p>
         <p class="colorshow">Peso:</p><p>${arrayPokeObj[i].weight}</p>
         <p class="colorshow">Estatura:</p><p>${arrayPokeObj[i].height}</p>  
         <p class="colorshow">Huevos:</p><p>${arrayPokeObj[i].egg}</p>
         <p class="colorshow">Probabilidad de captura:</p><p>${arrayPokeObj[i].avg_spawns}%</p>
       </div>  
  </div>`; //llamado template string
    showDivOfPoke += divPokInfo; 
  }

  return showDivOfPoke;
};
contenedor.innerHTML = showPoke(pokeData);

// PARA MOSTRAR POKEMONES ORDENADOS A-Z O Z-A,etc

// Creando mi variable selector para almacenar mi opcion de orden
const selector1 = document.getElementById('order');
selector1.addEventListener('change', () => {
  let optionSelector = selector1.value; // alojar en una variable let el valor de mi selector 
  let pokeOrder; // variable con array vacío para alojar los pokemones ordenados
  if (optionSelector === 'A-Z') { // condición para que muestre el array que corresponde de acuerdo a la opcion que yo elija
    pokeOrder = sortPoke1(pokeData, optionSelector);
  } else if (optionSelector === 'Z-A') {
    pokeOrder = sortPoke1(pokeData, optionSelector);
  } else if (optionSelector === 'Ascendente') {
    pokeOrder = sortSpawn(pokeData, optionSelector);
  } else if (optionSelector === 'Descendente') {
    pokeOrder = sortSpawn(pokeData, optionSelector);
  } else {
    contenedor.innerHTML = showPoke(pokeData); // muestra pokemones  de mi funcion mostrarPoker de mi data
  } // console.log(pokeOrder);
  contenedor.innerHTML = showPoke(pokeOrder); // en el contenedor que me muestre los pokemones de mi data pero ordeandos del array nuevo pokeOrder;
});

const selector2 = document.getElementById('type-order');
selector2.addEventListener('change', () => {
  let optionSelector2 = selector2.value; // alojar en una variable let el valor de mi selector 
  let pokefilterByType;
  if (optionSelector2 === 'Bug') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Dark') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Dragon') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Electric') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Fighting') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Fire') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Flying') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Ghost') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Grass') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Ground') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Ice') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Normal') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Poison') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Psychic') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Rock') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else if (optionSelector2 === 'Water') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokefilterByType = filterByType(pokeOrderedByAZ, optionSelector2);
  } else {
    contenedor.innerHTML = showPoke(pokeData); // muestra pokemones  de mi funcion mostrarPoker de mi data
  } // console.log(pokefilterByType);
  contenedor.innerHTML = showPoke(pokefilterByType); // en el contenedor que me muestre los pokemones de mi data pero ordeandos del array nuevo pokefilterbytype;
});

const selector3 = document.getElementById('weaknesses-type');
selector3.addEventListener('change', () => {
  let optionSelector3 = selector3.value; // alojar en una variable let el valor de mi selector 
  let pokeFilterWeaknesses;
  if (optionSelector3 === 'Fire') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterWeaknesses = filterWeaknesses(pokeOrderedByAZ, optionSelector3);
  } else if (optionSelector3 === 'Ice') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterWeaknesses = filterWeaknesses(pokeOrderedByAZ, optionSelector3);
  } else if (optionSelector3 === 'Flying') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterWeaknesses = filterWeaknesses(pokeOrderedByAZ, optionSelector3);
  } else if (optionSelector3 === 'Psychic') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterWeaknesses = filterWeaknesses(pokeOrderedByAZ, optionSelector3);
  } else if (optionSelector3 === 'Water') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterWeaknesses = filterWeaknesses(pokeOrderedByAZ, optionSelector3);
  } else if (optionSelector3 === 'Ground') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterWeaknesses = filterWeaknesses(pokeOrderedByAZ, optionSelector3);
  } else if (optionSelector3 === 'Rock') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterWeaknesses = filterWeaknesses(pokeOrderedByAZ, optionSelector3);
  } else if (optionSelector3 === 'Electric') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterWeaknesses = filterWeaknesses(pokeOrderedByAZ, optionSelector3);
  } else if (optionSelector3 === 'Fighting') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterWeaknesses = filterWeaknesses(pokeOrderedByAZ, optionSelector3);
  } else {
    contenedor.innerHTML = showPoke(pokeData); // muestra pokemones  de mi funcion mostrarPoker de mi data
  } //  console.log(pokeFilterWeaknesses);
  contenedor.innerHTML = showPoke(pokeFilterWeaknesses); // en el contenedor que me muestre los pokemones de mi data pero ordeandos del array nuevo pokeOrder;
});

const selector4 = document.getElementById('egg');
const percentageDiv = document.getElementById('percentage-div');
selector4.addEventListener('change', () => {
  let optionSelector4 = selector4.value; // alojar en una variable let el valor de mi selector 
  let pokeFilterEgg;
  let percentage;
  if (optionSelector4 === '2 km') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterEgg = filterPokByKmEgg(pokeOrderedByAZ, optionSelector4);
    percentage = calculatePercentageOfPokeFilteredByKmEgg(pokeFilterEgg);
  } else if (optionSelector4 === '5 km') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterEgg = filterPokByKmEgg(pokeOrderedByAZ, optionSelector4);
    percentage = calculatePercentageOfPokeFilteredByKmEgg(pokeFilterEgg);
  } else if (optionSelector4 === '10 km') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterEgg = filterPokByKmEgg(pokeOrderedByAZ, optionSelector4);
    percentage = calculatePercentageOfPokeFilteredByKmEgg(pokeFilterEgg);
  } else if (optionSelector4 === 'Not in Eggs') {
    const pokeOrderedByAZ = sortPoke1(pokeData, 'A-Z');
    pokeFilterEgg = filterPokByKmEgg(pokeOrderedByAZ, optionSelector4);
    percentage = calculatePercentageOfPokeFilteredByKmEgg(pokeFilterEgg);
  } else {
    //  percentage es undefined
    contenedor.innerHTML = showPoke(pokeData); //  se muestra po defecto
  }
  console.log(pokeFilterEgg);
  if (percentage === undefined) {
    percentageDiv.innerHTML = '';
  } else { //  si percentage tiene un valor 
    percentageDiv.innerHTML = `<p class="percent">El porcentaje de pokemones con ${optionSelector4} es ${percentage} % </p>`;;
  }
  percentageDiv;
  contenedor.innerHTML = showPoke(pokeFilterEgg);
});
