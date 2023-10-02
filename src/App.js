import Header from "./components/Header";
import Main from "./components/Main";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Dashboard />
      </Main>
    </>
  );
}

export default App;
