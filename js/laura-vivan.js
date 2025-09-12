// Función para manejar los clicks en cada sección
function handleClick(section) {
    switch (section) {
        case 'logo':
            showProfileModal();
            break;
        case 'inspiracion-panel':
            const trigger = document.getElementById('inspiracion-trigger');
            const panel = document.getElementById('inspiracion-panel');
            const isOpen = panel.classList.contains('expanded');
            if (!isOpen) {
                panel.classList.add('expanded');
                if (trigger) trigger.classList.add('shrink');
            } else {
                panel.classList.remove('expanded');
                if (trigger) trigger.classList.remove('shrink');
            }
            break;
        case 'agency-section':
            alert('En construcción 🚧');
            break;

        default:

            break;
    }
}

// Modal de perfil
function showProfileModal() {
    const modal = document.getElementById('profileModal');
    if (modal) {
        modal.classList.add('show');
    }
}

function closeModal() {
    const modal = document.getElementById('profileModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Modal de película
function showMovieModal(imgSrc, title) {
    document.getElementById('modalMovieImg').src = imgSrc;
    document.getElementById('modalMovieTitle').textContent = title;
    document.getElementById('movieModal').style.display = 'block';
}

function closeMovieModal() {
    document.getElementById('movieModal').style.display = 'none';
}

// Efectos adicionales con JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Efecto de carga suave
    const elements = document.querySelectorAll('.portfolio-container > *');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Cerrar modal de perfil al hacer clic fuera del contenido
    const modal = document.getElementById('profileModal');
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        modal.addEventListener('click', () => {
            closeModal();
        });
        if (modalContent) {
            modalContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }

    // Cerrar modal de película al hacer clic fuera del contenido
    const movieModal = document.getElementById('movieModal');
    if (movieModal) {
        const movieModalContent = movieModal.querySelector('.modal-content');
        movieModal.addEventListener('click', () => {
            closeMovieModal();
        });
        if (movieModalContent) {
            movieModalContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }
});