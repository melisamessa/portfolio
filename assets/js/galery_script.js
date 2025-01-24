const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");
const moreInfoButtons = document.querySelectorAll(".btn-more-info");
const body = document.body;

moreInfoButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const projectData = getProjectData(button.dataset.project); 
        populateModal(projectData);
        modal.classList.remove("hidden");
        body.classList.add("modal-open");
    });
});

closeModalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    body.classList.remove("modal-open");
});

function getProjectData(projectKey) {
    const projectInfo = {
        "memoria-atancion": {
            title: "Memoria y Atención",
            description: "Descripción completa del proyecto Memoria y Atención...",
            developers: "Felipe Arroyo y Melisa Annabella Messa Muñoz.",
            videoSrc: ""
        },
        "campus-virtual": {
            title: "Campus Virtual",
            description: "El proyecto consistió en el desarrollo de un Campus Virtual 3D para la UNICEN, recreando digitalmente sus instalaciones con un enfoque interactivo e inmersivo. El objetivo fue permitir que estudiantes y visitantes exploraran el campus de forma remota, logrando un entorno realista y funcional. Este trabajo implicó la integración de múltiples disciplinas y herramientas avanzadas para entregar un resultado de alta calidad. La creación del campus comenzó con el modelado tridimensional de los edificios y espacios mediante SketchUp, asegurando precisión y fidelidad visual en cada detalle. Luego, el proyecto fue trasladado a Unity, donde se implementaron funcionalidades como mapas interactivos, teletransporte, modos de navegación libre y simulación de manejo. Para enriquecer la experiencia, se añadió un modo multijugador, permitiendo la interacción entre usuarios dentro del entorno virtual. Cada etapa del desarrollo requirió un profundo análisis y resolución de desafíos técnicos. Por ejemplo, la optimización de los modelos 3D para mantener el rendimiento en tiempo real, la implementación de scripts personalizados para funcionalidades dinámicas y la integración de diferentes sistemas como controles de usuario intuitivos y navegación avanzada. Además, se priorizó la usabilidad, asegurando que la experiencia fuera accesible y fluida para diferentes perfiles de usuarios. Este proyecto no solo implicó el dominio de herramientas tecnológicas avanzadas, sino también la capacidad de combinar creatividad y funcionalidad en un entorno digital. El resultado final es un campus virtual completo, que ofrece una experiencia inmersiva y representa un importante paso hacia la digitalización de entornos educativos.",
            developers: "NeolaSoft - Ignacio Ramiro Ciano, Agustín D'Onofrio, Joaquín Ignacio Frati, Franco Len, Melisa Messa, Nicolas Miccio Palermo, Alejandro Moran, Matías Nicolás Pozzi.",
            videoSrc: ""
        },
        "tsp": {
            title: "Diseño de Algoritmo Evolutivo para la Resolución del Problema del Viajante",
            description: "Este proyecto abordó la resolución del Problema del Viajante (TSP) mediante el diseño e implementación de un Algoritmo Evolutivo, optimizando rutas para visitar ciudades al menor costo. Se utilizaron técnicas avanzadas de computación evolutiva como selección, cruce, mutación y estrategias de sobrevivencia, inspiradas en la teoría de la evolución de Darwin. El modelo incluyó operadores de cruce específicos para problemas de permutación, como PMX (Partially Mapped Crossover) y ERX (Edge Recombination Crossover), que preservan relaciones de adyacencia en las soluciones. También se implementaron operadores de mutación como inversión y desplazamiento, garantizando la diversidad en la población. El algoritmo fue configurado para explorar y explotar eficientemente el espacio de búsqueda, balanceando diversidad y convergencia. Para la implementación, se utilizó Python con bibliotecas como NumPy, y se diseñaron gráficos interactivos con Tkinter para visualizar las rutas optimizadas y métricas como fitness y distancia total. Se probaron distintas configuraciones, evaluando combinaciones de parámetros como tamaño de población, probabilidades de cruce y mutación, y técnicas de selección de padres y sobrevivientes (como selección por torneo y steady-state).",
            developers: "Melisa Annabella Messa Muñoz.",
            videoSrc: ""
        },
        "tumor-detection": {
            title: "Red convolucional de clasificación binaria para la detección de tumores cerebrales",
            description: "Este proyecto se enfocó en desarrollar una Red Neuronal Convolucional (CNN) para la detección de tumores cerebrales en imágenes de resonancia magnética, clasificándolas como 'Normales' o 'Anómalas'. Utilizando un dataset de Kaggle con imágenes preprocesadas para eliminar el fondo irrelevante, se entrenó el modelo para identificar diferencias entre tejido cerebral sano y afectado. La arquitectura de la red incluyó tres capas convolucionales con activación ReLU, capas de reducción como Dropout y Flatten, y una capa densa final con activación sigmoide para clasificación binaria. Se usó la función de pérdida binary cross-entropy y el optimizador RMSprop, ajustado tras pruebas para mejorar el rendimiento en comparación con Adam. El preprocesamiento y entrenamiento del modelo se realizaron con TensorFlow, Keras y ImageDataGenerator, optimizando el uso de recursos mediante Google Colab. El proyecto mostró una precisión alta, validada con un conjunto de datos independiente, demostrando una capacidad efectiva para detectar anomalías. Además, se comparó el rendimiento de la CNN con un autoencoder, que no logró resultados satisfactorios debido a limitaciones del dataset y la arquitectura. Este análisis destacó la ventaja de las CNN para aprender características discriminativas específicas. El modelo final es una herramienta eficaz que podría extenderse para clasificar tumores benignos y malignos, o para detectar otras anomalías cerebrales como epilepsia o Alzheimer, con el potencial de integrar datos adicionales y arquitecturas avanzadas en el futuro.",
            developers: "Melisa Annabella Messa Muñoz.",
            videoSrc: ""
        },
        "modelling-brains": {
            title: "Simulación en entorno Webots aplicando Aprendizaje por Refuerzo",
            description: "El proyecto consistió en la simulación de un robot Pioneer 3-AT en el entorno de simulación robótica Webots, con el objetivo principal de realizar tareas complejas de navegación y manipulación en un espacio controlado. El robot debía localizar un objeto específico, transportarlo a una ubicación designada y evitar colocarlo en zonas prohibidas, todo mientras sorteaba obstáculos presentes en el entorno. Para lograr estos objetivos, se utilizaron diversas tecnologías y técnicas avanzadas. El modelo del robot incluía 16 sensores de distancia para detectar obstáculos, un sensor de cámara para el reconocimiento visual, y nodos de GPS y brújula para la orientación espacial. Estas herramientas permitieron implementar tanto comportamientos simples como complejos. Entre los comportamientos simples desarrollados, destaca la evasión de obstáculos, basada en el concepto de vehículos de Braitenberg. Además, se implementó la detección de objetivos mediante el uso de la cámara, que permite al robot identificar objetos según su color y calcular su posición relativa para acercarse a ellos. El corazón del proyecto fue la implementación de un comportamiento aprendido utilizando el algoritmo de Q-Learning, una técnica de Aprendizaje por Refuerzo. Este algoritmo permitió al robot aprender a tomar decisiones óptimas en su entorno mediante un enfoque de prueba y error. El robot interactuaba con su entorno, percibiendo estados (representados como celdas de una grilla), ejecutando acciones (moverse en diferentes direcciones) y recibiendo recompensas o penalizaciones según sus decisiones. El objetivo era maximizar las recompensas, aprendiendo a evitar zonas prohibidas y encontrar el camino más corto hacia la posición objetivo. El proceso de aprendizaje fue diseñado utilizando el modelo de decisión de Markov, donde las acciones y estados se registraron en una tabla Q que se actualizaba continuamente durante cada episodio de simulación. Este enfoque permitió al robot aprender políticas óptimas para su navegación y manipulación del entorno, incluso frente a desafíos como la presencia de obstáculos o la necesidad de ajustarse a las limitaciones físicas de sus motores.",
            developers: "Melisa Annabella Messa Muñoz.",
            videoSrc: ""
        },
        "te-lo-hago-facil": {
            title: "Te lo hago fácil",
            description: "El proyecto 'Te lo hago fácil' consistió en el desarrollo de una aplicación Android diseñada para traducir lenguaje natural a Lenguaje Fácil, un estilo de redacción que facilita la comprensión de mensajes complejos. Para lograr esto, se utilizó el framework RASA y técnicas avanzadas de procesamiento de lenguaje natural (NLP). El traductor identifica conectores lingüísticos y realiza análisis gramatical utilizando la biblioteca spaCy, generando fragmentos claros y comprensibles. La app fue desarrollada en Kotlin con el framework Jetpack Compose bajo la arquitectura MVVM (Model-View-ViewModel), lo que asegura una separación modular y flexible entre capas. Se incorporaron servicios adicionales como: STT (Speech-to-Text) y TTS (Text-to-Speech) de Google para permitir la entrada y salida de mensajes por voz. Un sistema de login que admite autenticación por correo electrónico, contraseña o cuenta de Google. Persistencia de datos, almacenando tanto configuraciones como mensajes procesados. El sistema de traducción utiliza redes neuronales recurrentes para dividir mensajes largos en instrucciones claras y concisas, basándose en análisis contextual. Además, se implementaron técnicas para detectar y reemplazar abreviaciones, evitando ambigüedades comunes en el lenguaje. Durante el desarrollo, el equipo enfrentó desafíos como el manejo de verbos conjugados y la necesidad de etiquetar palabras clave según el contexto, logrando una solución eficiente que combina gramática y significado. Este enfoque permitió crear una herramienta innovadora que mejora la accesibilidad y comprensión en la comunicación escrita.",
            developers: "Throwaways - Matías Berthelot, Santiago Dadín, Hualiang He, Melisa Messa, Gerónimo Pose, Ramiro Romero Fuentes.",
            videoSrc: ""
        },
        
        "tradding": {
            title: "Tradding",
            description: "Descripción completa del proyecto de Tradding...",
            developers: "Amaiké Gopar y Melisa Annabella Messa Muñoz.",
            videoSrc: ""
        }

    };
    return projectInfo[projectKey];
}

function populateModal(data) {
    document.getElementById("modal-title").textContent = data.title;
//    document.getElementById("modal-description").textContent = data.description;
    const formattedDescription = data.description.replace(/\./g, '.<br>');
    document.getElementById("modal-description").innerHTML = formattedDescription;
    document.getElementById("modal-developers").textContent = data.developers;
 //   document.getElementById("modal-video").src = data.videoSrc;
}