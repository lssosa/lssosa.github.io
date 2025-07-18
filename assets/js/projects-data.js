class ProjectsDatabase {
    constructor() {
        this.projects = {
            'launches': {
                id: 'launches',
                title: {
                    es: 'Registro de Almuerzos Diarios',
                    en: 'Daily Lunch Registration'
                },
                category: 'management',
                description: {
                    es: 'Aplicación simple para registrar y gestionar almuerzos diarios de empleados',
                    en: 'Simple application to register and manage daily employee lunches'
                },
                detailedDescription: {
                    es: 'Sistema web desarrollado para facilitar el registro y gestión de almuerzos diarios de empleados en empresas. La aplicación permite un control eficiente de comidas, generación de reportes y administración de empleados.',
                    en: 'Web system developed to facilitate the registration and management of daily employee lunches in companies. The application allows efficient meal control, report generation and employee administration.'
                },
                technicalDescription: {
                    es: 'Desarrollado con Angular para el frontend, proporcionando una experiencia de usuario fluida y moderna. El backend está construido en PHP con una arquitectura REST API, garantizando escalabilidad y mantenibilidad. La base de datos MySQL optimizada permite consultas rápidas incluso con grandes volúmenes de datos.',
                    en: 'Developed with Angular for the frontend, providing a smooth and modern user experience. The backend is built in PHP with a REST API architecture, guaranteeing scalability and maintainability. The optimized MySQL database allows fast queries even with large volumes of data.'
                },
                images: [
                    '/assets/portfolio/launches/sc1.png',
                    '/assets/portfolio/launches/sc2.png',
                    '/assets/portfolio/launches/sc3.png',
                    '/assets/portfolio/launches/sc4.png',
                    '/assets/portfolio/launches/sc5.png',
                    '/assets/portfolio/launches/sc6.png',
                    '/assets/portfolio/launches/sc7.png'
                ],
                technologies: ['Angular', 'PHP', 'MySQL', 'PrimeNG', 'REST API'],
                link: 'portfolio/project.html?project=launches',
                demoVideo: '/assets/portfolio/launches/demo.webm',
                features: {
                    es: [
                        'Registro rápido y sencillo de almuerzos por empleado',
                        'Sistema de gestión simplificado sin jerarquías complejas',
                        'Reportes detallados por período, empleado y departamento',
                        'Gestión de empleados sencillo',
                        'Interfaz responsive para uso en cualquier dispositivo',
                        'Exportación de datos a Excel y PDF'
                    ],
                    en: [
                        'Quick and simple lunch registration per employee',
                        'Simplified management system without complex hierarchies',
                        'Detailed reports by period, employee and department',
                        'Simple employee management',
                        'Responsive interface for use on any device',
                        'Data export to Excel and PDF'
                    ]
                },
                specs: {
                    duration: {
                        es: '4 días',
                        en: '4 days'
                    },
                    team: {
                        es: '1 Desarrollador Full Stack',
                        en: '1 Full Stack Developer'
                    },
                    frontend: 'Angular 15, PrimeNG 15, TypeScript',
                    backend: 'PHP 8, MySQL, REST API',
                    security: {
                        es: 'Login simple protegido por contraseña',
                        en: 'Simple login protected by password'
                    }
                },
                galleryItems: [
                    {
                        image: '/assets/portfolio/launches/sc1.png',
                        title: {
                            es: 'Organización por fecha',
                            en: 'Date Organization'
                        },
                        description: {
                            es: 'El listado de almuerzos organizados por fecha',
                            en: 'The lunch list organized by date'
                        }
                    },
                    {
                        image: '/assets/portfolio/launches/sc3.png',
                        title: {
                            es: 'Registro de Almuerzo',
                            en: 'Lunch Registration'
                        },
                        description: {
                            es: 'Formulario de registro rápido y sencillo',
                            en: 'Quick and simple registration form'
                        }
                    },
                    {
                        image: '/assets/portfolio/launches/sc4.png',
                        title: {
                            es: 'Lista de Empleados',
                            en: 'Employee List'
                        },
                        description: {
                            es: 'Panel de administración de empleados con control simplificado',
                            en: 'Administration employees panel with simplified control'
                        }
                    },
                    {
                        image: '/assets/portfolio/launches/sc6.png',
                        title: {
                            es: 'Alta de empleados',
                            en: 'Employee Registration'
                        },
                        description: {
                            es: 'Formulario para agregar nuevos empleados al sistema simplificado',
                            en: 'Form to add new employees to the simplified system'
                        }
                    },
                    {
                        image: '/assets/portfolio/launches/sc7.png',
                        title: {
                            es: 'Exportación de Reportes',
                            en: 'Report Export'
                        },
                        description: {
                            es: 'Exportación de reportes en formatos Excel y PDF',
                            en: 'Export of reports in Excel and PDF formats'
                        }
                    }
                ]
            },
            'loans': {
                id: 'loans',
                title: {
                    es: 'Sistema de Préstamos personales',
                    en: 'Personal Loan Management System'
                },
                category: 'management',
                description: {
                    es: 'Aplicación para gestionar préstamos personales con control de pagos y reportes',
                    en: 'Application to manage personal loans with payment control and reports'
                },
                detailedDescription: {
                    es: 'Software completo para gestionar préstamos personales, incluyendo registro de clientes, control de pagos, generación de reportes y gestión de morosidad. Permite un seguimiento detallado del estado de cada préstamo y sus pagos.',
                    en: 'Comprehensive personal loan management software, including client registration, payment control, report generation and delinquency management. Allows detailed tracking of the status of each loan and its payments.'
                },
                technicalDescription: {
                    es: 'Desarrollado con Angular 16 para el frontend, proporcionando una experiencia de usuario reactiva y moderna. El backend utiliza WebSockets con NodeJs y Express, garantizando una comunicación en tiempo real eficiente. La base de datos MySQL está optimizada para manejar grandes volúmenes de transacciones financieras con total seguridad.',
                    en: 'Developed with Angular 16 for the frontend, providing a reactive and modern user experience. The backend uses WebSockets with NodeJs and Express, ensuring efficient real-time communication. The MySQL database is optimized to handle large volumes of financial transactions with complete security.'
                },
                demoVideo: '/assets/portfolio/loans/demo.webm',
                images: [
                    '/assets/portfolio/loans/listado_prestamos.png',
                    '/assets/portfolio/loans/login.png',
                    '/assets/portfolio/loans/formulario_prestamo.png',
                    '/assets/portfolio/loans/vista_prestamo.png',
                    '/assets/portfolio/loans/registrar_abono.png',
                    '/assets/portfolio/loans/registro_pagos.png',
                    '/assets/portfolio/loans/recibo_ejemplo.png',
                    '/assets/portfolio/loans/listado_clientes.png',
                    '/assets/portfolio/loans/formulario_cliente.png',
                    '/assets/portfolio/loans/listado_aval.png',
                    '/assets/portfolio/loans/formulario_aval.png',
                    '/assets/portfolio/loans/listado_tabuladores.png',
                    '/assets/portfolio/loans/formulario_tabuladores.png',                    
                ],
                technologies: ['NodeJS', 'Angular', 'MySQL', 'PrimeNG'],
                link: 'portfolio/project.html?project=loans',
                features: {
                    es: [
                        'Registro de clientes y avales',
                        'Gestión de préstamos con control de pagos',
                        'Generación de recibos y reportes',
                        'Control de morosidad y alertas',
                        'Interfaz intuitiva y responsive'
                    ],
                    en: [
                        'Client and guarantor registration',
                        'Loan management with payment control',
                        'Receipt and report generation',
                        'Delinquency control and alerts',
                        'Intuitive and responsive interface'
                    ]
                },
                specs: {
                    duration: {
                        es: '1 mes',
                        en: '1 month'
                    },
                    team: {
                        es: '1 Desarrollador Full Stack',
                        en: '1 Full Stack Developer'
                    },
                    frontend: 'Angular 16, PrimeNG 16, TypeScript',
                    backend: 'NodeJS, Express, WebSocket, MySQL',
                    security: {
                        es: 'Autenticación de usuario jerárquica',
                        en: 'Hierarchical user authentication'
                    }
                },
                galleryItems: [
                    {
                        image: '/assets/portfolio/loans/listado_prestamos.png',
                        title: {
                            es: 'Listado de Préstamos',
                            en: 'Loan List'
                        },
                        description: {
                            es: 'Vista general de todos los préstamos registrados',
                            en: 'Overview of all registered loans'
                        }
                    },
                    {
                        image: '/assets/portfolio/loans/login.png',
                        title: {
                            es: 'Pantalla de Login',
                            en: 'Login Screen'
                        },
                        description: {
                            es: 'Acceso seguro al sistema de préstamos',
                            en: 'Secure access to the loan system'
                        }
                    },
                    {
                        image: '/assets/portfolio/loans/formulario_prestamo.png',
                        title: {
                            es: 'Formulario de Préstamo',
                            en: 'Loan Form'
                        },
                        description: {
                            es: 'Formulario para registrar nuevos préstamos',
                            en: 'Form to register new loans'
                        }
                    },
                    {
                        image: '/assets/portfolio/loans/vista_prestamo.png',
                        title: {
                            es: 'Vista Detallada del Préstamo',
                            en: 'Detailed Loan View'
                        },
                        description: {
                            es: 'Información completa del préstamo seleccionado',
                            en: 'Complete information of the selected loan'
                        }
                    },
                    {
                        image: '/assets/portfolio/loans/registrar_abono.png',
                        title: {
                            es: 'Registrar Abono',
                            en: 'Register Payment'
                        },
                        description: {
                            es: 'Formulario para registrar pagos parciales o totales',
                            en: 'Form to register partial or total payments'
                        }
                    },
                    {
                        image: '/assets/portfolio/loans/registro_pagos.png',
                        title: {
                            es: 'Registro de Pagos',
                            en: 'Payment Record'
                        },
                        description: {
                            es: 'Historial de pagos realizados por el cliente',
                            en: 'History of payments made by the client'
                        }
                    },
                    {
                        image: '/assets/portfolio/loans/recibo_ejemplo.png',
                        title: {
                            es: 'Ejemplo de Recibo',
                            en: 'Receipt Example'
                        },
                        description: {
                            es: 'Formato del recibo generado al realizar un pago',
                            en: 'Format of the receipt generated when making a payment'
                        }
                    },                  
                ]
            },
            'logistics': {
                id: 'logistics',
                title: {
                    es: 'Sistema de Gestión de Logística',
                    en: 'Logistics Management System'
                },
                category: 'management',
                description: {
                    es: 'Aplicación para gestionar la logística de envíos, entregas, camiones y remolques',
                    en: 'Application to manage logistics of shipments, deliveries, trucks and trailers'
                },
                detailedDescription: {
                    es: 'Software completo para gestionar la logística de envíos, entregas, camiones y remolques. Permite un control detallado de las operaciones logísticas, incluyendo seguimiento de envíos, asignación de vehículos y gestión de inventarios.',
                    en: 'Comprehensive logistics management software for shipments, deliveries, trucks and trailers. Allows detailed control of logistics operations, including shipment tracking, vehicle assignment and inventory management.'
                },
                technicalDescription: {
                    es: 'Desarrollado con Angular 19 para el frontend, proporcionando una experiencia de usuario reactiva y moderna. El backend utiliza WebSockets con NodeJs y Express, garantizando una comunicación en tiempo real eficiente. La base de datos MySQL está optimizada para manejar grandes volúmenes de transacciones financieras con total seguridad.',
                    en: 'Developed with Angular 19 for the frontend, providing a reactive and modern user experience. The backend uses WebSockets with NodeJs and Express, ensuring efficient real-time communication. The MySQL database is optimized to handle large volumes of financial transactions with complete security.'
                },
                demoVideo: '/assets/portfolio/logistics/demo.webm',
                images: [
                    '/assets/portfolio/logistics/empleados.png',
                    '/assets/portfolio/logistics/dashboard.png',
                    '/assets/portfolio/logistics/configuracion_tabla.png',
                    '/assets/portfolio/logistics/sectores.png',
                    '/assets/portfolio/logistics/vista_empleado.png',
                    '/assets/portfolio/logistics/formulario_filtros.png',
                    '/assets/portfolio/logistics/formulario_empleado.png',
                    '/assets/portfolio/logistics/administracion_documentacion.png',                    
                ],
                technologies: ['NodeJS', 'Angular', 'MySQL', 'PrimeNG', 'WebSocket'],
                link: 'portfolio/project.html?project=logistics',
                features: {
                    es: [
                        'Registro de empleados, remolques, camiones, etc.',
                        'Asignación de camiones, remolques y dollies',
                        'Seguimiento de camiones en tiempo real',
                        'Gestión de inventarios y órdenes de entrega',
                        'Gerenciamiento completo de la logística de envíos',
                        'Control de incidentes',
                        'Departamento médico y administración de documentación',
                        'Control de Viajes y Checkpoint',
                        'Administración de mantenimiento de vehículos',
                        'Control de Sellos y gasolina',
                        'Geolocalización de camiones y remolques',
                        'Interfaz completa de contactos',
                        'Sistema Full Jerarquico',
                        'Consultar más detalles...'
                    ],
                    en: [
                        'Employee, trailer, truck, etc. registration',
                        'Truck, trailer and dolly assignment',
                        'Real-time truck tracking',
                        'Inventory and delivery order management',
                        'Complete management of shipping logistics',
                        'Incident management',
                        'Medical department and documentation administration',
                        'Trip and checkpoint control',
                        'Vehicle maintenance management',
                        'Seal and fuel control',
                        'Truck and trailer geolocation',
                        'Complete contact interface',
                        'Full hierarchical system',
                        'See more details...'                        
                    ]
                },
                specs: {
                    duration: {
                        es: '2 años',
                        en: '2 years'
                    },
                    team: {
                        es: '1 Desarrollador Full Stack',
                        en: '1 Full Stack Developer'
                    },
                    frontend: 'Angular 19, PrimeNG 19, TypeScript',
                    backend: 'NodeJS, Express, WebSocket, MySQL',
                    security: {
                        es: 'Autenticación de usuario jerárquica con verificación en 2 pasos',
                        en: 'Hierarchical user authentication with 2-step verification'
                    }
                },
                galleryItems: [
                    {
                        image: '/assets/portfolio/logistics/empleados.png',
                        title: {
                            es: 'Registro de Empleados',
                            en: 'Employee Registration'
                        },
                        description: {
                            es: 'Vista de empleados registrados en el sistema',
                            en: 'View of employees registered in the system'
                        }
                    },
                    {
                        image: '/assets/portfolio/logistics/dashboard.png',
                        title: {
                            es: 'Dashboard Principal',
                            en: 'Main Dashboard'
                        },
                        description: {
                            es: 'Panel principal con estadísticas y accesos directos totalmente configurable',
                            en: 'Main panel with statistics and shortcuts, fully configurable'
                        }
                    },
                    {
                        image: '/assets/portfolio/logistics/configuracion_tabla.png',
                        title: {
                            es: 'Configuración de Tablas',
                            en: 'Table Configuration'
                        },
                        description: {
                            es: 'Configuración de tablas para personalizar vistas',
                            en: 'Table configuration to customize views'
                        }
                    },
                    {
                        image: '/assets/portfolio/logistics/sectores.png',
                        title: {
                            es: 'Gestión de Sectores',
                            en: 'Sector Management'
                        },
                        description: {
                            es: 'Administración de sectores para asignación de tareas',
                            en: 'Sector management for task assignment'
                        }
                    },
                    {
                        image: '/assets/portfolio/logistics/vista_empleado.png',
                        title: {
                            es: 'Vista Detallada del Empleado',
                            en: 'Detailed Employee View'
                        },
                        description: {
                            es: 'Información completa del empleado seleccionado',
                            en: 'Complete information of the selected employee'
                        }
                    },
                    {
                        image: '/assets/portfolio/logistics/formulario_filtros.png',
                        title: {
                            es: 'Formulario de Filtros',
                            en: 'Filter Form'
                        },
                        description: {
                            es: 'Formulario para aplicar filtros personalizados a las vistas',
                            en: 'Form to apply custom filters to views'
                        }
                    },
                    {
                        image: '/assets/portfolio/logistics/formulario_empleado.png',
                        title: {
                            es: 'Formulario de Registro de Empleado',
                            en: 'Employee Registration Form'
                        },
                        description: {
                            es: 'Formulario para registrar nuevos empleados al sistema',
                            en: 'Form to register new employees in the system'
                        }
                    },               
                ]
            },
            'cnc4share': {
                id: 'cnc4share',
                title: {
                    es: 'Aplicación de Monitoreo y Control de Máquinas',
                    en: 'Machine Monitoring and Control Application'
                },
                category: 'webapp',
                description: {
                    es: 'Aplicación para monitorear y controlar máquinas CNC en tiempo real',
                    en: 'Application to monitor and control CNC machines in real-time'
                },
                detailedDescription: {
                    es: 'Aplicación web para monitorear y controlar máquinas CNC en tiempo real. Permite la supervisión de parámetros de operación, control remoto de máquinas y generación de reportes de producción.',
                    en: 'Web application to monitor and control CNC machines in real-time. Allows supervision of operating parameters, remote machine control and production report generation.'
                },
                technicalDescription: {
                    es: 'Desarrollado con Flutter para garantizar compatibilidad multiplataforma. Golang proporciona un backend eficiente y escalable. WebSockets permiten comunicación en tiempo real con las máquinas CNC. PostgreSQL ofrece una base de datos robusta para almacenar datos de producción y configuración de máquinas.',
                    en: 'Developed with Flutter to ensure cross-platform compatibility. Golang provides an efficient and scalable backend. WebSockets allow real-time communication with CNC machines. PostgreSQL offers a robust database to store production data and machine configuration.'
                },
                images: [
                    '/assets/portfolio/cnc4share/homemulti.gif',
                    '/assets/portfolio/cnc4share/makers1.gif',
                    '/assets/portfolio/cnc4share/makers2.gif',
                    '/assets/portfolio/cnc4share/makers3.gif',
                    '/assets/portfolio/cnc4share/makers4.gif',
                    '/assets/portfolio/cnc4share/panel.gif',
                    '/assets/portfolio/cnc4share/reports.gif',
                    '/assets/portfolio/cnc4share/users.gif',
                ],
                technologies: ['Flutter', 'Golang', 'WebSocket', 'PostgreSQL'],
                link: 'portfolio/project.html?project=cnc4share',
                demoVideo: '/assets/portfolio/cnc4share/demo.mp4',
                features: {
                    es: [
                        'Monitoreo en tiempo real de máquinas CNC',
                        'Control remoto de parámetros de operación',
                        'Generación de reportes de producción',
                        'Interfaz para instaladores y usuarios',
                        'Soporte multiplataforma (web, móvil)'
                    ],
                    en: [
                        'Real-time monitoring of CNC machines',
                        'Remote control of operating parameters',
                        'Production report generation',
                        'Installer and user interface',
                        'Cross-platform support (web, mobile)'
                    ]
                },
                specs: {
                    duration: {
                        es: '1 año',
                        en: '1 year'
                    },
                    team: {
                        es: '1 Desarrollador Full Stack',
                        en: '1 Full Stack Developer'
                    },
                    frontend: 'Flutter, Dart',
                    backend: 'Golang, WebSocket, PostgreSQL',
                    security: {
                        es: 'Autenticación de usuario con roles y permisos, encriptación de datos, autenticación en 2 pasos',
                        en: 'User authentication with roles and permissions, data encryption, two-step authentication'
                    }
                },
                galleryItems: [
                    {
                        image: '/assets/portfolio/cnc4share/homemulti.gif',
                        title: {
                            es: 'Sistema Multiplataforma',
                            en: 'Cross-Platform System'
                        },
                        description: {
                            es: 'Aplicación compatible con web y móvil',
                            en: 'Cross-platform application compatible with web and mobile'
                        }
                    },
                    {
                        image: '/assets/portfolio/cnc4share/makers1.gif',
                        title: {
                            es: 'Panel de Control de Máquinas',
                            en: 'Machine Control Panel'
                        },
                        description: {
                            es: 'Control y monitoreo de máquinas CNC',
                            en: 'Control and monitoring of CNC machines'
                        }
                    },
                    {
                        image: '/assets/portfolio/cnc4share/makers2.gif',
                        title: {
                            es: 'Configuración de Parámetros',
                            en: 'Parameter Configuration'
                        },
                        description: {
                            es: 'Configuración de parámetros operativos de las máquinas',
                            en: 'Configuration of operational parameters of the machines'
                        }
                    },
                    {
                        image: '/assets/portfolio/cnc4share/makers3.gif',
                        title: {
                            es: 'Generación de Reportes',
                            en: 'Report Generation'
                        },
                        description: {
                            es: 'Generación de reportes de producción y operación',
                            en: 'Generation of production and operation reports'
                        }
                    },
                    {
                        image: '/assets/portfolio/cnc4share/makers4.gif',
                        title: {
                            es: 'Interfaz de Usuario',
                            en: 'User Interface'
                        },
                        description: {
                            es: 'Interfaz intuitiva para usuarios y administradores',
                            en: 'Intuitive interface for users and administrators'
                        }
                    },
                    {
                        image: '/assets/portfolio/cnc4share/panel.gif',
                        title: {
                            es: 'Panel Principal',
                            en: 'Main Panel'
                        },
                        description: {
                            es: 'Panel principal con estadísticas y accesos directos',
                            en: 'Main panel with statistics and shortcuts'
                        }
                    },
                    {
                        image: '/assets/portfolio/cnc4share/reports.gif',
                        title: {
                            es: 'Vista de Reportes',
                            en: 'Reports View'
                        },
                        description: {
                            es: 'Vista detallada de reportes generados',
                            en: 'Detailed view of generated reports'
                        }
                      },
                    {
                        image: '/assets/portfolio/cnc4share/users.gif',
                        title: {
                            es: 'Gestión de Usuarios',
                            en: 'User Management'
                        },
                        description: {
                            es: 'Administración de usuarios y roles del sistema',
                            en: 'User and role management of the system'
                        }
                    }
                ]
            },
            'whereami': {
                id: 'whereami',
                title: {
                    es: 'Aplicación de GeoLocalización',
                    en: 'Geolocation Application'
                },
                category: 'webapp',
                description: {
                    es: 'Aplicación para geolocalización de dispositivos y seguimiento en tiempo real',
                    en: 'Application for device geolocation and real-time tracking'
                },
                detailedDescription: {
                    es: 'Aplicación web para geolocalización de dispositivos y seguimiento en tiempo real. Permite rastrear la ubicación de celulares o dispositivos con GPS y SIM, proporcionando una interfaz intuitiva para visualizar rutas y ubicaciones.',
                    en: 'Web application for device geolocation and real-time tracking. Allows tracking of the location of cell phones or devices with GPS and SIM, providing an intuitive interface to visualize routes and locations.'
                },
                technicalDescription: {
                    es: 'Desarrollado con Angular para el frontend, proporcionando una experiencia de usuario reactiva y moderna. El backend utiliza WebSockets con NodeJs y Express, garantizando una comunicación en tiempo real eficiente. La base de datos PostgreSQL almacena las ubicaciones y rutas de los dispositivos.',
                    en: 'Developed with Angular for the frontend, providing a reactive and modern user experience. The backend uses WebSockets with NodeJs and Express, ensuring efficient real-time communication. The PostgreSQL database stores device locations and routes.'
                },
                images: [
                    '/assets/portfolio/whereami/pantalla_principal.png',
                    '/assets/portfolio/whereami/seleccion_unidad.png',
                    '/assets/portfolio/whereami/unidades.png',
                    '/assets/portfolio/whereami/formulario_localizacion.png',
                ],
                technologies: ['Flutter', 'NodeJs', 'WebSocket', 'PostgreSQL', 'Angular'],
                link: 'portfolio/project.html?project=whereami',
                demoVideo: '/assets/portfolio/whereami/demo.webm',
                features: {
                    es: [
                        'Geolocalización en tiempo real de dispositivos',
                        'Seguimiento de rutas y ubicaciones',
                        'Interfaz intuitiva para visualización de mapas',
                        'Registro de ubicaciones históricas',
                        'Soporte multiplataforma (web, móvil)'
                    ],
                    en: [
                        'Real-time geolocation of devices',
                        'Route and location tracking',
                        'Intuitive interface for map visualization',
                        'Historical location logging',
                        'Cross-platform support (web, mobile)'
                    ]
                },
                specs: {
                    duration: {
                        es: '1 mes',
                        en: '1 month'
                    },
                    team: {
                        es: '1 Desarrollador Full Stack',
                        en: '1 Full Stack Developer'
                    },
                    frontend: 'Flutter, Dart, Angular',
                    backend: 'Node, WebSocket, PostgreSQL',
                    security: {
                        es: 'Autenticación de usuario con roles y permisos, encriptación de datos, autenticación en 2 pasos',
                        en: 'User authentication with roles and permissions, data encryption, two-step authentication'
                    }
                },
                galleryItems: [
                    {
                        image: '/assets/portfolio/whereami/pantalla_principal.png',
                        title: {
                            es: 'Pantalla Principal',
                            en: 'Main Screen'
                        },
                        description: {
                            es: 'Vista principal de la aplicación con acceso a funcionalidades',
                            en: 'Main view of the application with access to functionalities'
                        }
                    },
                    {
                        image: '/assets/portfolio/whereami/seleccion_unidad.png',
                        title: {
                            es: 'Selección de Unidad',
                            en: 'Unit Selection'
                        },
                        description: {
                            es: 'Selección de dispositivo para geolocalización',
                            en: 'Device selection for geolocation'
                        }
                    },
                    {
                        image: '/assets/portfolio/whereami/unidades.png',
                        title: {
                            es: 'Listado de Unidades',
                            en: 'Units List'
                        },
                        description: {
                            es: 'Listado de dispositivos registrados en el sistema',
                            en: 'List of devices registered in the system'
                        }
                    },
                    {
                        image: '/assets/portfolio/whereami/formulario_localizacion.png',
                        title: {
                            es: 'Formulario de Localización',
                            en: 'Location Form'
                        },
                        description: {
                            es: 'Formulario para registrar nuevas ubicaciones de dispositivos',
                            en: 'Form to register new device locations'
                        }
                    }                    
                ]
            },
            'absol': {
                id: 'absol',
                title: {
                    es: 'Aplicación para carpinterias de aluminio/pvc',
                    en: 'Application for aluminum/PVC carpentries'
                },
                category: 'webapp',
                description: {
                    es: 'Aplicación para gestionar presupuestos y pedidos de carpinterías de aluminio y PVC',
                    en: 'Application to manage budgets and orders for aluminum and PVC carpentries'
                },
                detailedDescription: {
                    es: 'Aplicación web para gestionar presupuestos y pedidos de carpinterías de aluminio y PVC. Permite la creación de presupuestos personalizados, gestión de pedidos, seguimiento de producción y generación de reportes, y creación de tipologías personalizadas. Todo con una interfaz totalmente intuitiva.',
                    en: 'Web application to manage budgets and orders for aluminum and PVC carpentries. Allows the creation of custom budgets, order management, production tracking and report generation, and creation of custom typologies. All with a fully intuitive interface.'
                },
                technicalDescription: {
                    es: 'Desarrollado con Angular para el frontend, proporcionando una experiencia de usuario reactiva y moderna. El backend utiliza PHP, actualmente migrandose a NodeJs.',
                    en: 'Developed with Angular for the frontend, providing a reactive and modern user experience. The backend uses PHP, currently migrating to NodeJs.'
                },
                images: [
                    '/assets/portfolio/absol/vc_repartido.png',
                    '/assets/portfolio/absol/formulario_obra.png',
                    '/assets/portfolio/absol/formulario_tipologia.png',
                    '/assets/portfolio/absol/tipologia.png',
                    '/assets/portfolio/absol/agregar_item.png',
                    '/assets/portfolio/absol/login.png',
                    '/assets/portfolio/absol/vc_test.png',
                    '/assets/portfolio/absol/vc_test2.png',
                ],
                technologies: ['PHP', 'PostgreSQL', 'Angular'],
                link: 'portfolio/project.html?project=absol',
                demoVideo: '/assets/portfolio/absol/demo.webm',
                features: {
                    es: [
                        'Gestión de presupuestos personalizados',
                        'Seguimiento de pedidos y producción',
                        'Generación de reportes detallados',
                        'Creación de tipologías personalizadas',
                        'Interfaz intuitiva y fácil de usar'
                    ],
                    en: [
                        'Management of custom budgets',
                        'Order and production tracking',
                        'Generation of detailed reports',
                        'Creation of custom typologies',
                        'Intuitive and easy-to-use interface'
                    ]
                },
                specs: {
                    duration: {
                        es: '2 años',
                        en: '2 years'
                    },
                    team: {
                        es: '1 Desarrollador Full Stack',
                        en: '1 Full Stack Developer'
                    },
                    frontend: 'Angular',
                    backend: 'PHP, PostgreSQL',
                    security: {
                        es: 'Autenticación de usuario con roles y permisos',
                        en: 'User authentication with roles and permissions'
                    }
                },
                galleryItems: [
                    {
                        image: '/assets/portfolio/absol/vc_repartido.png',
                        title: {
                            es: 'Vista de Vidrios Repartidos',
                            en: 'Distributed Glass View'
                        },
                        description: {
                            es: 'Opción de división múltiple de paneles',
                            en: 'Multiple panel division option'
                        }
                    },
                    {
                        image: '/assets/portfolio/absol/formulario_obra.png',
                        title: {
                            es: 'Formulario de Obra',
                            en: 'Work Form'
                        },
                        description: {
                            es: 'Formulario para registrar obras y proyectos',
                            en: 'Form to register works and projects'
                        }
                    },
                    {
                        image: '/assets/portfolio/absol/formulario_tipologia.png',
                        title: {
                            es: 'Formulario de Tipología',
                            en: 'Typology Form'
                        },
                        description: {
                            es: 'Formulario para crear nuevas tipologías personalizadas',
                            en: 'Form to create new custom typologies'
                        }
                    },
                    {
                        image: '/assets/portfolio/absol/tipologia.png',
                        title: {
                            es: 'Vista de Tipologías',
                            en: 'Typologies View'
                        },
                        description: {
                            es: 'Listado de tipologías creadas con sus detalles',
                            en: 'List of created typologies with their details'
                        }
                    },
                    {
                        image: '/assets/portfolio/absol/agregar_item.png',
                        title: {
                            es: 'Agregar Item a la tipología',
                            en: 'Add Item to Typology'
                        },
                        description: {
                            es: 'Formulario para agregar nuevos items a la tipología',
                            en: 'Form to add new items to the typology'
                        }
                    },
                    {
                        image: '/assets/portfolio/absol/login.png',
                        title: {
                            es: 'Pantalla de Login',
                            en: 'Login Screen'
                        },
                        description: {
                            es: 'Acceso seguro al sistema de presupuestos y pedidos',
                            en: 'Secure access to the budget and order system'
                        }
                    },
                    {
                        image: '/assets/portfolio/absol/vc_test.png',
                        title: {
                            es: 'Vista de item Ventana Corrediza',
                            en: 'Sliding Window Item View'
                        },
                        description: {
                            es: 'Vista detallada de un item de Ventana Corrediza',
                            en: 'Detailed view of a Sliding Window item'
                        }
                    },
                    {
                        image: '/assets/portfolio/absol/vc_test2.png',
                        title: {
                            es: 'Vista de item Ventana Corrediza 2',
                            en: 'Sliding Window Item View 2'
                        },
                        description: {
                            es: 'Vista detallada de un item de Ventana Corrediza con más opciones',
                            en: 'Detailed view of a Sliding Window item with more options'
                        } 
                    }                  
                ]
            },
            'translate': {
                id: 'translate',
                title: {
                    es: 'Aplicación simple de manejo de traducciones json',
                    en: 'Simple JSON Translation Management Application'
                },
                category: 'webapp',
                description: {
                    es: 'Aplicación simple para manejar traducciones en formato JSON, ideal para proyectos web',
                    en: 'Simple application to manage translations in JSON format, ideal for web projects'
                },
                detailedDescription: {
                    es: 'Aplicación web simple para manejar traducciones en formato JSON. Permite cargar archivos de traducción, editarlos y exportarlos, facilitando la gestión de idiomas en proyectos web.',
                    en: 'Web application to manage translations in JSON format. Allows loading translation files, editing them and exporting them, facilitating language management in web projects.'
                },
                technicalDescription: {
                    es: 'Desarrollado con Angular para el frontend, proporcionando una experiencia de usuario reactiva y moderna.',
                    en: 'Developed with Angular for the frontend, providing a reactive and modern user experience.'
                },
                images: [
                    '/assets/portfolio/translate/sc1.png',
                    '/assets/portfolio/translate/settings.png',
                    '/assets/portfolio/translate/new.png',
                ],
                technologies: ['Angular'],
                link: 'portfolio/project.html?project=translate',
                demoVideo: '/assets/portfolio/translate/demo.webm',
                features: {
                    es: [
                        'Carga y edición de archivos JSON de traducción',
                        'Interfaz intuitiva para gestionar idiomas',
                        'Exportación de archivos de traducción editados',
                        'Soporte para múltiples idiomas',
                        'Ideal para proyectos web'
                    ],
                    en: [
                        'Loading and editing JSON translation files',
                        'Intuitive interface for managing languages',
                        'Exporting edited translation files',
                        'Support for multiple languages',
                        'Ideal for web projects'
                    ]
                },
                specs: {
                    duration: {
                        es: '3 días',
                        en: '3 days'
                    },
                    team: {
                        es: '1 Desarrollador Full Stack',
                        en: '1 Full Stack Developer'
                    },
                    frontend: 'Angular',
                    backend: '--',
                    security: {
                        es: 'Ninguna',
                        en: 'None'
                    }
                },
                galleryItems: [
                    {
                        image: '/assets/portfolio/translate/sc1.png',
                        title: {
                            es: 'Pantalla Principal',
                            en: 'Main Screen'
                        },
                        description: {
                            es: 'Vista principal de la aplicación con acceso a funcionalidades',
                            en: 'Main view of the application with access to functionalities'
                        }
                    },
                    {
                        image: '/assets/portfolio/translate/settings.png',
                        title: {
                            es: 'Configuración de Idiomas',
                            en: 'Language Settings'
                        },
                        description: {
                            es: 'Configuración de idiomas disponibles para traducción',
                            en: 'Configuration of available languages for translation'
                        }
                    },
                    {
                        image: '/assets/portfolio/translate/new.png',
                        title: {
                            es: 'Carga de Nuevo Archivo',
                            en: 'Load New File'
                        },
                        description: {
                            es: 'Formulario para cargar nuevos archivos de traducción JSON',
                            en: 'Form to load new JSON translation files'
                        }
                    }               
                ]
            },
            'ecommerce1': {
                id: 'ecommerce1',
                title: {
                    es: 'Sistema E-Commerce con Angular y PHP',
                    en: 'E-Commerce System with Angular and PHP'
                },
                category: 'ecommerce',
                description: {
                    es: 'Sistema E-Commerce desarrollado con Angular para el frontend y PHP para el backend, ideal para tiendas en línea',
                    en: 'E-Commerce system developed with Angular for the frontend and PHP for the backend, ideal for online stores'
                },
                detailedDescription: {
                    es: 'Sistema E-Commerce desarrollado con Angular para el frontend y PHP para el backend. Permite la gestión de productos, categorías, usuarios y pedidos, proporcionando una experiencia de compra completa y segura.',
                    en: 'E-Commerce system developed with Angular for the frontend and PHP for the backend. Allows management of products, categories, users and orders, providing a complete and secure shopping experience.'
                },
                technicalDescription: {
                    es: 'Desarrollado con Angular para el frontend, proporcionando una experiencia de usuario reactiva y moderna. El backend utiliza PHP, garantizando una integración fluida con la base de datos MySQL.',
                    en: 'Developed with Angular for the frontend, providing a reactive and modern user experience. The backend uses PHP, ensuring smooth integration with the MySQL database.'
                },
                images: [
                    '/assets/portfolio/ecommerce1/home.png',
                    '/assets/portfolio/ecommerce1/home2.png',
                    '/assets/portfolio/ecommerce1/store.png',
                    '/assets/portfolio/ecommerce1/buy.png',
                    '/assets/portfolio/ecommerce1/dashboard.png',
                    '/assets/portfolio/ecommerce1/add_product.png',
                    '/assets/portfolio/ecommerce1/sales.png',
                ],
                technologies: ['Angular', 'PHP', 'MySQL'],
                link: 'portfolio/project.html?project=ecommerce1',
                demoVideo: '/assets/portfolio/ecommerce1/demo.webm',
                features: {
                    es: [
                        'Gestión de productos y categorías',
                        'Carrito de compras y gestión de pedidos',
                        'Interfaz de usuario intuitiva y responsiva',
                        'Panel de administración para gestión de ventas',
                        'Soporte para múltiples métodos de pago',
                        'Integración con pasarelas de pago'
                    ],
                    en: [
                        'Product and category management',
                        'Shopping cart and order management',
                        'Intuitive and responsive user interface',
                        'Admin panel for sales management',
                        'Support for multiple payment methods',
                        'Integration with payment gateways'
                    ]
                },
                specs: {
                    duration: {
                        es: '2 semanas',
                        en: '2 weeks'
                    },
                    team: {
                        es: '1 Desarrollador Full Stack',
                        en: '1 Full Stack Developer'
                    },
                    frontend: 'Angular',
                    backend: 'PHP, MySQL',
                    security: {
                        es: 'Autenticación de usuario con roles y permisos, encriptación de datos',
                        en: 'User authentication with roles and permissions, data encryption'
                    }
                },
                galleryItems: [
                    {
                        image: '/assets/portfolio/ecommerce1/home.png',
                        title: {
                            es: 'Pantalla Principal',
                            en: 'Main Screen'
                        },
                        description: {
                            es: 'Vista principal de la tienda con productos destacados',
                            en: 'Main view of the store with featured products'
                        }
                    },
                    {
                        image: '/assets/portfolio/ecommerce1/home2.png',
                        title: {
                            es: 'Vista de Productos Destacados',
                            en: 'Featured Products View'
                        },
                        description: {
                            es: 'Lista de productos destacados en la tienda',
                            en: 'List of featured products in the store'
                        }
                    },
                    {
                        image: '/assets/portfolio/ecommerce1/store.png',
                        title: {
                            es: 'Tienda Online',
                            en: 'Online Store'
                        },
                        description: {
                            es: 'Interfaz de compra con carrito y opciones de pago',
                            en: 'Shopping interface with cart and payment options'
                        }
                    },
                    {
                        image: '/assets/portfolio/ecommerce1/buy.png',
                        title: {
                            es: 'Proceso de Compra',
                            en: 'Purchase Process'
                        },
                        description: {
                            es: 'Proceso de compra con selección de productos y pago',
                            en: 'Purchase process with product selection and payment'
                        }
                    },
                    {
                        image: '/assets/portfolio/ecommerce1/dashboard.png',
                        title: {
                            es: 'Panel de Administración',
                            en: 'Admin Panel'
                        },
                        description: {
                            es: 'Panel para gestionar productos, categorías y pedidos',
                            en: 'Panel to manage products, categories and orders'
                        }
                    },
                    {
                        image: '/assets/portfolio/ecommerce1/add_product.png',
                        title: {
                            es: 'Agregar Producto',
                            en: 'Add Product'
                        },
                        description: {
                            es: 'Formulario para agregar nuevos productos a la tienda',
                            en: 'Form to add new products to the store'
                        }
                    },
                    {
                        image: '/assets/portfolio/ecommerce1/sales.png',
                        title: {
                            es: 'Ventas y Reportes',
                            en: 'Sales and Reports'
                        },
                        description: {
                            es: 'Vista de ventas realizadas y reportes generados',
                            en: 'View of completed sales and generated reports'
                        }
                    }
                ]
            },
            'ecommerce2': {
                id: 'ecommerce2',
                title: {
                    es: 'Sistema E-Commerce con Angular y NodeJs',
                    en: 'E-Commerce System with Angular and NodeJs'
                },
                category: 'ecommerce',
                description: {
                    es: 'Sistema E-Commerce desarrollado con Angular para el frontend y NodeJs + WebSocket para el backend, ideal para tiendas en línea',
                    en: 'E-Commerce system developed with Angular for the frontend and NodeJs + WebSocket for the backend, ideal for online stores'
                },
                //Explicar que es multiregion, con sistema de lista de precios, proveedores
                detailedDescription: {
                    es: 'Sistema E-Commerce con soporte multiregional, desarrollado en Angular para frontend y NodeJs con WebSockets para el backend, tiene soporte de lista de precios, pedidos al proveedor y muchas herramientas más.',
                    en: 'An e-commerce system with multi-region support, developed in Angular for the frontend and NodeJs with WebSockets for the backend, it supports price lists, supplier orders, and many other tools.'
                },
                technicalDescription: {
                    es: 'Desarrollado con Angular para el frontend, proporcionando una experiencia de usuario reactiva y moderna. El backend utiliza NodeJs con WebSockets, garantizando una integración fluida con la base de datos MySQL en tiempo real.',
                    en: 'Developed with Angular for the frontend, providing a reactive and modern user experience. The backend uses NodeJs with WebSockets, ensuring smooth integration with the MySQL database in real-time.'
                },
                images: [
                    '/assets/portfolio/ecommerce2/home.png',
                    '/assets/portfolio/ecommerce2/login.png',
                    '/assets/portfolio/ecommerce2/puntos_venta.png',
                    '/assets/portfolio/ecommerce2/listas_de_precio.png',
                    '/assets/portfolio/ecommerce2/ventas.png',
                    '/assets/portfolio/ecommerce2/tienda.png',
                ],
                technologies: ['Angular', 'NodeJs', 'WebSocket', 'MySQL'],
                link: 'portfolio/project.html?project=ecommerce2',
                demoVideo: '/assets/portfolio/ecommerce2/demo.webm',
                features: {
                    es: [
                        'Gestión de productos y categorías',
                        'Carrito de compras y gestión de pedidos',
                        'Interfaz de usuario intuitiva y responsiva',
                        'Panel de administración para gestión de ventas',
                        'Soporte para múltiples métodos de pago',
                        'Soporte para listas de precios',
                        'Sistema de ventas por regiones configurable',
                        'Integración con pasarelas de pago',
                        'Full personalizable'
                    ],
                    en: [
                        'Product and category management',
                        'Shopping cart and order management',
                        'Intuitive and responsive user interface',
                        'Admin panel for sales management',
                        'Support for multiple payment methods',
                        'Price list support',
                        'Configurable regional sales system',
                        'Payment gateway integration',
                        'Fully customizable'
                    ]
                },
                specs: {
                    duration: {
                        es: '2 años',
                        en: '2 years'
                    },
                    team: {
                        es: '1 Desarrollador Full Stack',
                        en: '1 Full Stack Developer'
                    },
                    frontend: 'Angular',
                    backend: 'NodeJs, MySQL, WebSocket',
                    security: {
                        es: 'Autenticación de usuario con roles y permisos, encriptación de datos',
                        en: 'User authentication with roles and permissions, data encryption'
                    }
                },
                galleryItems: [
                  {
                        image: '/assets/portfolio/ecommerce2/home.png',
                        title: {
                            es: 'Pantalla Principal',
                            en: 'Main Screen'
                        },
                        description: {
                            es: 'Vista principal de la tienda',
                            en: 'Main view of the store'
                        }
                    },
                    {
                        image: '/assets/portfolio/ecommerce2/puntos_venta.png',
                        title: {
                            es: 'Vista de puntos de venta habilitados',
                            en: 'View habilited sales points'
                        },
                        description: {
                            es: 'Lista de puntos de venta habilitados',
                            en: 'List of habilited sales points'
                        }
                    },
                    {
                        image: '/assets/portfolio/ecommerce2/tienda.png',
                        title: {
                            es: 'Tienda Online',
                            en: 'Online Store'
                        },
                        description: {
                            es: 'Interfaz de compra con carrito y opciones de pago',
                            en: 'Shopping interface with cart and payment options'
                        }
                    },
                    {
                        image: '/assets/portfolio/ecommerce2/pedidos_proveedor.png',
                        title: {
                            es: 'Pedidos al proveedor',
                            en: 'Orders to the product supplier'
                        },
                        description: {
                            es: 'Panel para gestionar los pedidos al proveedor',
                            en: 'Panel to manage supplier orders'
                        }
                    },
                    {
                        image: '/assets/portfolio/ecommerce2/login.png',
                        title: {
                            es: 'Inicio de sesión',
                            en: 'Login'
                        },
                        description: {
                            es: 'Formulario para iniciar sesión',
                            en: 'Login form'
                        }
                    },
                    {
                        image: '/assets/portfolio/ecommerce2/ventas.png',
                        title: {
                            es: 'Ventas y Reportes',
                            en: 'Sales and Reports'
                        },
                        description: {
                            es: 'Vista de ventas realizadas y reportes generados',
                            en: 'View of completed sales and generated reports'
                        }
                    }                    
                ]
            }
        };
    }

    // Get all projects
    getAllProjects() {
        return Object.values(this.projects);
    }

    // Get project by ID
    getProject(id) {
        return this.projects[id] || null;
    }

    // Get projects by category
    getProjectsByCategory(category) {
        return Object.values(this.projects).filter(project => project.category === category);
    }

    // Get related projects (same category, excluding current project)
    getRelatedProjects(currentProjectId, limit = 2) {
        const currentProject = this.getProject(currentProjectId);
        if (!currentProject) return [];

        return Object.values(this.projects)
            .filter(project => 
                project.id !== currentProjectId && 
                project.category === currentProject.category
            )
            .slice(0, limit);
    }

    // Get projects for main portfolio grid
    getPortfolioProjects() {
        return this.getAllProjects().map(project => ({
            title: project.title,
            category: project.category,
            description: project.description,
            images: project.images,
            technologies: project.technologies,
            link: project.link
        }));
    }

    // Get localized text
    getLocalizedText(textObj, language = 'es') {
        if (typeof textObj === 'string') return textObj;
        return textObj[language] || textObj['es'] || '';
    }

    // Get project data for specific page
    getProjectPageData(projectId, language = 'es') {
        const project = this.getProject(projectId);
        if (!project) return null;

        return {
            ...project,
            title: this.getLocalizedText(project.title, language),
            description: this.getLocalizedText(project.description, language),
            detailedDescription: this.getLocalizedText(project.detailedDescription, language),
            technicalDescription: this.getLocalizedText(project.technicalDescription, language),
            features: this.getLocalizedText(project.features, language),
            specs: {
                ...project.specs,
                duration: this.getLocalizedText(project.specs.duration, language),
                team: this.getLocalizedText(project.specs.team, language),
                security: this.getLocalizedText(project.specs.security, language)
            },
            galleryItems: project.galleryItems?.map(item => ({
                ...item,
                title: this.getLocalizedText(item.title, language),
                description: this.getLocalizedText(item.description, language)
            }))
        };
    }
}

// Create global instance
window.projectsDB = new ProjectsDatabase();
