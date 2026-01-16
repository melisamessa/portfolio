import {
  Heading,
  Box,
  Flex,
  Text,
  Image,
  Stack,
  Button,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

const Work = () => {
  const images = [
    "/images/logoSAM.png",
    "/images/SAM-Web.png",
    "/images/SAMwebLogin.png",
  ];

  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <Box id="work" p={8} w="full" maxW="1200px" mx="auto">
      <Heading textStyle={"title"} color={"brand.title"} textAlign={"start"}>
        Emprendimiento:{" "}
      </Heading>
      <Flex
        width="100%"
        p={{ base: 4, md: 8 }}
        justify="center"
        align={"center"}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 6, md: 10 }}
      >
        <Box flex={1} maxW="600px">
          <Text fontSize="xl" fontWeight="bold" mb={3}>
            {" "}
            Sistema Automatizado de Mensajes (SAM)
          </Text>
          <Text fontSize="md" mb={3} color="gray.400">
            Desarrollo de un sistema de automatización de mensajes orientado a
            negocios, que integra un chatbot conversacional con un panel
            administrador web para la gestión de clientes, flujos y
            configuraciones.
          </Text>
          <Text fontSize="md" color="gray.400">
            Proyecto con mi colega Amaiké Gopar en desarrollo, orientado a
            ofrecer soluciones automatizadas de comunicación para empresas.
          </Text>
          <Stack direction="row" mt={4} spaceX={4}>
            <Link
              href="https://amaikegop.github.io/SAM-WEB/"
              _hover={{ textDecoration: "none" }}
            >
              <Button colorScheme="purple">Ver sitio del emprendimiento</Button>
            </Link>
            <Link
              color={"#fff"}
              href="https://www.linkedin.com/company/sistema-automatizado-de-mensajes"
              target="_blank"
            >
              <FaLinkedin size={"25"} />
            </Link>
            <Link
              color={"#fff"}
              href="https://www.instagram.com/sistemaautomatizadodemensajes/"
              target="_blank"
            >
              <FaInstagram size={"25"} />
            </Link>
          </Stack>
        </Box>
        <Box
          flex={1}
          maxW="600px"
          position={"relative"}
          borderRadius="xl"
          overflow="hidden"
          boxShadow="lg"
        >
          <Image
            src={images[current]}
            alt="Sistema Automatizado de Mensajes"
            width="100%"
            height={{ base: "220px", md: "340px" }}
            objectFit="cover"
            objectPosition="center"
            // p={images[current].includes("logo") ? 8 : 0}
            transition="all 0.4s ease"
          />
          <IconButton
            aria-label="Anterior"
            position="absolute"
            top="50%"
            left="3"
            transform="translateY(-50%)"
            onClick={prev}
            bg="blackAlpha.600"
            color="white"
            _hover={{ bg: "blackAlpha.800" }}
          >
            <FaAngleLeft />
          </IconButton>

          <IconButton
            aria-label="Siguiente"
            position="absolute"
            top="50%"
            left="3"
            transform="translateY(-50%) translateX(1120%)"
            onClick={next}
            bg="blackAlpha.600"
            color="white"
            _hover={{ bg: "blackAlpha.800" }}
          >
            <FaAngleRight />
          </IconButton>
        </Box>
      </Flex>
    </Box>
  );
};

export default Work;
