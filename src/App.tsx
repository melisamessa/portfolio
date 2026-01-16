import { useEffect, useState } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Work from "./components/work/work";
import Project from "./components/projects/Project";
import AboutMe from "./components/aboutMe/AboutMe";
import { SkillsSection } from "./components/technologies/SkillsSection";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = () => setLoading(false);

    // Si ya cargó (por navegación o cache), no esperamos
    if (document.readyState === "complete") {
      setLoading(false);
      return;
    }

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      {loading && (
        <Box
          position="fixed"
          inset="0"
          bg="linear-gradient(to bottom, #0A192F, #000000)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex="9999"
        >
          <Box textAlign="center">
            <Spinner size="xl" />
            <Text mt={4} fontSize="sm" opacity={0.8}>
              Cargando portfolio...
            </Text>
          </Box>
        </Box>
      )}

      {/* TU APP */}
      <Flex
        gap={{ base: 4, md: 10 }}
        direction={"column"}
        align={"center"}
        w="100vw"
      >
        <Navbar />
        <Hero />
        <Work />
        <Project />
        <SkillsSection />
        <AboutMe />
      </Flex>
    </>
  );
}
