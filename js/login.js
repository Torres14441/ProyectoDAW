document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usuarioInput = document.getElementById("usuario");
    const contrasenaInput = document.getElementById("contrasena");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const usuario = usuarioInput.value;
        const contrasena = contrasenaInput.value;

        // Enviar los datos de inicio de sesión al servidor, utilizando una solicitud POST
        fetch('https://652f649a0b8d8ddac0b26e29.mockapi.io/usuarios', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al obtener los datos de los usuarios');
            }
        }).then(data => {
            // Verificar si los datos de inicio de sesión coinciden con los registros en la API
            const usuarioEncontrado = data.find(registro => registro.Usuario === usuario);
            if (usuarioEncontrado && usuarioEncontrado.contrasena === contrasena) {
                // Inicio de sesión exitoso, almacena el nombre de usuario en una variable global
                sessionStorage.setItem('usuario', usuario);
                // Inicio de sesión exitoso, redirige al usuario a otra página web
                window.location.href = "inicio.html";
            } else {
                // Datos de inicio de sesión incorrectos, muestra un mensaje de error al usuario
                alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
            }
        }).catch(error => {
            console.error('Error:', error);
            // Manejar errores aquí, como mostrar un mensaje de error al usuario.
        });
    });
});
