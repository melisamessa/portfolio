import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { textStyles } from "../styles/TextStyle";

const config = defineConfig({
  globalCss: {
    html: {
      backgroundImage: "linear-gradient(to bottom, #0A192F, #000000)",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      color: "#fff",
    },
  },
  theme: {
    textStyles,
    tokens: {
      colors: {
        brand: {
          title: { value: "#FFD700" },
          subtitle: { value: "#D4A017" },
          glass: { value: "rgba(255, 255, 255, 0.1)" },
          buttonBg: { value: "#fff" },
          buttonHover: { value: "#888" },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
