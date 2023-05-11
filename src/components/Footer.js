import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <Box
        position={"fixed"}
        fontSize={12}
        bottom={0}
        width={"100%"}
        height={"40px"}
        roundedTop={"50px"}
        bgGradient="linear(to-bl, blue.300, green.400)"
        lineHeight={"60px"}
        textAlign={"right"}
      >
        <footer>
          <Text mr={4} mb={2} textColor={"yellow.300"}>
            Copyright &copy; 2023
          </Text>
        </footer>
      </Box>
    </>
  );
}

export default Footer;
