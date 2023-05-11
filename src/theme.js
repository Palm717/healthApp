// theme.js
import { extendTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

// const { Button } = chakraTheme.components;

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "silver.100",
      },
    },
  },
});

export default theme;
