import React from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Grid, GridItem, Box, Divider } from "@chakra-ui/layout";

import FormTemplate from "../components/Forms";

function About() {
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
    <Grid templateColumns=" auto repeat(3, .5fr) auto" maxH="100vh" mt="55px">
      <GridItem gridColumn="1 / -1">
        <Nav />
      </GridItem>

      <GridItem
        bgGradient="linear(to-b, green.100, blue.300, green.100)"
        rounded="35px"
      >
        <Box m={20} w={["sm", "lg"]} style={beveledStyle} align="flex-end">
          <FormTemplate formVal="Email" message="" />

          <Divider mt={1} />

          <FormTemplate formVal="Name" message="" />
        </Box>
      </GridItem>

      <GridItem gridColumn="1 / -1">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default About;
