import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Project from "./components/projects/Project";
import AboutMe from "./components/aboutMe/AboutMe";
import { SkillsSection } from "./components/technologies/SkillsSection";

function App() {
  return (
    <Flex
      gap={{ base: 4, md: 10 }}
      direction={"column"}
      align={"center"}
      w="100vw"
    >
      <Navbar />
      <Hero />
      <Project />
      <SkillsSection />
      <AboutMe />
    </Flex>
  );
}

export default App;
