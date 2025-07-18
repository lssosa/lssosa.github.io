class DynamicProjectPage {
    constructor() {
        this.projectId = this.getProjectIdFromUrl();
        this.currentLang = 'es';
        this.currentProject = null;
        this.init();
    }

    getProjectIdFromUrl() {
        // Get project ID from URL parameter: ?project=launches
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('project') || 'launches'; // Default to launches if no parameter
    }

    init() {
        // Wait for dependencies to load
        if (window.languageManager) {
            this.currentLang = window.languageManager.getCurrentLanguage();
        }

        // Check if project exists
        if (!window.projectsDB || !window.projectsDB.getProject(this.projectId)) {
            this.showNotFound();
            return;
        }

        this.loadProject();
        this.setupLanguageChangeListener();
        this.setupNavigation();
        this.setupGalleryModal();
        this.setupScrollToVideo();
    }

    showNotFound() {
        document.getElementById('projectTitle').textContent = 'Proyecto no encontrado';
        document.getElementById('projectDescription').textContent = 'El proyecto solicitado no existe.';
        
        // Hide sections that don't make sense without a project
        document.querySelector('.project-gallery-section').style.display = 'none';
        document.querySelector('.project-video-section').style.display = 'none';
        document.querySelector('.related-projects-section').style.display = 'none';
    }

    loadProject() {
        if (!window.projectsDB) return;

        this.currentProject = window.projectsDB.getProjectPageData(this.projectId, this.currentLang);
        if (!this.currentProject) {
            this.showNotFound();
            return;
        }

        this.updatePageContent();
        this.loadGallery();
        this.loadRelatedProjects();
    }

    updatePageContent() {
        const project = this.currentProject;

        // Update page title and meta
        document.title = `${project.title} - Lucas Sebastian Sosa`;
        document.getElementById('pageTitle').textContent = `${project.title} - Lucas Sebastian Sosa`;

        // Update hero section
        document.getElementById('projectTitle').textContent = project.title;
        document.getElementById('projectBreadcrumbTitle').textContent = project.title;

        // Update tech stack
        const techStackContainer = document.getElementById('projectTechStack');
        techStackContainer.innerHTML = project.technologies.map(tech => 
            `<span class="tech-badge">${tech}</span>`
        ).join('');

        // Update description
        document.getElementById('projectDescription').textContent = project.detailedDescription;

        // Update features
        const featuresList = document.getElementById('featuresList');
        featuresList.innerHTML = project.features.map(feature => 
            `<li><i class="fas fa-check"></i>${feature}</li>`
        ).join('');

        // Update technical description from projects-data.js
        document.getElementById('technicalDescription').textContent = project.technicalDescription;

        // Update specifications
        document.getElementById('specDuration').textContent = project.specs.duration;
        document.getElementById('specTeam').textContent = project.specs.team;
        document.getElementById('specFrontend').textContent = project.specs.frontend;
        document.getElementById('specBackend').textContent = project.specs.backend;
        document.getElementById('specSecurity').textContent = project.specs.security;

        // Update video
        const videoSource = document.getElementById('videoSource');
        const projectVideo = document.getElementById('projectVideo');
        if (project.demoVideo) {
            videoSource.src = `../${project.demoVideo}`;
            projectVideo.poster = `../${project.images[0]}`;
            projectVideo.load();
            document.querySelector('.project-video-section').style.display = 'block';
        } else {
            document.querySelector('.project-video-section').style.display = 'none';
        }

        // Update WhatsApp CTA
        const whatsappCTA = document.getElementById('whatsappCTA');
        const projectName = encodeURIComponent(project.title);
        whatsappCTA.href = `https://wa.me/5491133509980?text=Hola%20Lucas,%20vi%20el%20proyecto%20de%20${projectName}%20y%20me%20interesa%20algo%20similar`;
    }

    loadGallery() {
        const galleryGrid = document.getElementById('galleryGrid');
        if (!galleryGrid || !this.currentProject.galleryItems) return;

        galleryGrid.innerHTML = '';
        
        this.currentProject.galleryItems.forEach((item, index) => {
            const galleryItem = this.createGalleryItem(item, index);
            galleryGrid.appendChild(galleryItem);
        });
    }

    createGalleryItem(item, index) {
        const itemElement = document.createElement('div');
        itemElement.className = 'gallery-item';
        itemElement.innerHTML = `
            <img src="../${item.image}" alt="${item.title}" loading="lazy">
            <div class="gallery-item-info">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;

        itemElement.addEventListener('click', () => {
            this.openGalleryModal(`../${item.image}`, item.title);
        });

        return itemElement;
    }

    loadRelatedProjects() {
        const relatedGrid = document.getElementById('relatedProjectsGrid');
        if (!relatedGrid || !window.projectsDB) return;

        const relatedProjects = window.projectsDB.getRelatedProjects(this.projectId, 2);
        
        relatedGrid.innerHTML = '';
        
        if (relatedProjects.length === 0) {
            document.querySelector('.related-projects-section').style.display = 'none';
            return;
        }

        document.querySelector('.related-projects-section').style.display = 'block';
        
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
        
        const imagesHTML = `
            <div class="related-images">
                <div class="related-images-container">
                    ${project.images.map((image, index) => `
                        <div class="related-image-slide ${index === 0 ? 'active' : ''}">
                            ${image.endsWith('.webm') ? 
                                `<video src="../${image}" autoplay muted loop></video>` : 
                                `<img src="../${image}" alt="${title} - Image ${index + 1}" loading="lazy">`
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
        this.initializeRelatedCarousel(card);

        // Make card clickable
        if (project.id) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                window.location.href = `project.html?project=${project.id}`;
            });
        }

        return card;
    }

    initializeRelatedCarousel(card) {
        const slides = card.querySelectorAll('.related-image-slide');
        if (slides.length <= 1) return;
        
        let currentSlide = 0;
        let autoSlideInterval;
        
        const goToNextSlide = () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        };
        
        const startAutoSlide = () => {
            autoSlideInterval = setInterval(goToNextSlide, 3500);
        };
        
        const stopAutoSlide = () => {
            clearInterval(autoSlideInterval);
        };
        
        card.addEventListener('mouseenter', stopAutoSlide);
        card.addEventListener('mouseleave', startAutoSlide);
        startAutoSlide();
    }

    setupLanguageChangeListener() {
        if (window.languageManager) {
            const originalToggle = window.languageManager.toggleLanguage;
            window.languageManager.toggleLanguage = () => {
                originalToggle.call(window.languageManager);
                this.currentLang = window.languageManager.getCurrentLanguage();
                this.loadProject(); // Reload all content in new language
            };
        }
    }

    setupGalleryModal() {
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

        closeBtn.addEventListener('click', () => modal.style.display = 'none');
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
        
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
                if (videoSection && videoSection.style.display !== 'none') {
                    videoSection.scrollIntoView({ behavior: 'smooth' });
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
        // ...existing navigation code...
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

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
    new DynamicProjectPage();
});