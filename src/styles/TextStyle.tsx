import { defineTextStyles } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
  title: {
    value: {
      fontFamily: "heading",
      fontSize: "2xl",
      fontWeight: "bold",
      lineHeight: "2",
    },
  },
  subtitle: {
    value: {
      fontFamily: "inherit",
      fontSize: "xl",
    },
  },
});
