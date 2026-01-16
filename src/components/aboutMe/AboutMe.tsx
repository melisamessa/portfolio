import { Box, Text, Image } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box
      id="about"
      maxW={{ base: "100%", md: "800px" }}
      mx="auto"
      textAlign="center"
      p={6}
    >
      <Image
        src="/images/melisamessa.jpg"
        alt="Foto de Melisa"
        borderRadius="md"
        width={{ base: "100%", md: "600px" }}
        height={{ base: "auto", md: "300px" }}
        objectFit="cover"
        objectPosition={"top"}
        mx="auto"
        mb={4}
      />
      <Text textStyle={"title"} color="brand.title" mb={2}>
        Hola, soy Melisa
      </Text>
      <Text fontSize="lg" color="white" lineHeight="tall">
        desarrolladora de software y estudiante avanzada de Ingeniería de
        Sistemas. Me especializo en el desarrollo de aplicaciones web y
        dashboards interactivos, con foco en la integración de inteligencia
        artificial y modelos de lenguaje (LLM) en productos reales.
      </Text>
      <Text fontSize="lg" color="white" lineHeight="tall">
        He trabajado en proyectos de IA aplicada, asistentes conversacionales y
        sistemas de apoyo al estudio, desarrollando soluciones completas que
        incluyen frontend moderno, gestión de estado, persistencia de datos y
        experiencia de usuario. También cuento con experiencia en desarrollo de
        aplicaciones móviles y videojuegos, utilizando Unity y C# para
        evaluaciones cognitivas y entornos interactivos.
      </Text>
      <Text fontSize="lg" color="white" lineHeight="tall">
        Me interesa formar parte de equipos que construyan productos con impacto
        real, combinando desarrollo de software, diseño funcional y tecnologías
        emergentes.
      </Text>
    </Box>
  );
};

export default AboutMe;
