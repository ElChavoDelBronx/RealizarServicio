// La función principal se ejecuta cuando todo el DOM ha cargado
document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener todos los enlaces del navbar que actúan como pestañas
    const navLinks = document.querySelectorAll('.nav-link[data-page]');

    // 2. Obtener todos los contenedores de contenido
    const contentPanels = document.querySelectorAll('.tab-pane');

    // Función para mostrar el panel correcto
    const showPage = (targetId) => {
        // Ocultar todos los paneles
        contentPanels.forEach(panel => {
            panel.classList.remove('show', 'active');
        });

        // Mostrar el panel objetivo
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
            targetPanel.classList.add('show', 'active');
        }
    };

    // Función para manejar el clic en los enlaces
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Previene el comportamiento por defecto del enlace

            // Remover la clase 'active' de todos los enlaces
            navLinks.forEach(l => l.classList.remove('active'));

            // Añadir 'active' al enlace clickeado
            link.classList.add('active');

            // Obtener el ID del contenido objetivo
            const targetId = link.getAttribute('data-page');
            
            showPage(targetId);
        });
    });

    // Mostrar el contenido inicial (por ejemplo, el home) al cargar
    showPage('controller');
});