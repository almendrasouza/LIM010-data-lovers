/* Manejo del DOM */
const loginVista = document.getElementById('vista1');
const pokemonVista =document.getElementById('pokemon-vista');




const button= document.getElementById('btn-submit-login');
button.addEventListener('click', () => {
    const userValue = document.getElementById('name').value;
    const passwordValue = document.getElementById('Password').value;
    console.log(userValue);
    console.log(passwordValue);
    if (userValue === 'c' && passwordValue === '1') {
        loginVista.classList.add('hide');
        pokemonVista.classList.remove('hide');
    }
    else {
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos");
    
    }
});

