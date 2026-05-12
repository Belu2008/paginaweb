document.addEventListener("DOMContentLoaded", () => {
    
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Obtenemos los datos
            const nombre = formulario.querySelector('input[name="Nombre"]').value;
            const clave = formulario.querySelector('input[name="Clave"]').value;
            const destino = formulario.querySelector('select[name="destino"]').value;

            if (isNaN(clave) || clave.length < 4) {
                alert("Por favor, ingresa una Clave UCC válida (mínimo 4 números).");
                return;
            }

            alert(`¡Perfecto ${nombre}! Tu cotización para viajar a ${destino} está siendo procesada.`);
            formulario.reset();
        });
    }

    const tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("mouseenter", () => {
            tarjeta.style.transform = "scale(1.05)";
            tarjeta.style.transition = "transform 0.3s ease";
            tarjeta.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
        });

        tarjeta.addEventListener("mouseleave", () => {
            tarjeta.style.transform = "scale(1)";
            tarjeta.style.boxShadow = "none";
        });
    });

    const tituloPrincipal = document.querySelector(".titulo-superpuesto");
    if (tituloPrincipal) {
        const hora = new Date().getHours();
        let saludo = "";
        if (hora < 12) saludo = "¡Buen día!";
        else if (hora < 20) saludo = "¡Buenas tardes!";
        else saludo = "¡Buenas noches!";
        
        console.log(`${saludo} Bienvenido a Destino UCC.`);
    }
});