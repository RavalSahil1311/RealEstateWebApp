import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import { partners } from "./ParnersConsts";

const Partners = () => {
  return (
    <>
      <Text
        fontSize={{ base: "4xl", sm: "5xl" }}
        lineHeight="shorter"
        fontWeight="light"
        paddingX="2rem"
        textAlign="center"
      >
        Our Investors
      </Text>
      <SimpleGrid
        columns={partners.length}
        margin="0 auto"
        minChildWidth="150px"
      >
        {partners.map((partner) => (
          <Image
            key={partner}
            src={partner}
            alignSelf="center"
            padding={{ base: "2rem", sm: "3rem" }}
            filter="grayscale(0.3)"
            opacity="0.8"
            //   width="10rem"
            height={{ base: "8rem", sm: "11rem" }}
            objectFit="cover"
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Partners;
