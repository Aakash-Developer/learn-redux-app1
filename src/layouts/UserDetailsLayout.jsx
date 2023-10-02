import { Grid, GridItem } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import UserMenu from "../fetures/user_Details/UserMenu";
import { Outlet } from "react-router-dom";
export default function UserDetailsLayout() {
  return (
    <Container maxW="7xl" height="100vh" padding="4">
      <Grid templateColumns="1fr 3fr" gap={2} h="full" overflow="hidden">
        <GridItem w="100%" height="full" bg="gray.100" padding="4" rounded="md">
          <UserMenu />
        </GridItem>
        <GridItem w="100%" height="full" bg="gray.100" padding="4" rounded="md">
          <Outlet />
        </GridItem>
      </Grid>
    </Container>
  );
}
