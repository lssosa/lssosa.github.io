class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferred-language') || 'es';
        this.translations = {
            es: {
                'page-title': 'Lucas Sebastian Sosa - Desarrollador de Software',
                'nav-home': 'Inicio',
                'nav-about': 'Sobre Mí',
                'nav-skills': 'Skills',
                'nav-projects': 'Proyectos',
                'nav-contact': 'Contacto',
                'hero-subtitle': 'Desarrollo soluciones tecnológicas innovadoras para hacer crecer tu negocio',
                'hero-btn-projects': 'Ver Mis Trabajos',
                'hero-btn-contact': 'Contactar',
                'about-title': 'Sobre Mí',
                'about-subtitle': 'Tu Socio Tecnológico de Confianza',
                'about-description': 'Soy un arquitecto de software con más de 25 años de trayectoria en el desarrollo de soluciones tecnológicas innovadoras. Mi pasión radica en ayudar a empresas a escalar y optimizar sus operaciones a través de código eficiente y de vanguardia. Actualmente, mi expertise se centra en Go, Node.js, React, Angular y Flutter, con una sólida especialización en Inteligencia Artificial para resolver desafíos complejos y generar valor real.',
                'feature-innovation': 'Innovación',
                'feature-innovation-desc': 'Soluciones modernas y escalables',
                'feature-reliability': 'Confiabilidad',
                'feature-reliability-desc': 'Código seguro y mantenible',
                'feature-efficiency': 'Eficiencia',
                'feature-efficiency-desc': 'Entrega en tiempo y forma',
                'feature-collaboration': 'Colaboración',
                'feature-collaboration-desc': 'Comunicación clara y constante',
                'stat-projects': 'Proyectos Completados',
                'stat-clients': 'Clientes Satisfechos',
                'stat-experience': 'Años de Experiencia',
                'skills-title': 'Mis Skills Técnicos',
                'skills-subtitle': 'Tecnologías que domino con años de experiencia y nivel de expertise',
                'category-backend': 'Backend Development',
                'category-frontend': 'Frontend Development',
                'category-mobile': 'Mobile Development',
                'category-database': 'Database & DevOps',
                'category-ai': 'IA & Tecnologías Emergentes',
                'projects-title': 'Proyectos Destacados',
                'filter-all': 'Todos',
                'filter-ecommerce': 'E-commerce',
                'filter-management': 'Gestión',
                'filter-webapp': 'Web Apps',
                'contact-title': '¿Listo para Empezar?',
                'contact-subtitle': 'Conversemos sobre tu proyecto y cómo puedo ayudarte',
                'social-title': 'Conecta Conmigo',
                'social-github-desc': 'Ve mis proyectos y código',
                'social-linkedin-desc': 'Conectemos profesionalmente',
                'whatsapp-title': '¡Hablemos por WhatsApp!',
                'whatsapp-subtitle': 'La forma más rápida y directa de contactarme',
                'whatsapp-description': 'Conversemos sobre tu proyecto, resuelvo tus dudas al instante y te doy un presupuesto personalizado.',
                'whatsapp-btn': 'Iniciar Conversación',
                'benefit-immediate': 'Respuesta inmediata',
                'benefit-direct': 'Conversación directa',
                'benefit-quote': 'Presupuesto al instante',
                'footer-text': '© 2024 Lucas Sebastian Sosa. Desarrollando el futuro, un proyecto a la vez.',
                'typing-texts': [
                    'Hola, soy Lucas Sebastian Sosa',
                    'Desarrollador Full Stack',
                    'Arquitecto de Software',
                    'Especialista en IA'
                ],
                'related-title': 'Proyectos Relacionados'
            },
            en: {
                'page-title': 'Lucas Sebastian Sosa - Software Developer',
                'nav-home': 'Home',
                'nav-about': 'About Me',
                'nav-skills': 'Skills',
                'nav-projects': 'Projects',
                'nav-contact': 'Contact',
                'hero-subtitle': 'I develop innovative technological solutions to grow your business',
                'hero-btn-projects': 'View My Work',
                'hero-btn-contact': 'Contact Me',
                'about-title': 'About Me',
                'about-subtitle': 'Your Trusted Technology Partner',
                'about-description': 'I am a software architect with over 25 years of experience developing innovative technological solutions. My passion lies in helping companies scale and optimize their operations through efficient and cutting-edge code. Currently, my expertise focuses on Go, Node.js, React, Angular, and Flutter, with solid specialization in Artificial Intelligence to solve complex challenges and generate real value.',
                'feature-innovation': 'Innovation',
                'feature-innovation-desc': 'Modern and scalable solutions',
                'feature-reliability': 'Reliability',
                'feature-reliability-desc': 'Secure and maintainable code',
                'feature-efficiency': 'Efficiency',
                'feature-efficiency-desc': 'On-time delivery',
                'feature-collaboration': 'Collaboration',
                'feature-collaboration-desc': 'Clear and constant communication',
                'stat-projects': 'Completed Projects',
                'stat-clients': 'Satisfied Clients',
                'stat-experience': 'Years of Experience',
                'skills-title': 'My Technical Skills',
                'skills-subtitle': 'Technologies I master with years of experience and expertise level',
                'category-backend': 'Backend Development',
                'category-frontend': 'Frontend Development',
                'category-mobile': 'Mobile Development',
                'category-database': 'Database & DevOps',
                'category-ai': 'AI & Emerging Technologies',
                'projects-title': 'Featured Projects',
                'filter-all': 'All',
                'filter-ecommerce': 'E-commerce',
                'filter-management': 'Management',
                'filter-webapp': 'Web Apps',
                'contact-title': 'Ready to Get Started?',
                'contact-subtitle': "Let's talk about your project and how I can help you",
                'social-title': 'Connect With Me',
                'social-github-desc': 'See my projects and code',
                'social-linkedin-desc': "Let's connect professionally",
                'whatsapp-title': "Let's Talk on WhatsApp!",
                'whatsapp-subtitle': 'The fastest and most direct way to contact me',
                'whatsapp-description': "Let's discuss your project, I'll resolve your doubts instantly and give you a personalized quote.",
                'whatsapp-btn': 'Start Conversation',
                'benefit-immediate': 'Immediate response',
                'benefit-direct': 'Direct conversation',
                'benefit-quote': 'Instant quote',
                'footer-text': '© 2024 Lucas Sebastian Sosa. Building the future, one project at a time.',
                'typing-texts': [
                    'Hello, I am Lucas Sebastian Sosa',
                    'Full Stack Developer',
                    'Software Architect',
                    'AI Specialist'
                ],
                'project-view-btn': 'View Project',
                'related-title': 'Related Projects'
            }
        };
        
        // Add missing Spanish translation
        this.translations.es['project-view-btn'] = 'Ver Proyecto';
        
        this.init();
    }

    init() {
        this.updateLanguageDisplay();
        this.translatePage();
        this.setupEventListeners();
        document.documentElement.lang = this.currentLanguage;
    }

    setupEventListeners() {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
        localStorage.setItem('preferred-language', this.currentLanguage);
        this.updateLanguageDisplay();
        this.translatePage();
        document.documentElement.lang = this.currentLanguage;
        
        // Update typing animation with new language
        if (window.initTypingAnimation) {
            window.initTypingAnimation();
        }
    }

    updateLanguageDisplay() {
        const currentLangElement = document.getElementById('currentLang');
        if (currentLangElement) {
            currentLangElement.textContent = this.currentLanguage.toUpperCase();
        }
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                if (element.tagName === 'TITLE') {
                    element.textContent = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    getTranslation(key) {
        return this.translations[this.currentLanguage][key] || key;
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    getTypingTexts() {
        return this.translations[this.currentLanguage]['typing-texts'] || [];
    }
}

// Initialize language manager
window.languageManager = new LanguageManager();
