// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

class ModernPortfolio {
    constructor() {
        this.matrixActive = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.createMatrixEffect();
        this.startTypingAnimation();
        this.animateCodeBlock();
        this.animateStats();
        this.loadProjects();
        this.setupScrollIndicator();
        this.setupNavigation();
    }

    setupEventListeners() {
        // Matrix toggle
        const matrixToggle = document.getElementById('matrixToggle');
        if (matrixToggle) {
            matrixToggle.addEventListener('click', () => {
                this.toggleMatrix();
            });
        }

        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.scrollToSection(targetId);
                this.setActiveNavLink(link);
            });
        });

        // Scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                this.scrollToSection('#about');
            });
        }

        // Project filters
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                this.filterProjects(filter);
                this.setActiveFilter(btn);
            });
        });

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(e);
            });
        }

        // Scroll events
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    toggleMatrix() {
        this.matrixActive = !this.matrixActive;
        const body = document.body;
        const canvas = document.getElementById('matrix-bg');
        
        if (this.matrixActive) {
            body.classList.add('matrix-active');
            canvas.style.opacity = '0.1';
        } else {
            body.classList.remove('matrix-active');
            canvas.style.opacity = '0';
        }
    }

    scrollToSection(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    setActiveNavLink(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    setupScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.style.cursor = 'pointer';
        }
    }

    setupNavigation() {
        // Update active nav link based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    startTypingAnimation() {
        const typingText = document.getElementById('typingText');
        if (!typingText) return;

        // Get typing texts from language manager
        const getTypingTexts = () => {
            if (window.languageManager) {
                return window.languageManager.getTypingTexts();
            }
            return [
                'Desarrollador Full Stack',
                'Experto en E-commerce',
                'Especialista en IA',
                'Consultor Tecnológico'
            ];
        };

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeSpeed = 100;
        const deleteSpeed = 50;
        const pauseTime = 2000;

        const typeText = () => {
            const texts = getTypingTexts();
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let nextDelay = isDeleting ? deleteSpeed : typeSpeed;

            if (!isDeleting && charIndex === currentText.length) {
                nextDelay = pauseTime;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(typeText, nextDelay);
        };

        typeText();
    }

    animateCodeBlock() {
        const codeAnimation = document.getElementById('codeAnimation');
        if (!codeAnimation) return;

        const codeLines = [
            'const proyecto = new Innovation();',
            'if (cliente.necesidad) {',
            '  const solucion = desarrollar();',
            '  solucion.implementar();',
            '  return exito.garantizado;',
            '}',
            '',
            '// Construyendo el futuro...',
            'console.log("¡Listo para colaborar!");'
        ];

        let lineIndex = 0;
        
        const addLine = () => {
            if (lineIndex < codeLines.length) {
                const line = document.createElement('div');
                line.textContent = codeLines[lineIndex];
                line.style.opacity = '0';
                line.style.animation = 'fadeInUp 0.5s ease forwards';
                codeAnimation.appendChild(line);
                
                lineIndex++;
                setTimeout(addLine, 800);
            } else {
                // Reset animation
                setTimeout(() => {
                    codeAnimation.innerHTML = '';
                    lineIndex = 0;
                    addLine();
                }, 3000);
            }
        };

        // Add fadeInUp animation to CSS if not exists
        if (!document.querySelector('#fadeInUpStyle')) {
            const style = document.createElement('style');
            style.id = 'fadeInUpStyle';
            style.textContent = `
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }

        setTimeout(addLine, 1000);
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const animateNumber = (element) => {
            const target = parseInt(element.dataset.target);
            const increment = target / 100;
            let current = 0;
            
            const updateNumber = () => {
                if (current < target) {
                    current += increment;
                    element.textContent = Math.ceil(current);
                    requestAnimationFrame(updateNumber);
                } else {
                    element.textContent = target;
                }
            };
            
            updateNumber();
        };

        // Intersection Observer for stats animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumber = entry.target.querySelector('.stat-number');
                    if (statNumber && !statNumber.classList.contains('animated')) {
                        statNumber.classList.add('animated');
                        animateNumber(statNumber);
                    }
                }
            });
        });

        document.querySelectorAll('.stat-item').forEach(item => {
            observer.observe(item);
        });
    }

    loadProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;

        // Use centralized projects database
        const projects = window.projectsDB ? 
            window.projectsDB.getPortfolioProjects() : 
            this.getFallbackProjects();

        projectsGrid.innerHTML = '';
        
        projects.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });

        // Re-observe new project cards for animations
        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });
    }

    getFallbackProjects() {
        // Fallback projects in case database is not loaded
        return [
            {
                title: { es: 'Registro de Almuerzos Diarios', en: 'Daily Lunch Registration' },
                category: 'management',
                description: { es: 'Aplicación simple para registrar y gestionar almuerzos diarios de empleados', en: 'Simple application to register and manage daily employee lunches' },
                images: [
                    'assets/portfolio/launches/sc1.png',
                    'assets/portfolio/launches/sc2.png',
                    'assets/portfolio/launches/sc3.png'
                ],
                technologies: ['Angular', 'PHP', 'MySQL'],
                link: 'portfolio/launches.html'
            }
        ];
    }

    filterProjects(filter) {
        const projects = document.querySelectorAll('.project-card');
        
        projects.forEach(project => {
            const projectCategory = project.classList.contains('management') ? 'management' :
                                  project.classList.contains('ecommerce') ? 'ecommerce' :
                                  project.classList.contains('webapp') ? 'webapp' : 'all';
            
            if (filter === 'all' || projectCategory === filter) {
                project.style.display = 'block';
                // Add animation when showing
                setTimeout(() => {
                    project.style.animation = 'fadeInUp 0.5s ease forwards';
                }, 100);
            } else {
                project.style.display = 'none';
            }
        });
    }

    setActiveFilter(activeBtn) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = `project-card ${project.category}`;
        
        // Get current language
        const currentLang = window.languageManager ? window.languageManager.getCurrentLanguage() : 'es';
        const title = window.projectsDB ? window.projectsDB.getLocalizedText(project.title, currentLang) : project.title;
        const description = window.projectsDB ? window.projectsDB.getLocalizedText(project.description, currentLang) : project.description;
        
        // Create images HTML
        const imagesHTML = `
            <div class="project-images">
                <div class="images-container">
                    ${project.images.map((image, index) => `
                        <div class="image-slide ${index === 0 ? 'active' : ''}">
                            ${image.endsWith('.webm') ? 
                                `<video src="${image}" autoplay muted loop></video>` : 
                                `<img src="${image}" alt="${title} - Image ${index + 1}">`
                            }
                        </div>
                    `).join('')}
                </div>
                <div class="project-overlay">
                    <a href="${project.link}" class="project-btn" data-translate="project-view-btn">Ver Proyecto</a>
                </div>
            </div>
        `;
        
        card.innerHTML = `
            ${imagesHTML}
            <div class="project-content">
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;

        this.initializeImageRotation(card);

        // Add project card styles if not exists
        if (!document.querySelector('#projectCardStyle')) {
            const style = document.createElement('style');
            style.id = 'projectCardStyle';
            style.textContent = `
                .project-card {
                    background: white;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .project-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                }
                .project-images {
                    position: relative;
                    height: 250px;
                    overflow: hidden;
                }
                .images-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                .image-slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 1s ease-in-out;
                }
                .image-slide.active {
                    opacity: 1;
                }
                .image-slide img,
                .image-slide video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .project-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(37, 99, 235, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    z-index: 2;
                }
                .project-card:hover .project-overlay {
                    opacity: 1;
                }
                .project-btn {
                    background: white;
                    color: #2563eb;
                    padding: 12px 24px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: transform 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }
                .project-btn:hover {
                    transform: scale(1.05);
                }
                .project-content {
                    padding: 20px;
                }
                .project-content h3 {
                    margin-bottom: 10px;
                    color: #1f2937;
                    font-size: 1.2rem;
                }
                .project-content p {
                    color: #6b7280;
                    margin-bottom: 15px;
                    font-size: 14px;
                    line-height: 1.5;
                }
                .project-tech {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }
                .tech-tag {
                    background: #f3f4f6;
                    color: #374151;
                    padding: 4px 10px;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: 500;
                }
            `;
            document.head.appendChild(style);
        }

        return card;
    }

    initializeImageRotation(card) {
        const slides = card.querySelectorAll('.image-slide');
        const images = card.querySelector('.project-images');
        
        if (slides.length <= 1) return; // No need to rotate if only one image
        
        let currentSlide = 0;
        let autoSlideInterval;
        
        const goToNextSlide = () => {
            // Remove active class from current slide
            slides[currentSlide].classList.remove('active');
            
            // Move to next slide
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Add active class to new slide
            slides[currentSlide].classList.add('active');
        };
        
        const startAutoSlide = () => {
            autoSlideInterval = setInterval(goToNextSlide, 3000); // Change image every 3 seconds
        };
        
        const stopAutoSlide = () => {
            clearInterval(autoSlideInterval);
        };
        
        // Pause rotation on hover
        images.addEventListener('mouseenter', stopAutoSlide);
        images.addEventListener('mouseleave', startAutoSlide);
        
        // Start auto-rotation
        startAutoSlide();
    }

    handleContactForm(e) {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('¡Mensaje enviado correctamente! Te contactaré pronto.');
            e.target.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    handleScroll() {
        const nav = document.getElementById('mainNav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    }

    createMatrixEffect() {
        const canvas = document.getElementById('matrix-bg');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");
        
        const fontSize = 10;
        const columns = canvas.width / fontSize;
        
        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
        
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff00';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };
        
        setInterval(draw, 35);

        // Handle window resize
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
}

// Update initialization to include projects database and fix filter buttons
window.initTypingAnimation = function() {
    const portfolio = new ModernPortfolio();
    portfolio.startTypingAnimation();
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ModernPortfolio();
});
