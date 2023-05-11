import React from "react";
import { Text, Box, Grid, GridItem } from "@chakra-ui/react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ImageTemplate from "../components/Images";
import japan from "../assets/img/japan.png";

function Home() {
  const beveledStyle = {
    borderRadius: "35px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
    padding: "16px",
  };

  return (
    <>
      {/* <Flex direction={"column"} minHeigh="100vh"> */}
      <Box mt="16px">
        <Nav />
      </Box>
      <Grid
        templateColumns="repeat(6, 1fr)"
        bgGradient="linear(to-r, green.200, pink.400, blue.100)"
        // mt="100px"
        // mb="100px"
        p={6}
      >
        <main>
          <GridItem
            as="aside"
            colSpan="1"
            minH="100vh"
            bgGradient="linear(to-r, yellow.200, green.300)"
            style={beveledStyle}
          >
            <Box>
              <ImageTemplate
                src={japan}
                alt="Japan"
                maxH="100px"
                rounded="30px"
              />

              <Text fontSize={"12px"} ml="3px">
                I started making healing feels products because I couldn't find
                anything out there like them. I was using multiple products for
                an effect that I knew I could make one do. All ingredients used
                are ethical and naturally made to ensure the best quality.
                Extensive research has been done to promise quality and
                transparency to make sure each ingredient is clean. None of the
                ingredients are tested on animals.
              </Text>
            </Box>
          </GridItem>
        </main>

        <GridItem
          as="main"
          colSpan="5"
          bgGradient="linear(to-r, yellow.200, green.300)"
          style={beveledStyle}
          maxH="20%"
          p="40px"
          m="8vh"
        >
          <Text> Box 2 </Text>
        </GridItem>
      </Grid>

      <Footer />
      {/* </Flex> */}
    </>
  );
}

export default Home;
