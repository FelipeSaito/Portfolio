let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id'); 

        // Verifica se o scroll está dentro da seção
        if (top >= offset && top < offset + height) {
            // Remove a classe 'active' de todos os links
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            // Adiciona a classe 'active' ao link correspondente
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Fecha o menu no modo mobile ao rolar a página
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Alterna a exibição do menu ao clicar no ícone
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
