import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { ClipboardRoot, ClipboardIconButton } from "../ui/clipboard";
import myCV from "../../documents/MelisaMessa_CV.pdf";

const Hero = () => {
  return (
    <Box
      id={"hero"}
      mt={"60px"}
      p={"20px"}
      w={"100vw"}
      h={"auto"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"20px"}
    >
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        align={"center"}
        justify={"center"}
        w={"full"}
        px={{ base: "20px", md: "60px" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <VStack spaceY={4} flex={"6"}>
          <Box>
            <Heading textStyle={"title"} color={"brand.title"}>
              Melisa Annabella Messa Muñoz
            </Heading>
            <Text textStyle={"subtitle"} pb={"10px"}>
              Analista Programadora Universitaria
            </Text>
            <HStack pb={"10px"} justify={{ base: "center", md: "start" }}>
              <FaLocationDot />
              <Text>Tandil, Buenos Aires, Argentina</Text>
            </HStack>
            <HStack
              spaceX={4}
              justify={{ base: "center", md: "start" }}
              wrap={"wrap"}
            >
              <ClipboardRoot value="messamelisa42@gmail.com">
                <HStack>
                  <ClipboardIconButton
                    size={"xs"}
                    _hover={{ bg: "brand.buttonHover" }}
                  />
                  <Text>messamelisa42@gmail.com</Text>
                </HStack>
              </ClipboardRoot>
              <Button
                asChild
                as="a"
                bg={"brand.buttonBg"}
                _hover={{ bg: "brand.buttonHover" }}
                color="#000"
                size="sm"
              >
                <a href={myCV} target="_blank">
                  Curriculum
                </a>
              </Button>
              <Link
                color={"#fff"}
                href="https://www.linkedin.com/in/melisa-messa/"
                target="_blank"
              >
                <FaLinkedin size={"25"} />
              </Link>
              <Link
                color={"#fff"}
                href="https://github.com/melisamessa"
                target="_blank"
              >
                <VscGithubInverted size={"25"} />
              </Link>
            </HStack>
          </Box>
        </VStack>
        <Box
          flex={{ base: "none", md: "4" }}
          mb={{ base: "20px", md: "0" }}
          p={"20px"}
        >
          <Image
            src={"/images/melisamessa1.jpg"}
            w={{ base: "150px", md: "200px" }}
            h={{ base: "150px", md: "200px" }}
            borderRadius={"full"}
            objectFit={"cover"}
            alt="Melisa A. Messa Muñoz"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
