import React, { useEffect } from "react";

function StarBackground() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    document.body.appendChild(canvas);

    // Définir la taille du canevas pour qu'il couvre toute la fenêtre
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Tableau pour stocker les étoiles
    let stars = [];

    // Classe représentant chaque étoile
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1; // Rayon entre 1 et 3 pixels
        this.alpha = Math.random() * 0.5 + 0.2; // Transparence
        this.speed = Math.random() * 0.5 + 0.5;
      }

      // Méthode pour dessiner l'étoile
      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = "#ffffff"; // Couleur des étoiles
        context.globalAlpha = this.alpha;
        context.fill();
      }

      // Méthode pour animer l'étoile (déplacement)
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -this.radius; // Revenir au sommet une fois l'étoile dépassée
        }
        this.draw();
      }
    }

    // Créer les étoiles et les ajouter au tableau
    for (let i = 0; i < 100; i++) {
      stars.push(new Star());
    }

    // Fonction d'animation
    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height); // Effacer l'ancien dessin
      stars.forEach((star) => star.update()); // Mettre à jour et dessiner chaque étoile
      requestAnimationFrame(animate); // Répéter l'animation
    }

    animate();

    // Gérer le redimensionnement de l'écran
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Nettoyer lors de la destruction du composant
    return () => {
      document.body.removeChild(canvas); // Supprimer le canevas quand le composant est démonté
      window.removeEventListener("resize", handleResize); // Supprimer le gestionnaire d'événements
    };
  }, []);

  return null;
}

export default StarBackground;
