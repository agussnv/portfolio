export const proyectos = [
    {
        title: "HolaBarri",
        short_description: "Plataforma digital para impulsar el comercio local, integra mapas interactivos y permite a los usuarios explorar productos y tiendas cercanas.",
        large_description: "Marketplace local creado para dinamizar el comercio de barrio, permitiendo a los vecinos descubrir productos y tiendas cercanas en un entorno digital moderno y accesible. Lideré el proyecto desde la concepción hasta su presentación ante asociaciones reales y ayuntamientos, validando la propuesta con actores del entorno.\n\nLa plataforma permite a cada comercio gestionar su catálogo, recibir valoraciones y conectar directamente con la comunidad, todo sin necesidad de reparto a domicilio en la primera versión, para facilitar una prueba piloto viable.",
        link: "proyectos/holabarri",
        image: "https://example.com/image.jpg",
        languages: [
            { 'name': 'Nuxt.JS', 'color': '#80ecc1' },
            { 'name': 'Laravel', 'color': '#f99780' },
            { 'name': 'Node.JS', 'color': '#c4e17f' },
        ],
        technologies: [
            { 'name': 'Nuxt.JS', 'description': 'Se eligió para construir un SPA y permitir de esta forma tiempos de carga optimizados y una experiencia de usuario fluida.' },
            { 'name': 'Tailwind CSS', 'description': 'Nos permitió cumplir con el objetivo a tiempo: diseñar una interfaz intuitiva y responsiva en el menor tiempo posible para lanzar el MVP y validar la idea.' },
            { 'name': 'Laravel + MySQL', 'description': 'Laravel para poder desarrollar una API robusta y segura, mientras que MySQL nos aseguraba integridad y rendimiento en la gestión de toda la información de comercios, productos, clientes, pedidos...' },
            { 'name': 'Leaflet.js', 'description': 'Utilizado para desarrollar un mapa interactivo que permite geolocalizar y visualizar de forma dinámica los comercios cercanos.' },
            { 'name': 'Node.JS + WebSockets', 'description': 'Integrado con la finalidad de poder obtener eventos en tiempo real, como nuevas reservas, pedidos, cambios de estado...' },
            { 'name': 'Docker + GitHub Actions', 'description': 'Se utilizó Docker para aislar cada componente del sistema, y GitHub Actions para la implementación de un pipeline de CI/CD que automatiza pruebas y despliegues.' },
        ],
        problems: [
            { 'title': 'Superposición de elementos en el mapa', 'solution': 'Al mostrar muchos comercios cercanos en una misma zona, los marcadores se sobreponían entre ellos y no permitía una experiencia de usuario cómoda. Para ello, implementé un agrupamiento dinámico (clustering) y un zoom progresivo para no perder información.' },
            { 'title': 'Renderización del mapa MUY lenta', 'solution': 'Al cargar el mapa, se renderizaban muchas zonas y junto a ellas, todos los comercios disponibles y esto realentizaba su rendimiento. Para solucionar este problema, el clustering ayudó a reducir su tiempo de carga, pero para optimizarlo aún más se utilizó un renderizado condicional para que unicamente cargue las zonas visibles en pantalla.' },
            { 'title': 'Falta de presupuesto para riders', 'solution': 'Queríamos un marketplace realista y viable, pero nuestro presupuesto no nos permitía cubrir una flota de repartidores. Ante esta situación adaptamos el modelo para priorizar reserva y recogida en el local, permitiendo una prueba piloto sin demasiadas complicaciones.' },            
        ]
    },
    {
        title: "ATURAPP",
        short_description: "Aplicación en tiempo real para alertar casos de bullying, con un mapa de calor para visualizar incidentes y un sistema de ubicación adaptado a entornos cerrados.",
        large_description: "Plataforma contra el bullying diseñada para entornos escolares, su principal objetivo es proporcionar una herramienta discreta y efectiva que permita a los alumnos reportar incidentes de manera inmediata, además de ofrecer un canal para comunicar casos recurrentes o de acoso psicológico a través de un chat en tiempo real.\n\nLa aplicación ofrece un mapa interactivo y gráficos que muestran datos tangibles (como zonas más afectadas, horarios y días con mayor incidencia), facilitando la toma de decisiones.\n\nLideré el proyecto desde la validación de la idea hasta su implementación, adaptando la solución a las restricciones del entorno y garantizando la efectividad de las alertas en tiempo real.",
        link: "proyectos/aturapp",
        image: "https://example.com/image.jpg",
        languages: [
            { 'name': 'Vue.JS', 'color': '#79cea9' },
            { 'name': 'Laravel', 'color': '#f99780' },
            { 'name': 'Node.JS', 'color': '#c4e17f' },
        ],
        technologies: [
            { 'name': 'Vue.JS', 'description': 'Se utilizó para poder crear una SPA y ofrecer una experiencia interactiva y dinámica.' },
            { 'name': 'CSS', 'description': 'Hemos decidido prescindir de un framework para lograr una personalización total en el diseño.' },
            { 'name': 'Laravel + MySQL', 'description': 'Implementados para construir una API robusta y segura que gestione datos sensibles y garantice el rendimiento en la gestión de incidentes.' },
            { 'name': 'Node.JS + WebSockets', 'description': 'Integrados para el chat en tiempo real y para lanzar alertas instantáneas y que los reportes se reciban al momento.' },
            { 'name': 'Chart.JS', 'description': 'Empleado para generar gráficos que presentan de forma clara datos sobre las zonas, horarios y días con mayor incidencia.' },
            { 'name': 'Docker (solo en fase de desarrollo):', 'description': 'Utilizado para aislar entornos y facilitar la configuración local.' },
        ],
        problems: [
            { 'title': 'Implementación de mapas de calor', 'solution': 'La librería Heatmap.js no se aplicaba correctamente sobre los mapas SVG generados, así que para replicar su funcionamiento a nuestro entorno, desarrollamos un heatmap personalizado.' },
            { 'title': 'Alertas en tiempo real', 'solution': 'Era indispensable que las alertas se transmitiesen de inmediato para poder actual al momento. Para conseguirlo se integraron WebSockets con Node.JS, permitiendo el envío instantáneo del reporte.' },
        ]
    },
    {
        title: "Cinetix",
        short_description: "Portal para la compra de entradas y gestión de salas de cine, con selección de asientos en tiempo real, horarios, información de peliculas y administración de funciones.",
        large_description: "Cinetix es un proyecto personal desarrollado con Next.js, cuyo objetivo fue consolidar mis conocimientos en esta tecnología.\n\nSe trata de un portal de gestión de salas de un cine que permite a los usuarios seleccionar asientos en tiempo real, consultar horarios y acceder a información detallada de películas.",
        link: "proyectos/cinetix",
        image: "https://example.com/image.jpg",
        languages: [
            { 'name': 'Next.JS', 'color': '#7f7f7f' },
            { 'name': 'Laravel', 'color': '#f99780' },
            { 'name': 'Node.JS', 'color': '#c4e17f' },
        ],
        technologies: [
            { 'name': 'Next.JS', 'description': 'Utilizado para desarrollar una SPA que ofrecer una interfaz dinámica y responsiva.' },
            { 'name': 'Tailwind CSS', 'description': 'Empleado para lograr un diseño limpio y responsivo, para facilitar su desarrollo.' },
            { 'name': 'Laravel + MySQL', 'description': 'Implementados para construir una API robusta y segura que gestione el catálogo de películas, horarios y reservas.' },
            { 'name': 'Node.JS + WebSockets', 'description': 'Integrados para sincronizar en tiempo real la selección de asientos, evitando conflictos y asegurando una reserva actualizada al instante.' },
            { 'name': 'Docker (solo en fase de desarrollo)', 'description': 'Utilizado para aislar entornos y facilitar la configuración local.' },
            { 'name': 'CI/CD con GitHub Actions y Testing', 'description': 'Establecí un pipeline de CI/CD con GitHub Actions para automatizar los despliegues. Las pruebas se ejecutaban previamente antes de realizar un commit.' },
        ],
        problems: [
            { 'title': 'Falta de estabilidad en el despliegue', 'solution': 'Se configuró un pipeline CI/CD con GitHub Actions y testings, garantizando un flujo de trabajo controlado.' },
            { 'title': 'Selección de asientos en tiempo real', 'solution': 'Al no actualizar los asientos disponibles en tiempo real, cuando un usuario seleccionaba y compraba un asiento que estaba ocupado realmente, generaba conflictos. Para solucionar esto implementé WebSockets para sincronizar en tiempo real los asientos que dejaban de estar disponibles.' },
        ]
    }
]