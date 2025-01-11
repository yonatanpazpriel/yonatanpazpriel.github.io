document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Add a small delay to ensure proper positioning
        setTimeout(() => {
            if (targetId === 'projects') {
                window.scrollTo({
                    top: 0,  // Scroll to top for projects section
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: targetSection.offsetTop + window.innerHeight,  // Keep existing behavior for resume
                    behavior: 'smooth'
                });
            }
        }, 50);
    });
}); 