export function snowflakeCursor(options) {
    let hasWrapperEl = options && options.element;
    let element = hasWrapperEl || document.body;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: width / 2 };
    let particles = [];
    let canvas, context, animationFrame;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };

    function init() {
      if (prefersReducedMotion.matches) {
        console.log(
          "This browser has prefers reduced motion turned on, so the cursor did not init"
        );
        return false;
      }

      canvas = document.createElement("canvas");
      context = canvas.getContext("2d");

      canvas.style.top = "0px";
      canvas.style.left = "0px";
      canvas.style.pointerEvents = "none";

      if (hasWrapperEl) {
        canvas.style.position = "absolute";
        element.appendChild(canvas);
        canvas.width = element.clientWidth;
        canvas.height = element.clientHeight;
      } else {
        canvas.style.position = "fixed";
        document.body.appendChild(canvas);
        canvas.width = width;
        canvas.height = height;
      }

      bindEvents();
      loop();
    }

    function bindEvents() {
      element.addEventListener("mousemove", onMouseMove);
      element.addEventListener("touchmove", onTouchMove, { passive: true });
      element.addEventListener("touchstart", onTouchMove, { passive: true });
      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize(e) {
      width = window.innerWidth;
      height = window.innerHeight;

      if (hasWrapperEl) {
        canvas.width = element.clientWidth;
        canvas.height = element.clientHeight;
      } else {
        canvas.width = width;
        canvas.height = height;
      }
    }

    function onTouchMove(e) {
      if (e.touches.length > 0) {
        for (let i = 0; i < e.touches.length; i++) {
          addParticle(e.touches[i].clientX, e.touches[i].clientY);
        }
      }
    }

    function onMouseMove(e) {
      if (hasWrapperEl) {
        const boundingRect = element.getBoundingClientRect();
        cursor.x = e.clientX - boundingRect.left;
        cursor.y = e.clientY - boundingRect.top;
      } else {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
      }

      addParticle(cursor.x, cursor.y);
    }

    function addParticle(x, y) {
      particles.push(new Particle(x, y));
    }

    function updateParticles() {
      if (particles.length == 0) {
        return;
      }

      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(context);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].lifeSpan < 0) {
          particles.splice(i, 1);
        }
      }

      if (particles.length == 0) {
        context.clearRect(0, 0, width, height);
      }
    }

    function loop() {
      updateParticles();
      animationFrame = requestAnimationFrame(loop);
    }

    function destroy() {
      canvas.remove();
      cancelAnimationFrame(animationFrame);
      element.removeEventListener("mousemove", onMouseMove);
      element.removeEventListener("touchmove", onTouchMove);
      element.removeEventListener("touchstart", onTouchMove);
      window.addEventListener("resize", onWindowResize);
    };

    function Particle(x, y) {
        const lifeSpan = Math.floor(Math.random() * 60 + 80);
        this.initialLifeSpan = lifeSpan;
        this.lifeSpan = lifeSpan;
        this.velocity = {
            x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
            y: 1 + Math.random(),
        };
        this.position = { x: x, y: y };
    
        this.update = function (context) {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.lifeSpan--;
    
            const scale = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
            context.globalAlpha = scale;
    
            // Créer un dégradé radial pour chaque flocon
            const gradient = context.createRadialGradient(
                this.position.x, this.position.y, 0, 
                this.position.x, this.position.y, 5 * scale
            );
    
            // Ajouter les couleurs pour simuler le dégradé linéaire
            gradient.addColorStop(0, "#DA7C25"); // Couleur de départ
            gradient.addColorStop(1, "#B923E1"); // Couleur de fin
    
            context.fillStyle = gradient;
            context.beginPath();
            context.arc(this.position.x, this.position.y, 5 * scale, 0, 2 * Math.PI);
            context.fill();
        };
    }
    

    init();

    return {
      destroy: destroy
    }
}
