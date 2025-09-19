document.addEventListener('DOMContentLoaded', function() {
    
    // ========= Animación de member previews =========
    const memberPreviews = document.querySelectorAll('.member-preview');
    const memberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                const delay = entry.target.getAttribute('data-delay') || '0s';
                entry.target.style.animationDelay = delay;
            }
        });
    }, { threshold: 0.2 });

    memberPreviews.forEach(preview => {
        preview.style.animationPlayState = 'paused';
        memberObserver.observe(preview);
    });

    // ========= Efectos hover mejorados =========
    memberPreviews.forEach(preview => {
        const avatar = preview.querySelector('.preview-avatar');
        const header = preview.querySelector('.preview-header');
        const skills = preview.querySelectorAll('.skill-badge');
        
        preview.addEventListener('mouseenter', () => {
            if (avatar) {
                avatar.style.transform = 'scale(1.1)';
                avatar.style.transition = 'transform 0.3s ease';
            }
            
            if (header) {
                header.style.background = `linear-gradient(135deg, var(--accent-orange), #ff7a5c)`;
                header.style.transition = 'background 0.3s ease';
            }
            
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.style.transform = 'translateX(5px)';
                    skill.style.background = '#e2e8f0';
                    skill.style.transition = 'all 0.2s ease';
                }, index * 50);
            });
        });
        
        preview.addEventListener('mouseleave', () => {
            if (avatar) {
                avatar.style.transform = 'scale(1)';
            }
            
            if (header) {
                header.style.background = 'linear-gradient(135deg, var(--panel-dark), var(--panel-gray))';
            }
            
            skills.forEach(skill => {
                skill.style.transform = 'translateX(0)';
                skill.style.background = '#f1f5f9';
            });
        });
    });

    // ========= Responsive grid adjustments =========
    function adjustGridLayout() {
        const teamPreviews = document.querySelector('.team-previews');
        const screenWidth = window.innerWidth;
        
        if (teamPreviews) {
            if (screenWidth <= 400) {
                teamPreviews.style.gridTemplateColumns = '1fr';
            } else if (screenWidth <= 900) {
                teamPreviews.style.gridTemplateColumns = 'repeat(3, 1fr)';
            } else {
                teamPreviews.style.gridTemplateColumns = 'repeat(5, 1fr)';
            }
        }
    }

    adjustGridLayout();
    window.addEventListener('resize', adjustGridLayout);

    console.log('Grupo 7 - Frontend Project loaded successfully');
});