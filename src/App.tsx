import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, setConfiguration } from "react-grid-system";
import { VFC } from "react";
import { Header } from "./components/molecules/Header";
import AppNavigator from "./navigation";

const App: VFC = () => {
  setConfiguration({ gutterWidth: 24 });
  return (
    <>
      <Container>
        <Header />
        <BrowserRouter>
          <AppNavigator />
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
