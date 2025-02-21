import { Box, Heading } from "@chakra-ui/react";
import SkillsDesktopSection from "./SkillsDesktop";
import SkillsMobileSection from "./SkillsMobile";

export const SkillsSection = () => {
  return (
    <Box id="skills" p={8} w="full" maxW="1200px" mx="auto">
      <Heading textStyle={"title"} color={"brand.title"}>
        Habilidades:
      </Heading>
      <SkillsMobileSection />
      <SkillsDesktopSection />
    </Box>
  );
};
