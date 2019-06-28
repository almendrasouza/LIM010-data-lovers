/* Manejo del DOM */
const loginVista = document.getElementById('login-box');
const pokemonVista =document.getElementById('pokemon-vista');
const button= document.getElementById('btnlogin');
button.addEventListener('click', () => {
    const userValue = document.getElementById('name').value;
    const passwordValue = document.getElementById('Password').value;
    if (userValue === 'c' && passwordValue === '1') {
        loginVista.classList.add('hide');
        pokemonVista.classList.remove('hide');
    }
    else {
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos");
     }
});

