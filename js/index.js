let counter = 0;

function portfolioAnimation() {
    const portfolioItem = document.getElementById("portfolioItem");

    // Paso 1: Remover la clase para hacer fade-out
    portfolioItem.classList.remove("portfolio_item_fade");

    // Paso 2: Esperar que el fade-out termine
    setTimeout(() => {
        // Paso 3: Cambiar el contenido
        switch (counter) {
            case 0:
                portfolioItem.innerHTML = `
                    <span>Mob Role Selector</span>
                    <div class="portfolioIcons">
                        <img src="C:\\s\\CSS\\MySite\\src\\img\\javaIcon.png">
                        <img src="C:\\s\\CSS\\MySite\\src\\img\\mavenIcon.png">
                    </div>
                    <p>Simple Java application to designate mob-programming roles.</p>
                `;
                break;
            case 1:
                portfolioItem.innerHTML = `
                    <span>Our Own Zeta</span>
                    <div class="portfolioIcons">
                        <img src="C:\\s\\CSS\\MySite\\src\\img\\javaIcon.png">
                        <img src="C:\\s\\CSS\\MySite\\src\\img\\springBootIcon.png">
                        <img src="C:\\s\\CSS\\MySite\\src\\img\\mavenIcon.png">
                        <img src="C:\\s\\CSS\\MySite\\src\\img\\tsIcon.png">
                        <img src="C:\\s\\CSS\\MySite\\src\\img\\reactIcon.png">
                    </div>
                    <p>Simulation experience where one is in charge of developing a civilization.</p>
                `;
                break;
        }

        // Paso 4: Forzar reflow
        void portfolioItem.offsetWidth;

        // Paso 5: Volver a agregar la clase para hacer fade-in
        portfolioItem.classList.add("portfolio_item_fade");

        // Paso 6: Avanzar al siguiente
        counter = (counter + 1) % 2;

    }, 1000); // esperar 1 segundo (coincide con el `transition`)
}

setInterval(portfolioAnimation, 3000); // cada 3 segundos
