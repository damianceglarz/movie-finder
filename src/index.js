import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//redux
import { createStore, compose, applyMiddleware } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import rootReducer from "./store/reducer";

//saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/saga";
 

const sagaMiddleware = createSagaMiddleware();
const composeWithDevTools = (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

//run saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
