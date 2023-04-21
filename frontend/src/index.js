import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/store";
import { ModalProvider } from "./context/Modal";
import jwtFetch from "./store/jwt";
import * as listActions from './store/lists'
import * as imageActions from './store/images'
import * as userActions from './store/session'
import { createRoot } from "react-dom/client";

let store = configureStore({});

if (process.env.NODE_ENV !== 'production'){
  window.store = store;
  window.jwtFetch = jwtFetch;
  window.listActions = listActions;
  window.imageActions = imageActions;
  window.userActions = userActions;
}



function Root() {
  return (
    <ModalProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </ModalProvider>
  );
}

const root = createRoot(document.getElementById('root'))


root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
