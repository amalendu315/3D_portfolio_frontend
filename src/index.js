import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import {Provider as AlertProvider, positions, transitions} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider
        template={AlertTemplate}
        position={positions.BOTTOM_CENTER}
        transition={transitions.SCALE}
        timeout={5000}
      >
        <Router>
          <Header />
          <App />
          <Footer />
        </Router>
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);
