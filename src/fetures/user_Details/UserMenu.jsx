import { Box, Button, Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import UserProfileImage from "./UserProfileImage";
import { BiSolidUser } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function UserMenu() {
  return (
    <>
      <UserProfileImage />

      <Box>
        <List spacing={3}>
          <NavLink to="personal-details">
            <ListItem bg="teal.400" p="2" rounded="md" cursor="pointer" _hover={{ bgColor: "teal.500" }} fontWeight="semibold">
              <ListIcon as={BiSolidUser} color="black" />
              Personal Details
            </ListItem>
          </NavLink>
          <NavLink to="education-details">
            <ListItem bg="gray.300" p="2" rounded="md" cursor="pointer" _hover={{ bgColor: "teal.500" }}>
              <ListIcon as={FaUserGraduate} color="black" />
              Education
            </ListItem>
          </NavLink>

          <ListItem bg="gray.300" p="2" rounded="md" cursor="pointer" _hover={{ bgColor: "teal.500" }}>
            <ListIcon color="green.500" />
            Employment
          </ListItem>
          <ListItem bg="gray.300" p="2" rounded="md" cursor="pointer" _hover={{ bgColor: "teal.500" }}>
            <ListIcon color="green.500" />
            Hobby-skills-Languages
          </ListItem>
          <ListItem bg="gray.300" p="2" rounded="md" cursor="pointer" _hover={{ bgColor: "teal.500" }}>
            <ListIcon color="green.500" />
            Projects
          </ListItem>
        </List>
      </Box>
      <Button>Dashboard</Button>
    </>
  );
}
