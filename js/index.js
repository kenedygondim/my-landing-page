document.addEventListener('DOMContentLoaded', function() {
    const projectDivs = document.querySelectorAll('.div-project');

    projectDivs.forEach(div => {
        const cover = div.querySelector('.cover');

        div.addEventListener('mouseenter', () => {
            cover.style.opacity = '1';
        });

        div.addEventListener('mouseleave', () => {
            cover.style.opacity = '0';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const projectDivs = document.querySelectorAll('#div-btn-talk > a');

    projectDivs.forEach(div => {
        const cover = div.querySelector('#wpp-icon');

        div.addEventListener('mouseenter', () => {
            cover.style.display = 'block';
        });

        div.addEventListener('mouseleave', () => {
            cover.style.display = 'none';
        });

        // Para dispositivos móveis (toque)
        div.addEventListener('touchstart', () => {
            cover.style.display = 'block';
        });

        div.addEventListener('touchmove', (event) => {
            const touch = event.touches[0];
            const targetRect = div.getBoundingClientRect();

            // Verifica se o toque ainda está dentro do elemento
            if (
                touch.clientX < targetRect.left ||
                touch.clientX > targetRect.right ||
                touch.clientY < targetRect.top ||
                touch.clientY > targetRect.bottom
            ) {
                cover.style.display = 'none'; // Esconde se o dedo saiu da área
            }
        });

        div.addEventListener('touchend', () => {
            cover.style.display = 'none'; // Esconde após terminar o toque
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const btnSubirHome = document.getElementById('btn-subir-home');
    const aboutMeSection = document.getElementById('about-me');

    window.addEventListener('scroll', function() {
        const aboutMePosition = aboutMeSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 2;

        if (aboutMePosition < screenPosition) {
            btnSubirHome.style.opacity = '1';
        } else {
            btnSubirHome.style.opacity = '0';
        }
    });

    btnSubirHome.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});