document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        setTimeout(() => {
            if (targetId === 'projects') {
                const projectsOffset = document.getElementById('projects').offsetTop + 50;
                window.scrollTo({
                    top: projectsOffset,
                    behavior: 'smooth'
                });
            } else if (targetId === 'resume') {
                const resumeOffset = document.getElementById('resume').offsetTop + 500;  // Same offset as projects
                window.scrollTo({
                    top: resumeOffset,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: targetSection.offsetTop - window.innerHeight/4,
                    behavior: 'smooth'
                });
            }
        }, 50);
    });
}); 