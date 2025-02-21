import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Link,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";
import { projects } from "../../data/Projects";
import { FaGithub } from "react-icons/fa6";

const Project = () => {
  return (
    <Box id="projects" p={8} w="full" maxW="1200px" mx="auto">
      <Heading textStyle={"title"} color={"brand.title"} textAlign={"start"}>
        Proyectos:{" "}
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        mt={"10"}
      >
        {projects.map((project) => (
          <GridItem
            key={project.id}
            p={6}
            bg="brand.glass"
            borderRadius="md"
            boxShadow="md"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Flex justify="space-between" align="center">
              <Heading size="md" color={"brand.subtitle"}>
                {project.name}
              </Heading>
              {project.github ? (
                <Tooltip content="Ver repositorio">
                  <Link href={project.github} target="_blank">
                    <FaGithub size={25} color="#fff" />
                  </Link>
                </Tooltip>
              ) : (
                <Tooltip content="Repositorio privado: solicitar codigo por mail">
                  <Box cursor="pointer">
                    <FaGithub size={25} color="#fff" />
                  </Box>
                </Tooltip>
              )}
            </Flex>

            <Text mt={2} fontSize={{ base: "sm", md: "md" }}>
              {project.description}
            </Text>

            <HStack wrap="wrap" mt={4}>
              {project.technologies.map((tech, index) => (
                <Tag.Root
                  key={index}
                  colorScheme="yellow"
                  mr={1}
                  mb={1}
                  fontSize={{ base: "xs", md: "sm" }}
                >
                  <Tag.Label>{tech}</Tag.Label>
                </Tag.Root>
              ))}
            </HStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Project;
