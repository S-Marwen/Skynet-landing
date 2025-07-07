document.addEventListener('DOMContentLoaded', function() {
    // Exemple : Ajout d'un effet de scroll doux pour les liens d'ancrage
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Exemple : Affichage dynamique de l'année dans le footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Ajoutez ici d'autres interactions selon le contenu de votre index.html
});