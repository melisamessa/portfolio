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
        graduada como Analista Programadora Universitaria y estudiante avanzada
        de Ingeniería de Sistemas. Tengo experiencia en desarrollo de software,
        aplicaciones móviles y videojuegos, participando en proyectos con Unity,
        inteligencia artificial y computación evolutiva. Además, he desarrollado
        aplicaciones web por mi cuenta con tecnologías como React, Spring Boot y
        Java. Me apasiona crear soluciones innovadoras y funcionales.
        Actualmente, busco unirme a un equipo donde pueda aportar mis
        conocimientos en desarrollo de software y seguir creciendo
        profesionalmente.
      </Text>
    </Box>
  );
};

export default AboutMe;
