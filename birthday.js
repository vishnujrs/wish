// Create floating balloons
function createBalloons() {
    const colors = ['#ff69b4', '#ff1493', '#ff6b6b', '#43c6ac', '#f8ffae'];
    const balloonContainer = document.querySelector('.balloons');
    
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDuration = `${Math.random() * 3 + 2}s`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        balloonContainer.appendChild(balloon);
    }
}

// Add confetti effect
function createConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#43c6ac', '#f8ffae', '#fff'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(confetti);
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createBalloons();
    createConfetti();
    
    // Add click event to gift box for surprise animation
    const giftBox = document.querySelector('.gift-box');
    giftBox.addEventListener('click', () => {
        giftBox.style.animation = 'giftPop 0.5s forwards';
        createConfetti();
    });

    // Add click handler for floating images
    const images = document.querySelectorAll('.floating-image');
    images.forEach(img => {
        img.addEventListener('click', () => {
            img.style.transform = 'scale(1.2) rotateY(-25deg)';
            setTimeout(() => {
                img.style.transform = '';
            }, 1000);
            
            // Create sparkles around the clicked image
            for(let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.className = 'sparkle';
                    sparkle.style.left = `${Math.random() * 200}px`;
                    sparkle.style.top = `${Math.random() * 300}px`;
                    img.parentElement.appendChild(sparkle);
                    
                    setTimeout(() => sparkle.remove(), 1000);
                }, i * 100);
            }
        });
    });

    // Debug image loading
    images.forEach(img => {
        img.addEventListener('load', () => {
            console.log('Image loaded successfully:', img.src);
        });
        
        img.addEventListener('error', () => {
            console.error('Error loading image:', img.src);
            // Try alternative path
            if (img.src.includes('images/')) {
                img.src = img.src.split('images/')[1];
            }
        });
    });
});

// Add some sparkle effects
function addSparkles() {
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.top = `${Math.random() * 100}vh`;
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }, 200);
}

addSparkles();

// Create sparkle effect on mouse movement
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) { // Reduce frequency of sparkles
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
});

// Enhanced cake animation
document.querySelector('.cake').addEventListener('mouseenter', () => {
    const extraSparkles = 10;
    for (let i = 0; i < extraSparkles; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${Math.random() * 200}px`;
            sparkle.style.top = `${Math.random() * 200}px`;
            document.querySelector('.cake').appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 100);
    }
});

// Add this to create floating light orbs
function createLightOrbs() {
    const orbsContainer = document.querySelector('.light-orbs');
    const colors = [
        'rgba(255, 107, 107, 0.3)',
        'rgba(255, 217, 61, 0.3)',
        'rgba(108, 92, 231, 0.3)',
        'rgba(168, 230, 207, 0.3)'
    ];
    
    for (let i = 0; i < 15; i++) {
        const orb = document.createElement('div');
        orb.className = 'orb';
        orb.style.width = Math.random() * 200 + 50 + 'px';
        orb.style.height = orb.style.width;
        orb.style.left = Math.random() * 100 + 'vw';
        orb.style.top = Math.random() * 100 + 'vh';
        orb.style.background = colors[Math.floor(Math.random() * colors.length)];
        orb.style.animationDelay = -Math.random() * 20 + 's';
        orb.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        orbsContainer.appendChild(orb);
    }
}

// Initialize light orbs when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createLightOrbs();
    // Your existing initialization code...
});

// Add subtle parallax effect to orbs on mouse move
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.orb');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    orbs.forEach(orb => {
        const speed = parseFloat(orb.style.width) / 1000;
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
}); 