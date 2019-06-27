/* Manejo del DOM */
btn=document.getElementById('btn-submit-login');
btn.addEventListener('click',() => {
    if (document.form.password.value=='1' && document.form.login.value=='1'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
        } 
    } );
