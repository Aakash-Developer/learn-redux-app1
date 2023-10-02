import { Button, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";
import Dashboard from "./pages/Dashboard";
import { CreateNewModel } from "./fetures/New_user/CreateNewModel";
import RootRouter from "./router/RootRouter";

function App() {
  return (
    <>
      <RootRouter />
      {/* <Header />
      <Main>
        <Flex justifyContent="flex-end" mb="5">
          <CreateNewModel />
        </Flex>
        <Dashboard />
      </Main> */}
    </>
  );
}

export default App;
