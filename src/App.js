import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux//store";
import styled from "styled-components";

import "./App.css";

function App() {
  return (
    <StApp>
      <Provider store={store}>
        <Router />
      </Provider>
    </StApp>
  );
}

export default App;

const StApp = styled.div`
  font-family: tway;
`;