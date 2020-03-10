import { ThemeProvider } from "@material-ui/styles";
import { StoreProvider } from "easy-peasy";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
import store from "./store";
import theme from "./theme";

const Root = () => {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default Root;
