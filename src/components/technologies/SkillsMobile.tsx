import {
  Accordion,
  Box,
  VStack,
  Text,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import { skills } from "../../data/Skills";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const SkillsMobileSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [openCategory, setOpenCategory] = useState<String | null>(null);

  if (!isMobile) {
    return null;
  }

  return (
    <Accordion.Root collapsible>
      {skills.map((item, index) => (
        <Accordion.Item key={index} value={item.category}>
          <Accordion.ItemTrigger
            onClick={() =>
              setOpenCategory(
                openCategory === item.category ? null : item.category
              )
            }
          >
            <HStack justifyContent="space-between" width="100%">
              <Text
                textStyle={"subtitle"}
                color={"brand.subtitle"}
                fontSize={["sm", "md", "lg"]}
              >
                {item.category}
              </Text>
              {openCategory === item.category ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </HStack>
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
