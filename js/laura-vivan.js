// Función para manejar los clicks en cada sección
function handleClick(section) {
    console.log('Clicked on:', section);
    
    // Aca agregar la lógica para cada sección
    switch(section) {
        case 'red-square':
            alert('Cuadrado rojo decorativo clickeado');
            break;
        case 'gray-square':
            alert('Cuadrado gris decorativo clickeado');
            break;
        case 'logo':
            alert('Logo geométrico clickeado');
            break;
        case 'project-info':
            alert('Sección de información del proyecto clickeada');
            break;
        case 'main-project':
            alert('Proyecto principal clickeado');
            break;
        case 'ocean-image':
            alert('Imagen del océano clickeada');
            break;
        case 'mountain-image':
            alert('Imagen de montaña clickeada');
            break;
        case 'tower-image':
            alert('Imagen de la torre clickeada');
            break;
        case 'colorful-portrait':
            alert('Portrait colorido clickeado');
            break;
        case 'agency-section':
            alert('Sección de agencia clickeada');
            break;
        case 'linkedin':
            alert('LinkedIn clickeado');
            break;
        case 'mail':
            alert('Mail clickeado');
            break;
        default:
            alert('Elemento clickeado: ' + section);
    }
}

// Efectos adicionales con JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Agregar efecto de carga suave
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
});