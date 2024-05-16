window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { 
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('navbar-dark');
    }
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (window.scrollY > 50) { 
        // dropdownMenu.classList.remove('dropdown-menu-light');
        dropdownMenu.classList.add('dropdown-menu-dark');
    } else {
        // dropdownMenu.classList.add('dropdown-menu-light');
        dropdownMenu.classList.remove('dropdown-menu-dark');
    }
});

