import { Box, Text } from "@chakra-ui/react";

function Footer({ email, address }) {
  return (
    <>
      <Box
        position="fixed"
        fontSize={12}
        bottom={0}
        w="100%"
        h="40px"
        roundedTop="50px"
        bgGradient="linear(to-bl, blue.300, green.400)"
        lineHeight="60px"
        textAlign="right"
      >
        <footer>
          <Text
            mr="10px"
            mb={2}
            textColor={"yellow.300"}
            email={email}
            address={address}
          >
            {email} - {address} Copyright &copy; 2023
          </Text>
        </footer>
      </Box>
    </>
  );
}

export default Footer;
