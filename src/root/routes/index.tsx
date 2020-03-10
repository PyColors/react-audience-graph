import React from "react";
import { Route, Switch } from "react-router";

import { NotFound } from "../../components";
import { routes } from "./routes";

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ exact, path, component }) => (
        <Route key={path} exact={exact} path={path} component={component} />
      ))}
      <Route key={routes.length} component={NotFound} />
    </Switch>
  );
};

export default Routes;
