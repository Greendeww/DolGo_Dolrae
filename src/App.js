import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux//store";
import styled from "styled-components";

import "./App.css";

function App() {
  return (
      <Provider store={store} style={{ fontFamily: "tway"}}>
        <Router />
      </Provider>
  );
}

export default App;