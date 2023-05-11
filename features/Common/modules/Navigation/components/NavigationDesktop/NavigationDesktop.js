import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";
import { navigationLinks } from "../../NavigationConsts";

const NavigationDesktop = () => {
  return (
    <Box
      color="blue.600"
      paddingY="2rem"
      backgroundColor="white"
      display={{ base: "none", md: "block" }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems="Center">
              <HiHomeModern size="30" />
              <Text fontSize="2xl" fontWeight="black">
                HAPPY HOME
              </Text>
            </Box>
          </Link>
          {navigationLinks.map((item) => (
            <NavigationLink key={item.title} {...item} />
          ))}
          <Button>CREATE LISTING</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <Flex alignItems="cente" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};
