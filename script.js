// 🏰 JavaScript per il Borgo Marino Medievale
// Effetti interattivi e animazioni dinamiche marine

document.addEventListener('DOMContentLoaded', function() {
    // 🌊 Sistema di particelle marine per l'effetto ipnotizzante
    createMarineParticleSystem();
    // 📜 Animazioni di scroll
    initScrollAnimations();
    // 🎭 Effetti parallax marini
    initMarineParallaxEffects();
    // ⚓ Animazioni degli elementi fluttuanti marini
    enhanceMarineFloatingElements();
    // 🎯 Effetti hover avanzati
    initAdvancedHoverEffects();
    // 🌊 Effetti di onde oceaniche
    createOceanWaveEffect();
    // 🎪 Animazioni dei pulsanti CTA
    enhanceCTAButtons();
    // 🔮 Effetti di illuminazione marina dinamica
    initMarineDynamicLighting();
    // 🚢 Effetti sonori marini (opzionali)
    initMarineSoundEffects();
});

// 🗺️ Funzione per aprire Google Maps
function openGoogleMaps() {
    const address = "Via Marconi 8, Giglio Castello";
    const business = "Ghibli Fashion";
    const encodedAddress = encodeURIComponent(`${address}, ${business}`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    
    // Apri Google Maps in una nuova tab
    window.open(mapsUrl, '_blank');
    
    // Effetto di feedback visivo
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
    
    console.log('🗺️ Apertura Google Maps per:', address, business);
}

// 🌊 Sistema di particelle marine
function createMarineParticleSystem() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'marine-particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    hero.appendChild(particleContainer);
    
    // Crea particelle marine
    for (let i = 0; i < 60; i++) {
        createMarineParticle(particleContainer);
    }
    
    // Animazione continua delle particelle
    setInterval(() => {
        const particles = particleContainer.querySelectorAll('.marine-particle');
        particles.forEach(particle => {
            if (particle.offsetTop < -100) {
                particle.style.top = '100vh';
                particle.style.left = Math.random() * 100 + '%';
            }
        });
    }, 100);
}

function createMarineParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'marine-particle';
    
    // Emoji marine più artistiche e serie
    const marineEmojis = ['🌊', '🐚', '⚓', '🚢', '💎', '🌊', '🐟', '🦀', '🦈', '🏺', '✨', '🎨'];
    particle.innerHTML = marineEmojis[Math.floor(Math.random() * marineEmojis.length)];
    
    particle.style.cssText = `
        position: absolute;
        font-size: ${8 + Math.random() * 16}px;
        color: rgba(245, 158, 11, ${0.4 + Math.random() * 0.6});
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: marineParticleFloat ${10 + Math.random() * 6}s linear infinite;
        animation-delay: ${Math.random() * 8}s;
        filter: drop-shadow(0 0 5px rgba(245, 158, 11, 0.5));
        pointer-events: none;
    `;
    
    container.appendChild(particle);
}

// 📜 Animazioni di scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Osserva tutti gli elementi con animazioni
    document.querySelectorAll('.section-header, .about-content, .location-content, .history-content, .product-category').forEach(el => {
        observer.observe(el);
    });
}

// 🎭 Effetti parallax marini
function initMarineParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-item, .ocean-waves');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ⚓ Animazioni degli elementi fluttuanti marini
function enhanceMarineFloatingElements() {
    const floatingItems = document.querySelectorAll('.floating-item');
    
    floatingItems.forEach((item, index) => {
        // Animazioni più serie e artistiche
        item.style.animation = `marineFloat ${6 + index}s ease-in-out infinite`;
        item.style.animationDelay = `${index * 0.5}s`;
        
        // Effetti click più eleganti
        item.addEventListener('click', function() {
            createMarineRippleEffect(this);
            this.style.transform = 'scale(1.3) rotate(360deg)';
            this.style.filter = 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.8))';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.filter = '';
            }, 600);
        });
        
        // Hover effects più raffinati
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.filter = 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.6))';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.5))';
        });
    });
}

// 🎯 Effetti hover avanzati
function initAdvancedHoverEffects() {
    // Hover effects per le categorie prodotti
    const productCategories = document.querySelectorAll('.product-category');
    productCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(245, 158, 11, 0.3)';
            this.style.borderColor = '#f59e0b';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });
    });
}

// 🌊 Effetti di onde oceaniche
function createOceanWaveEffect() {
    // Aggiungi rotazione hue alle onde esistenti
    const waves = document.querySelectorAll('.wave');
    waves.forEach((wave, index) => {
        wave.style.filter = `hue-rotate(${index * 30}deg)`;
    });
}

// 🎪 Animazioni dei pulsanti CTA
function enhanceCTAButtons() {
    const ctaButton = document.querySelector('.cta-primary');
    if (!ctaButton) return;
    
    // Effetto ripple al click
    ctaButton.addEventListener('click', function(e) {
        createMarineButtonRipple(e, this);
    });
    
    // Animazione pulse continua
    setInterval(() => {
        ctaButton.style.animation = 'marineButtonPulse 2s ease-in-out';
        setTimeout(() => {
            ctaButton.style.animation = '';
        }, 2000);
    }, 4000);
}

