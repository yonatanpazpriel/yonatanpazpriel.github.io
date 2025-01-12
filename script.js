document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Use a fixed offset if no header exists
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        
        // Use a consistent offset calculation for all sections
        const offset = targetId === 'projects' || targetId === 'resume' 
            ? headerHeight + 50  // Adjust this value as needed
            : headerHeight;      
            
        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});