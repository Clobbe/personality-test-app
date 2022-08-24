import React from "react";
import { Container, setConfiguration } from "react-grid-system";
import { VFC } from "react";
import { Header } from "./components/molecules/Header";
import AppNavigator from "./navigation";
import AppContext from "./context";

const App: VFC = () => {
  setConfiguration({ gutterWidth: 48 });
  return (
    <AppContext>
      <Container>
        <Header />
        <AppNavigator />
      </Container>
    </AppContext>
  );
};

export default App;
