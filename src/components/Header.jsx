import { Box, Flex, Input, Spacer, Text, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <header style={{ height: "10%" }}>
      <Container maxW="1024px">
        <Box py="15px" mb="5px">
          <Flex alignItems="center">
            <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="4xl" fontWeight="extrabold">
              Dashboard
            </Text>
            <Spacer />
            <InputGroup maxW="xl">
              <InputRightElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputRightElement>
              <Input type="search" placeholder="Search...." />
            </InputGroup>
          </Flex>
        </Box>
      </Container>
    </header>
  );
}
