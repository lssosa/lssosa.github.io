class ProjectPage {
    constructor() {
        this.projectId = this.getProjectIdFromUrl();
        this.currentLang = 'es';
        this.init();
    }

    getProjectIdFromUrl() {
        // Extract project ID from current page URL
        const path = window.location.pathname;
        const filename = path.split('/').pop().replace('.html', '');
        return filename;
    }

    init() {
        // Wait for language manager to be ready
        if (window.languageManager) {
            this.currentLang = window.languageManager.getCurrentLanguage();
        }
        
        this.loadProjectData();
        this.loadGallery();
        this.loadRelatedProjects();
        this.setupGalleryModal();
        this.setupScrollToVideo();
        this.setupNavigation();
        this.setupLanguageChangeListener();
    }

    setupLanguageChangeListener() {
        // Listen for language changes and reload content
        if (window.languageManager) {
            const originalToggle = window.languageManager.toggleLanguage;
            window.languageManager.toggleLanguage = () => {
                originalToggle.call(window.languageManager);
                this.currentLang = window.languageManager.getCurrentLanguage();
                this.loadProjectData();
                this.loadGallery();
                this.loadRelatedProjects();
            };
        }
    }

    loadProjectData() {
        if (!window.projectsDB) return;
        
        const projectData = window.projectsDB.getProjectPageData(this.projectId, this.currentLang);
        if (!projectData) return;

        // Update page title
        document.title = `${projectData.title} - Lucas Sebastian Sosa`;
        
        // Update project info in the page
        this.updateProjectInfo(projectData);
    }

    updateProjectInfo(project) {
        // Update specifications dynamically
        const specDuration = document.querySelector('[data-translate="spec-duration-value"]');
        const specTeam = document.querySelector('[data-translate="spec-team-value"]');
        const specSecurity = document.querySelector('[data-translate="spec-security-value"]');
        
        if (specDuration) specDuration.textContent = project.specs.duration;
        if (specTeam) specTeam.textContent = project.specs.team;
        if (specSecurity) specSecurity.textContent = project.specs.security;

        // Update frontend/backend specs
        const frontendSpec = document.querySelector('[data-translate="spec-frontend"]')?.nextElementSibling;
        const backendSpec = document.querySelector('[data-translate="spec-backend"]')?.nextElementSibling;
        
        if (frontendSpec) frontendSpec.textContent = project.specs.frontend;
        if (backendSpec) backendSpec.textContent = project.specs.backend;
    }

    loadGallery() {
        const galleryGrid = document.getElementById('galleryGrid');
        if (!galleryGrid || !window.projectsDB) return;

        const projectData = window.projectsDB.getProjectPageData(this.projectId, this.currentLang);
        if (!projectData || !projectData.galleryItems) return;

        galleryGrid.innerHTML = '';
        
        projectData.galleryItems.forEach((item, index) => {
            const galleryItem = this.createGalleryItem(item, index);
            galleryGrid.appendChild(galleryItem);
        });
    }

    loadRelatedProjects() {
        const relatedGrid = document.getElementById('relatedProjectsGrid');
        if (!relatedGrid || !window.projectsDB) return;

        const relatedProjects = window.projectsDB.getRelatedProjects(this.projectId, 2);
        
        relatedGrid.innerHTML = '';
        
        if (relatedProjects.length === 0) {
            // Hide the entire related projects section if no related projects
            const relatedSection = document.querySelector('.related-projects-section');
            if (relatedSection) {
                relatedSection.style.display = 'none';
            }
            return;
        }

        // Show the section if it was hidden
        const relatedSection = document.querySelector('.related-projects-section');
        if (relatedSection) {
            relatedSection.style.display = 'block';
        }
        
        relatedProjects.forEach(project => {
            const relatedCard = this.createRelatedProjectCard(project);
            relatedGrid.appendChild(relatedCard);
        });
    }

    createRelatedProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'related-card';
        
        const title = window.projectsDB.getLocalizedText(project.title, this.currentLang);
        const description = window.projectsDB.getLocalizedText(project.description, this.currentLang);
        
        // Create carousel for related project images
        const imagesHTML = `
            <div class="related-images">
                <div class="related-images-container">
                    ${project.images.map((image, index) => `
                        <div class="related-image-slide ${index === 0 ? 'active' : ''}">
                            ${image.endsWith('.webm') ? 
                                `<video src="${image}" autoplay muted loop></video>` : 
                                `<img src="${image}" alt="${title} - Image ${index + 1}" loading="lazy">`
                            }
                        </div>
                    `).join('')}
                </div>
                <div class="related-overlay">
                    <div class="related-overlay-content">
                        <p>${description}</p>
                        <div class="related-tech">
                            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
            <div class="related-content">
                <h3>${title}</h3>
            </div>
        `;
        
        card.innerHTML = imagesHTML;

        // Initialize carousel for this related project
        this.initializeRelatedCarousel(card);

        // Make card clickable if it has a valid link
        if (project.link && project.link !== '#') {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                window.location.href = project.link;
            });
            
            // Add hover effect for clickable cards
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        }

        return card;
    }

    initializeRelatedCarousel(card) {
        const slides = card.querySelectorAll('.related-image-slide');
        const images = card.querySelector('.related-images');
        
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
            autoSlideInterval = setInterval(goToNextSlide, 3500); // Change image every 3.5 seconds
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

    createGalleryItem(item, index) {
        const itemElement = document.createElement('div');
        itemElement.className = 'gallery-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="gallery-item-info">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;

        itemElement.addEventListener('click', () => {
            this.openGalleryModal(item.image, item.title);
        });

        return itemElement;
    }

    setupGalleryModal() {
        // Create modal HTML if it doesn't exist
        if (!document.getElementById('galleryModal')) {
            const modalHTML = `
                <div id="galleryModal" class="gallery-modal">
                    <div class="gallery-modal-content">
                        <span class="gallery-close">&times;</span>
                        <img id="galleryModalImg" src="" alt="">
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        const modal = document.getElementById('galleryModal');
        const closeBtn = document.querySelector('.gallery-close');

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }

    openGalleryModal(imageSrc, title) {
        const modal = document.getElementById('galleryModal');
        const modalImg = document.getElementById('galleryModalImg');
        
        modal.style.display = 'block';
        modalImg.src = imageSrc;
        modalImg.alt = title;
    }

    setupScrollToVideo() {
        const videoBtns = document.querySelectorAll('a[href="#demo-video"]');
        videoBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const videoSection = document.getElementById('demo-video');
                if (videoSection) {
                    videoSection.scrollIntoView({ behavior: 'smooth' });
                    
                    // Auto-play video when scrolled to
                    setTimeout(() => {
                        const video = document.getElementById('projectVideo');
                        if (video) {
                            video.play().catch(e => console.log('Auto-play prevented:', e));
                        }
                    }, 1000);
                }
            });
        });
    }

    setupNavigation() {
        // Mobile navigation toggle
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Update nav on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('mainNav');
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(255, 255, 255, 0.98)';
                nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectPage();
});
