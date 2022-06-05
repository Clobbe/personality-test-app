import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Typography from "../components/atoms/Typography";
import Index from "../pages/Index";
import Questionaire from "../pages/Questionaire";
import Result from "../pages/Result";

export enum ROUTES {
  HOME = "/",
  QUESTIONAIRE = "/questionaire",
  RESULT = "/result",
  CATCH_ALL = "*"
}

const PageNotFound = () => (
  <Typography variant="h1" align="center">
    404 : Page Not Found
  </Typography>
);

const AppNavigator: React.FC = () => (
  <Switch>
    <Route exact path={ROUTES.HOME}>
      <Index />
    </Route>
    <Route path={ROUTES.QUESTIONAIRE}>
      <Questionaire />
    </Route>
    <Route path={ROUTES.RESULT}>
      <Result />
    </Route>
    <Route path={ROUTES.CATCH_ALL}>
      <PageNotFound />
    </Route>
  </Switch>
);

export default AppNavigator;
