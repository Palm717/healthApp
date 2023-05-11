import { Box, Heading, Text, Image, HStack } from "@chakra-ui/react";
import oil from "../assets/img/magOil.jpg";

function ItemTemplate({ item, itemDesc, magOil }) {
  return (
    <Box
      p={5}
      w="100%"
      h="600px"
      shadow={"lg"}
      borderWidth={"1px"}
      bgGradient="linear(to-tl, green.100, orange.200)"
      rounded={"5%"}
      m={4}
      overflow={"hidden"}
    >
      <Box align="center">
        <Image position="center" src={magOil} alt={item} />
      </Box>
      <Heading mt={3} fontSize="lg">
        {item}
      </Heading>
      <Text mt={1}>{itemDesc}</Text>
    </Box>
  );
}

function ItemContent() {
  return (
    <>
      <HStack m="10%" direction={["column", "row"]} spacing="50px">
        <ItemTemplate
          item="transdermal magnesium - no.1"
          itemDesc="transdermal magnesium is absorbed through the skin instead of the digestive system. It can help relax tense muscles and create stronger connective tissue. This product contains moisturizing ingredients and carefully picked essential oils to also aid in relaxing the nervous system. "
          magOil={oil}
        />
        <ItemTemplate
          item="cleansing oil"
          itemDesc="gently removes dirt, makeup and impurities without leaving an oil resiude or disturbng your skins natural ph. this product uses sweet almond oil, coconut oil and grapeseed oil as the base. it has multiple purposes aside from cleaning; it can also be used as a face serum and has been used to help reduce irritation from common skin conditons like eczema and psoriasis."
          magOil={oil}
        />
      </HStack>
    </>
  );
}

export default ItemContent;
