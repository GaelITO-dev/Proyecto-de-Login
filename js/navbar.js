document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("navbar-container");
    
    if (navbarContainer) {
        fetch("navbar.html")
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar navbar");
                return response.text();
            })
            .then(data => {
                navbarContainer.innerHTML = data;
                const usuarioActivo = localStorage.getItem("usuarioActivo");
                const nombreUsuario = document.getElementById("nombre-usuario");
                const itemIniciarSesion = document.getElementById("item-iniciar-sesion");
                const itemCerrarSesion = document.getElementById("item-cerrar-sesion");
                const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");
                
                if (usuarioActivo) {
                    nombreUsuario.textContent = usuarioActivo; 
                    itemIniciarSesion.style.display = "none"; 
                    itemCerrarSesion.style.display = "block";  
                    btnCerrarSesion.addEventListener("click", (e) => {
                        e.preventDefault();
                        localStorage.removeItem("usuarioActivo");
                        window.location.href="login.html"
                    });
                }
            })
            .catch(error => console.error("Error al inyectar el componente:", error));
    }
});