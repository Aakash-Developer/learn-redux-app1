import { Avatar, AvatarBadge, AvatarGroup, Box, Button, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";

export default function UserProfileImage() {
  return (
    <Box>
      <Flex justifyContent="center" flexDirection="column" alignItems="center" textAlign="center" mb="5">
        <Wrap mb="2">
          <WrapItem>
            <Avatar size="2xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          </WrapItem>
        </Wrap>
        {/* <Button>Upload</Button> */}
        <Box>
          <Text fontSize="2xl">Aakash Macwan</Text>
          <Text textColor={"gray.400"}>Web Developer</Text>
        </Box>
      </Flex>
    </Box>
  );
}
