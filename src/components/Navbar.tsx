import { Box, Flex, Link, useBreakpointValue } from "@chakra-ui/react";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return null;
  }
  return (
    <Flex
      as="nav"
      top="0"
      left="0"
      width="100%"
      backdropFilter="blur(5px)"
      p="4"
      justify="center"
      zIndex={"1000"}
    >
      <Box mx="4">
        <Link href="#hero" color="white" fontWeight="bold">
          Inicio
        </Link>
      </Box>
      <Box mx="4">
        <Link href="#projects" color="white" fontWeight="bold">
          Proyectos
        </Link>
      </Box>
      <Box mx="4">
        <Link href="#skills" color="white" fontWeight="bold">
          Habilidades
        </Link>
      </Box>
      <Box mx="4">
        <Link href="#about" color="white" fontWeight="bold">
          Sobre mí
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
