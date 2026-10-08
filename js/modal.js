export function crearModal({ titulo, mensaje = "", textoBoton = "Entendido" }) {
    // Contenedor principal (usa tus clases de modal.css)
    const modal = document.createElement("div");
    modal.className = "modal";

    modal.innerHTML = `
        <div class="modal-contenido" role="dialog" aria-modal="true">
            <h2></h2>
            <p class="texto"></p>
            <p class="modal-mensaje"></p>
            <div class="modal-botones">
                <button type="button"></button>
            </div>
        </div>`;

    // Los textos se asignan con textContent (más seguro que meterlos en el innerHTML)
    modal.querySelector("h2").textContent = titulo;
    modal.querySelector(".texto").textContent = mensaje;
    modal.querySelector("button").textContent = textoBoton;

    const detalle = modal.querySelector(".modal-mensaje");

    function ocultar() {
        modal.classList.remove("activo");
    }

    function mostrar(textoDetalle = "") {
        detalle.textContent = textoDetalle;
        modal.classList.add("activo");
    }

    modal.querySelector("button").addEventListener("click", ocultar);
    document.body.appendChild(modal);

    return { mostrar, ocultar };
}