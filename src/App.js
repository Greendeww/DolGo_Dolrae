import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux//store";

import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
