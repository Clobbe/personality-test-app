import React from "react";
import { Container, setConfiguration } from "react-grid-system";
import { VFC } from "react";
import { Header } from "./components/molecules/Header";
import AppNavigator from "./navigation";

const App: VFC = () => {
  setConfiguration({ gutterWidth: 24 });
  return (
    <Container>
      <Header />
      <AppNavigator />
    </Container>
  );
};

export default App;
