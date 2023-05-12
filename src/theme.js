// theme.js
import { extendTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import "@fontsource/roboto";

// const { Button } = chakraTheme.components;

const theme = extendTheme({
  fonts: {
    heading: `"Roboto", 'sans-serif`,
    body: `"Roboto", "sans-serif"`,
  },

  styles: {
    global: {
      body: {
        bg: "silver.100",
      },
    },
  },
});

export default theme;
