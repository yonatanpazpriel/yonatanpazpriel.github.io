document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Get the element's position relative to the viewport
        const elementPosition = targetSection.offsetTop;
        const offsetPosition = elementPosition - 10;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
}); 