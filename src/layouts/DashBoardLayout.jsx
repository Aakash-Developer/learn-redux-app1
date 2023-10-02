import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { Flex } from "@chakra-ui/react";
import Dashboard from "../pages/Dashboard";
import { CreateNewModel } from "../fetures/New_user/CreateNewModel";
import UserMenu from "../fetures/user_Details/UserMenu";

export default function DashboardLayout() {
  return (
    <>
      <Header />
      <Main>
        <Flex justifyContent="flex-end" mb="5">
          <CreateNewModel />
        </Flex>
        <Dashboard />
      </Main>
    </>
  );
}
