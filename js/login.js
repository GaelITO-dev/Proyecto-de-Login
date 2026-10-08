document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("loginForm");
    const mensaje = document.getElementById("formMessage");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const correoIngresado = document.getElementById("email").value.trim();
        const passwordIngresada = document.getElementById("password").value;

        const usuariosRegistrados = JSON.parse(
            localStorage.getItem("usuarios") || "[]"
        );

        const usuarioValido = usuariosRegistrados.find(
            (usuario) =>
                usuario.email === correoIngresado &&
                usuario.password === passwordIngresada
        );

        mensaje.classList.remove("d-none", "alert-success", "alert-danger");

        if (usuarioValido) {
            // Guarda el nombre para que el navbar lo pueda mostrar.
            localStorage.setItem("usuarioActivo", usuarioValido.username);
            window.location.href = "index.html";
            return;
        }

        mensaje.classList.add("alert-danger");
        mensaje.textContent = "Correo o contraseña incorrectos.";
    });
});