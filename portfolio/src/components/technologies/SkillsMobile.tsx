import {
  Accordion,
  Box,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { skills } from "../../data/Skills";

const SkillsMobileSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (!isMobile) {
    return null;
  }

  return (
    <Accordion.Root collapsible>
      {skills.map((item, index) => (
        <Accordion.Item key={index} value={item.category}>
          <Accordion.ItemTrigger>
            <Text
              textStyle={"subtitle"}
              color={"brand.subtitle"}
              fontSize={["sm", "md", "lg"]}
            >
              {item.category}
            </Text>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item.items.map((s, i) => (
              <Box py={2} key={i}>
                <VStack alignItems={"center"}>
                  <Accordion.ItemBody>
                    <VStack align={"center"}>
                      {s.icon && <s.icon size={"20px"} />}
                      <Text fontSize={["sm", "md"]}>{s.name}</Text>
                      {s.level && (
                        <Text fontSize={["sm", "md"]} color="gray.500">
                          {s.level}
                        </Text>
                      )}
                    </VStack>
                  </Accordion.ItemBody>
                </VStack>
              </Box>
            ))}
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default SkillsMobileSection;
