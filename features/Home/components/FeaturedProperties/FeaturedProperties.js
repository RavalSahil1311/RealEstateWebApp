import { Box, Text } from "@chakra-ui/react";
import PropertySlider from "./Components/PropertySlider/PropertySlider";

const Featuredproperties = ({ featuredproperties }) => {
  // console.log(featuredproperties);
  
  return (
    <Box backgroundColor="blue.50">
      <Box
        maxWidth="1280px"
        margin="0 auto"
        color="gray.600"
        paddingY={{ base: "3rem", sm: "6rem" }}
      >
        <Text
          fontSize={{ base: "4xl", sm: "5xl" }}
          lineHeight="shorter"
          fontWeight="light"
          paddingX="2rem"
          textAlign="center"
        >
          Discover Our Featured Properties
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="light"
          marginTop="1rem"
          marginBottom="3rem "
          paddingX="2rem"
          textAlign="center"
        >
          Selection of Our Best Properties
        </Text>
        <PropertySlider featuredproperties={featuredproperties}/>
      </Box>
    </Box>
  );
};

export default Featuredproperties;
