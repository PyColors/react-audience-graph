import { CssBaseline } from "@material-ui/core";
import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";

import { Layout } from "../../components";
import { useFetch } from "../../hooks/api.hook";
import { useStoreActions, useStoreState } from "../../hooks/store.hook";
import { getMessagesForLocale } from "../../lang/locale";
import Routes from "../routes";

const App = () => {
  const fetch = useStoreActions(actions => actions.auth.fetch);
  const locale = useStoreState(state => state.locale.item);
  const fetchCallback = useFetch(fetch);

  useEffect(() => {
    fetchCallback();
  }, [fetchCallback]);

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