// 🔮 Illuminazione marina dinamica
function initMarineDynamicLighting() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    hero.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.background = `
            radial-gradient(circle at ${x}px ${y}px, 
                rgba(245, 158, 11, 0.2) 0%, 
                rgba(59, 130, 246, 0.6) 40%, 
                rgba(15, 23, 42, 0.9) 100%)
        `;
    });
    
    hero.addEventListener('mouseleave', function() {
        this.style.background = '';
    });
}

// 🚢 Effetti sonori marini (opzionali)
function initMarineSoundEffects() {
    // Simula effetti sonori con vibrazioni
    const marineElements = document.querySelectorAll('.floating-item, .product-category');
    
    marineElements.forEach(element => {
        element.addEventListener('click', function() {
            // Effetto di vibrazione per simulare suono
            this.style.animation = 'marineVibrate 0.3s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });
}

// 🎨 Effetti ripple marini
function createMarineRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.className = 'marine-ripple';
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(245, 158, 11, 0.6), transparent);
        transform: scale(0);
        animation: marineRipple 0.6s ease-out;
        pointer-events: none;
        z-index: 1000;
    `;
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = rect.width / 2 - size / 2;
    const y = rect.height / 2 - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function createMarineButtonRipple(event, button) {
    const ripple = document.createElement('div');
    ripple.className = 'marine-button-ripple';
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(245, 158, 11, 0.6), transparent);
        border-radius: 50%;
        transform: scale(0);
        animation: marineRipple 0.6s ease-out;
        pointer-events: none;
        z-index: 1000;
    `;
    
    button.style.position = 'relative';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// 📱 Gestione responsive e ottimizzazioni marine
function handleMarineResize() {
    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile-device');
        
        // Riduci particelle su mobile
        const particles = document.querySelectorAll('.marine-particle');
        particles.forEach((particle, index) => {
            if (index > 25) particle.style.display = 'none';
        });
        
        // Nascondi elementi fluttuanti su mobile
        const floatingItems = document.querySelectorAll('.floating-item');
        floatingItems.forEach(item => {
            item.style.display = 'none';
        });
    } else {
        document.body.classList.remove('mobile-device');
        document.querySelectorAll('.marine-particle').forEach(particle => {
            particle.style.display = 'block';
        });
        document.querySelectorAll('.floating-item').forEach(item => {
            item.style.display = 'block';
        });
    }
}

// Event listener per il resize
window.addEventListener('resize', handleMarineResize);
handleMarineResize();

// 🌊 Aggiungi CSS per le nuove animazioni marine
const marineStyles = document.createElement('style');
marineStyles.textContent = `
    @keyframes marineParticleFloat {
        0% { transform: translateY(100vh) rotate(0deg) scale(0.5); opacity: 0; }
        10% { opacity: 1; transform: scale(1); }
        90% { opacity: 1; transform: scale(1); }
        100% { transform: translateY(-100px) rotate(360deg) scale(0.5); opacity: 0; }
    }
    
    @keyframes marineFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
    }
    
    @keyframes marineRotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes marineSlideInFromLeft {
        from { transform: translateX(-100px) rotateY(-15deg); opacity: 0; }
        to { transform: translateX(0) rotateY(0deg); opacity: 1; }
    }
    
    @keyframes marineSlideInFromRight {
        from { transform: translateX(100px) rotateY(15deg); opacity: 0; }
        to { transform: translateX(0) rotateY(0deg); opacity: 1; }
    }
    
    @keyframes marineSlideInFromBottom {
        from { transform: translateY(100px) rotateX(-15deg); opacity: 0; }
        to { transform: translateY(0) rotateX(0deg); opacity: 1; }
    }
    
    @keyframes marineButtonPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes marineRipple {
        to { transform: scale(4); opacity: 0; }
    }
    
    @keyframes marineVibrate {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        75% { transform: translateX(2px); }
    }
    
    .mobile-device .floating-item {
        display: none;
    }
    
    .mobile-device .marine-particle {
        font-size: 8px;
    }
    
    .floating-item {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .floating-item:hover {
        transform: scale(1.1);
        filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.6));
    }
    
    .cta-primary {
        transition: all 0.3s ease;
    }
    
    .cta-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(245, 158, 11, 0.6);
    }
    
    .cta-primary:active {
        transform: translateY(-1px);
    }
`;

document.head.appendChild(marineStyles);

console.log('🏰 JavaScript per il Borgo Marino Medievale caricato con successo!');
console.log('🌊 Tutti gli effetti marini sono attivi');
console.log('🗺️ Pulsante "Vieni a trovarci" collegato a Google Maps');
console.log('🎨 Elementi fluttuanti aggiornati con stile più artistico e serio'); 