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
  if (userValue === 'c' && passwordValue === '1') {
    loginVista.classList.add('hide');
    pokemonVista.classList.remove('hide');
    mainHeader.classList.remove('hide');
  } else {
    document.getElementById('result1').innerHTML = 'Contraseña errada,intentelo nuevamente';
  }
});

const showPoke = (pokeData) => {
  let mostrar = '';
  for (let i = 0; i < pokeData.length; i++) {
    if (pokeData[i].multipliers === null) {
      pokeData[i].multipliers = 0;
    } else {
      pokeData[i].multipliers;
    }
    let llamado = `
  
      <div class= "pokemonvista">
       <img class="image" src ="${pokeData[i].img}"/>
         
         <div class=  "caracteristicas">
         <p> ${pokeData[i].name}</p>
         <p>Peso : ${pokeData[i].weight}</p>
         <p>Estatura : ${pokeData[i].height}</p>  
         <p>Huevos : ${pokeData[i].egg}</p>
         <p>Frec. Aparición : ${pokeData[i].avg_spawns}%</p>
         </div>  
  
      </div>`;
    mostrar += llamado;
  }
  return mostrar;
};
contenedor.innerHTML = showPoke(pokeData);
// PARA MOSTRAR POKEMONES ORDENADOS A-Z O Z-A

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
  let pokeFilterType;
  if (optionSelector2 === 'Bug') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Dark') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Dragon') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Electric') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Fighting') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Fire') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Flying') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Ghost') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Grass') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Ground') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Ice') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Normal') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Poison') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Psychic') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Rock') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else if (optionSelector2 === 'Water') {
    pokeFilterType = filterType(pokeData, optionSelector2);
  } else {
    contenedor.innerHTML = showPoke(pokeData); // muestra pokemones  de mi funcion mostrarPoker de mi data
  } // console.log(pokeFilterType);
  contenedor.innerHTML = showPoke(pokeFilterType); // en el contenedor que me muestre los pokemones de mi data pero ordeandos del array nuevo pokeOrder;
});

const selector3 = document.getElementById('weaknesses-type');
selector3.addEventListener('change', () => {
  let optionSelector3 = selector3.value; // alojar en una variable let el valor de mi selector 
  let pokeFilterWeaknesses;
  if (optionSelector3 === 'Fire') {
    pokeFilterWeaknesses = filterWeaknesses(pokeData, optionSelector3);
  } else if (optionSelector3 === 'Ice') {
    pokeFilterWeaknesses = filterWeaknesses(pokeData, optionSelector3);
  } else if (optionSelector3 === 'Flying') {
    pokeFilterWeaknesses = filterWeaknesses(pokeData, optionSelector3);
  } else if (optionSelector3 === 'Psychic') {
    pokeFilterWeaknesses = filterWeaknesses(pokeData, optionSelector3);
  } else if (optionSelector3 === 'Water') {
    pokeFilterWeaknesses = filterWeaknesses(pokeData, optionSelector3);
  } else if (optionSelector3 === 'Ground') {
    pokeFilterWeaknesses = filterWeaknesses(pokeData, optionSelector3);
  } else if (optionSelector3 === 'Rock') {
    pokeFilterWeaknesses = filterWeaknesses(pokeData, optionSelector3);
  } else if (optionSelector3 === 'Electric') {
    pokeFilterWeaknesses = filterWeaknesses(pokeData, optionSelector3);
  } else if (optionSelector3 === 'Fighting') {
    pokeFilterWeaknesses = filterWeaknesses(pokeData, optionSelector3);
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
    pokeFilterEgg = filterPokByKmEgg(pokeData, optionSelector4);
    percentage = calculatePercentageOfPokeFilteredByKmEgg(pokeFilterEgg);
  } else if (optionSelector4 === '5 km') {
    pokeFilterEgg = filterPokByKmEgg(pokeData, optionSelector4);
    percentage = calculatePercentageOfPokeFilteredByKmEgg(pokeFilterEgg);
  } else if (optionSelector4 === '10 km') {
    pokeFilterEgg = filterPokByKmEgg(pokeData, optionSelector4);
    percentage = calculatePercentageOfPokeFilteredByKmEgg(pokeFilterEgg);
  } else if (optionSelector4 === 'Not in Eggs') {
    pokeFilterEgg = filterPokByKmEgg(pokeData, optionSelector4);
    percentage = calculatePercentageOfPokeFilteredByKmEgg(pokeFilterEgg);
  } else {
    //  percentage es undefined
    contenedor.innerHTML = showPoke(pokeData); //  se muestra po defecto
  }
  console.log(pokeFilterEgg);
  if (percentage === undefined) {
    percentageDiv.innerHTML = '';
  } else { //  si percentage tiene un valor 
    percentageDiv.innerHTML = `<p class="percent">El porcentaje de pokemones con ${optionSelector4} es ${percentage.toFixed(2)} % </p>`;;
  }
  percentageDiv;
  contenedor.innerHTML = showPoke(pokeFilterEgg);
});
