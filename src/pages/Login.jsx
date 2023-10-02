import { useForm } from "react-hook-form";
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Box, Flex } from "@chakra-ui/react";
import Main from "../components/Main";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Main>
      <Flex height="100vh" justifyContent="center" alignItems="center">
        <Box width="full" maxW="600px" padding="50px" boxShadow="md" rounded={"xl"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: "This is required",
                  minLength: { value: 8, message: "Minimum length should be 8" },
                })}
              />
              <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
            </FormControl>
            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
    </Main>
  );
}
