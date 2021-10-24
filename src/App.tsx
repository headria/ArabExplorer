import { StyledThemeProvider } from "definitions/styled-components";
import { Provider } from "react-redux";
import store from "redux/store";
import "./i18n";

import Explorer from "pages/Explorer";
import GlobalStyles from "styles/globalStyles";

function App(): JSX.Element {
  return (
    <StyledThemeProvider>
      <GlobalStyles />
      <Provider store={store}>
        <div className="App">
          <Explorer />
        </div>
      </Provider>
    </StyledThemeProvider>
  );
}

export default App;
