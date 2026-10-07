document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("navbar-container");
    if (navbarContainer) {
        fetch("navbar.html")
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar navbar");
                return response.text();
            })
            .then(data => navbarContainer.innerHTML = data)
            .catch(error => console.error(error));
    }
});