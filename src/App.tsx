import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Index from "./pages/Index";
import Questionaire from "./pages/Questionaire";
import Result from "./pages/Result";
import { VFC } from "react";

const App: VFC = () => {
  //TODO :: refactor "componentify" this instead...
  return (
    <>
      <Container>
        {/* TODO :: break out into a Heading-component */}
        <Row>
          <Col>
            <h1>Personality Test App</h1>
            <h3>Are you 🤩 (extrovert) or 😶 (introvert)</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route exact path="/">
                <Index />
              </Route>
              <Route path="/questionaire">
                <Questionaire />
              </Route>
              <Route path="/result">
                <Result />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
