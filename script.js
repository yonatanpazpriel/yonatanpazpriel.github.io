document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Calculate header height - adjust this to match your header's actual height
        const headerHeight = document.querySelector('header').offsetHeight;
        
        // Use a consistent offset calculation for all sections
        const offset = targetId === 'projects' || targetId === 'resume' 
            ? headerHeight + 50  // Adjust this value as needed
            : headerHeight;      // Or use window.innerHeight/4 if you prefer that spacing
            
        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});