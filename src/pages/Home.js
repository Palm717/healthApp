import React from "react";
import { Heading, Text, Box, Grid, GridItem, Divider } from "@chakra-ui/react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Home() {
  const beveledStyle = {
    borderRadius: "35px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <Grid
        bgGradient="linear(to-b, green.100, blue.300, green.100)"
        templateRows="auto repeat(3, .2fr) auto"
        templateColumns="1fr 3fr"
        minHeight="100vh"
        gap={4}
        padding={4}
        mt={8}
        mb={2}
      >
        <GridItem gridColumn="1 / -1">
          <Nav />
        </GridItem>

        <GridItem
          rowSpan={4}
          style={beveledStyle}
          bgGradient={"linear(to-b, whiteAlpha.900, pink.300, whiteAlpha.900)"}
          h="60vh"
          overflowY="auto"
          m="20px"
        >
          <Heading
            fontSize={["md", "xl", "4xl"]}
            textAlign={["center", "center"]}
            justifyContent="center"
            whiteSpace="nowrap"
            color="gray.600"
          >
            Healing Feels
          </Heading>
          <Divider mt="20px" />
          <Text>
            I started making healing feels products because I couldn't find
            anything out there like them. I was using multiple products for an
            effect that I knew I could make one do.
          </Text>
        </GridItem>

        <GridItem
          colSpan={1}
          style={beveledStyle}
          bgGradient={"linear(to-b, blue.100, pink.100, orange.200)"}
          mb="10px"
        >
          <Box>
            <Text>
              <Divider />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              voluptatem aliquam voluptatum quaerat sit, perspiciatis, est
              reprehenderit quibusdam magni dolores aspernatur eos consectetur
              suscipit obcaecati iusto nemo impedit ut dignissimos!
              <Divider />
            </Text>
          </Box>
        </GridItem>

        <GridItem
          colSpan={1}
          style={beveledStyle}
          bgGradient={"linear(to-b, blue.100, pink.100, orange.200)"}
        >
          {/* Here goes your main content */}
          <Box>Main content here</Box>
        </GridItem>
        <GridItem
          colSpan={1}
          style={beveledStyle}
          bgGradient={"linear(to-b, blue.100, pink.100, orange.200)"}
          mt="10px"
        >
          {/* Here goes your main content */}
          <Box></Box>
        </GridItem>
        <GridItem gridColumn="1 / -1">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default Home;
