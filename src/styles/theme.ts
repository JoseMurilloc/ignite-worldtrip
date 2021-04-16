import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  colors: {
    white: {
      "100": "#DADADA",
      "500": "#F5F8FA",
      "900": "#FFFFFF"
    },
    black: {
      "900": "#000000",
      "800": "#47585B",
      "500": "#999999",
      "50": "rgba(153, 153, 153, 0.5)"
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white.900',
        color: 'black.900'
      },
    }
  }
}) 