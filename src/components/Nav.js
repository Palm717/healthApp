import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Flex,
  Box,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ImageTemplate from "../components/Images";
import logo from "../assets/img/healingFeels.png";

function Nav() {
  const linkStyle = {
    textDecoration: "none",
    transition: "transform 0.2s",
    ":hover": {
      transform: "scale(1.1)",
    },
  };

  return (
    <>
      <Box
        bgGradient="linear(to-r, green.100,pink.100, orange.200)"
        rounded="15px"
        position="fixed"
        width="100%"
        zIndex="999"
        top="0"
        left="0"
      >
        <Flex align="center" m={2}>
          <ImageTemplate src={logo} alt="logo" maxH="50px" rounded="20px" />
          <Spacer />
          <Breadcrumb separator="" m="5px">
            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                to="/"
                fontSize="20px"
                color="pink.700"
                sx={linkStyle}
              >
                home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                to="/shop"
                fontSize="24px"
                color="blue.600"
                sx={linkStyle}
              >
                shop
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                as={Link}
                to="/about"
                fontSize="20px"
                color="green"
                sx={linkStyle}
              >
                about
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Box>
    </>
  );
}

export default Nav;
