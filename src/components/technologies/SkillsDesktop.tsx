import { Box, Grid, Text, Card, useBreakpointValue } from "@chakra-ui/react";
import { skills } from "../../data/Skills";

const SkillsDesktopSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return null;
  }
  return (
    <Box id="skillsDesktopSection" w="1000px" mx="auto" p={6}>
      {skills.map((section, index) => (
        <Box key={index} mb={8}>
          <Text textStyle={"subtitle"} mb={4} color="brand.subtitle">
            {section.category}
          </Text>
          <Card.Root bg="brand.glass" p={4} borderRadius="md">
            <Card.Header />
            <Card.Body>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={6}
                textAlign="center"
              >
                {section.items.map((item, index) => (
                  <Box
                    key={index}
                    display="flex"
                    flexDirection={"column"}
                    color={"#fff"}
                    gap={2}
                    alignItems={"center"}
                  >
                    <Box fontSize="4xl" color="white">
                      {item.icon && <item.icon />}
                    </Box>
                    <Text fontWeight="bold">{item.name}</Text>
                    {item.level && (
                      <Text fontSize="sm" color="gray.400">
                        {item.level}
                      </Text>
                    )}
                  </Box>
                ))}
              </Grid>
            </Card.Body>
            <Card.Footer />
          </Card.Root>
        </Box>
      ))}
    </Box>
  );
};

export default SkillsDesktopSection;
