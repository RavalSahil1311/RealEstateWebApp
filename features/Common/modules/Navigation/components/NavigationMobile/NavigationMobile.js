import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";
import { navigationLinks } from "../../NavigationConsts";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavigationMobile = () => {
  return (
    <Box
      color="blue.600"
      padding="2rem"
      backgroundColor="white"
      display={{ base: "block", md: "none" }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Box display="flex" gap="2" alignItems="Center">
            <HiHomeModern size="30" />
            <Text fontSize="2xl" fontWeight="black">
              HAPPY HOME
            </Text>
          </Box>
        </Link>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {navigationLinks.map((item) => (
              <NavigationLink key={item.title} {...item} />
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavigationMobile;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <MenuItem alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  );
};
