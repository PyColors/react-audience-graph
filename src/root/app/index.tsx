import { CssBaseline } from "@material-ui/core";
import React from "react";
import { IntlProvider } from "react-intl";

import { Layout } from "../../components";
import { useStoreState } from "../../hooks/store.hook";

import { getMessagesForLocale } from "../../lang/locale";
import Routes from "../routes";

const App = () => {
  const locale = useStoreState(state => state.locale.item);

  return (
    <IntlProvider locale={locale} messages={getMessagesForLocale(locale)}>
      <CssBaseline />
      <Layout>
        <Routes />
      </Layout>
    </IntlProvider>
  );
};

export default App;
