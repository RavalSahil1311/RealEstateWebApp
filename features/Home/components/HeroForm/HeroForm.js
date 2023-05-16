import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const HeroForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Box
        width="100%"
        padding="2rem"
        borderRadius="sm"
        backgroundColor="white"
        color="gray.700"
      >
        <Text fontSize="xl" fontWeight="bold">
          Free PDF Guide
        </Text>
        <Text fontSize="lg">
          Complete The Form Below To Download Your Guide
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            {/* INPUT_1 */}
            <Input
              marginTop="1.3rem"
              id="name"
              type="text"
              placeholder="Enter Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <Text fontSize="xs" color="red.400">
                {errors.name.type}
              </Text>
            )}
            {/* INPUT_2 */}
            <Flex
              gap={{ base: "0", sm: "1rem" }}
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Input
                marginTop="1.3rem"
                id="email"
                type="email"
                placeholder="Enter E-mail"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <Text fontSize="xs" color="red.400">
                  {errors.email.type}
                </Text>
              )}
              {/* INPUT_3 */}
              <Input
                marginTop="1.3rem"
                id="phone"
                type="text"
                placeholder="Enter Phone Number"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <Text fontSize="xs" color="red.400">
                  {errors.phone.type}
                </Text>
              )}
            </Flex>
            <Checkbox
              marginTop="1.3rem"
              ip="gdpr"
              type="checkbox"
              placeholder="GDPR"
              {...register("gdpr", { required: true })}
            >
              I Consent to having this website store my submittd data
            </Checkbox>
            {errors.gdpr && (
              <Text fontSize="xs" color="red.400">
                {errors.gdpr.type}
              </Text>
            )}
          </FormControl>
          <Button
            type="Submit"
            colorScheme="blue"
            width="100%"
            fontSize="xl"
            padding="2rem"
            marginTop='2rem'
          >
            Donwload Now
          </Button>
        </form>
      </Box>
    </>
  );
};

export default HeroForm;
