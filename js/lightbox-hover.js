// Lightbox customizado para galeria de imagens ao passar o mouse

document.addEventListener('DOMContentLoaded', function() {
    const galeria = document.querySelector('.galeria-imagens');
    if (!galeria) return;

    // Cria o overlay e o container da imagem destacada
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.style.display = 'none';
    overlay.innerHTML = '<a class="lightbox-link" href="#" target="_blank"><img class="lightbox-img" src="" alt="Imagem destacada"></a>';
    document.body.appendChild(overlay);

    let timeout;
    galeria.querySelectorAll('a.img-link').forEach(function(link) {
        const img = link.querySelector('img');
        link.style.cursor = 'pointer';
        img.style.cursor = 'pointer';
        link.addEventListener('mouseenter', function() {
            clearTimeout(timeout);
            const lightboxLink = overlay.querySelector('.lightbox-link');
            const lightboxImg = overlay.querySelector('.lightbox-img');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxLink.href = link.href;
            overlay.style.display = 'flex';
            // Deixa a imagem quadrada preta
            galeria.querySelectorAll('img').forEach(function(i) {
                i.style.filter = '';
            });
            img.style.filter = 'brightness(0)';
        });
        link.addEventListener('mouseleave', function() {
            timeout = setTimeout(function() {
                overlay.style.display = 'none';
                galeria.querySelectorAll('img').forEach(function(i) {
                    i.style.filter = '';
                });
            }, 100);
        });
    });
    overlay.addEventListener('mouseenter', function() {
        clearTimeout(timeout);
    });
    overlay.addEventListener('mousemove', function(e) {
    // Redireciona ao clicar no overlay escuro
    overlay.addEventListener('click', function(e) {
        const lightboxLink = overlay.querySelector('.lightbox-link');
        if (lightboxLink && lightboxLink.href && e.target === overlay) {
            window.open(lightboxLink.href, '_blank');
        }
    });
        const links = galeria.querySelectorAll('a.img-link');
        let found = false;
        links.forEach(function(link) {
            const img = link.querySelector('img');
            const rect = img.getBoundingClientRect();
            if (
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom
            ) {
                found = true;
                // Simula mouseenter na imagem pequena
                clearTimeout(timeout);
                const lightboxLink = overlay.querySelector('.lightbox-link');
                const lightboxImg = overlay.querySelector('.lightbox-img');
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightboxLink.href = link.href;
                overlay.style.display = 'flex';
                links.forEach(function(l) { l.querySelector('img').style.filter = ''; });
                img.style.filter = 'brightness(0)';
            }
        });
        if (found) return;
        // Fecha se mouse estiver longe da imagem grande e das pequenas
        const lightboxImg = overlay.querySelector('.lightbox-img');
        if (!lightboxImg) return;
        const rect = lightboxImg.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const minX = rect.left - 70;
        const maxX = rect.right + 70;
        const minY = rect.top - 70;
        const maxY = rect.bottom + 70;
        if (mouseX < minX || mouseX > maxX || mouseY < minY || mouseY > maxY) {
            overlay.style.display = 'none';
            links.forEach(function(l) { l.querySelector('img').style.filter = ''; });
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            overlay.style.display = 'none';
        }
    });
});
