import { usePropertyFormat } from "@/features/Common/Hooks/usePropertyFormat";
import TextContentBox from "@/features/Common/modules/TextContentBox/TextContentBox";
import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";
import PropertyMatterPortEmbed from "@/features/Property/Components/PropertyMatterPortEmbed/PropertyMatterPortEmbed";
import PropertyStats from "@/features/Property/Components/PropertyStats/PropertyStats";
import PropertyThumbnailSlider from "@/features/Property/Components/PropertyThumbnailSlider/PropertyThumbnailSlider";
import PropertyYoutubeEmbed from "@/features/Property/Components/PropertyYoutubeEmbed/PropertyYoutubeEmbed";
import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { TbMapPin } from "react-icons/tb";

const PropertySingle = ({ property }) => {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    coverVideo,
    panorama,
    amenities,
    furshied,
  } = usePropertyFormat(property);
  return (
    <DefaultLayout>
      <Box backgroundColor="#f7f8f9" paddingY="3rem">
        <Grid
          templateColumns="repeat(6,1fr)"
          gap="5"
          maxWidth="1280px"
          margin="0 auto"
        >
          <GridItem colSpan="6">
            <Text
              fontSize="3xl"
              fontWeight="medium"
              color="blue.800"
              textAlign={{ base: "center", sm: "left" }}
            >
              {propertyType} {title}
            </Text>
            <Flex
              fontSize="xl"
              color="blue.600"
              textAlign="center"
              alignItems="center"
              flexDirection={{ base: "column", sm: "row" }}
              gap="0.5rem"
              marginY={{ base: "1rem", sm: "0" }}
            >
              <TbMapPin />
              <Text fontWeight="light">
                {address} -ID: {externalID}
              </Text>
              <Badge colorScheme="green">{purpose}</Badge>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <PropertyThumbnailSlider photos={photos} />
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <PropertyStats
              rooms={rooms}
              baths={baths}
              price={price}
              sqSize={sqSize}
            />
            <TextContentBox title="Description">
              <Text
                fontWeight="light"
                fontSize="1rem"
                color="gray.600"
                noOfLines="4"
              >
                {description}
              </Text>
            </TextContentBox>
            <TextContentBox title="Amenities">
              <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                fontWeight="light"
                color="gray.600"
                fontSize="1rem"
              >
                {amenities.length
                  ? amenities.map((item) => <Text>{item} </Text>)
                  : "Please Contact Us For More Information"}
              </SimpleGrid>
            </TextContentBox>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <TextContentBox title='Video Walkthorugh'>
              <PropertyYoutubeEmbed coverVideo={coverVideo} />
            </TextContentBox>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <TextContentBox title='Panorama 3D View'>
              <PropertyMatterPortEmbed panorama={panorama} />
            </TextContentBox>
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default PropertySingle;

export async function getServerSideProps(context) {
  const property = require("@/features/data/property");
  return {
    props: { property },
  };
}
