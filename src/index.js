import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import { store } from "state/store";
import "./index.css";
import App from "./App";

// Start the mocking conditionally.
if (process.env.REACT_APP_USE_API_MOCK === "true") {
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);