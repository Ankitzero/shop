import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./state/store";

// import ReactGA from 'react-ga';
// ReactGA.initialize('G-8W242QMKEK');
// ReactGA.pageview(window.location.pathname + window.location.search);
const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-8W242QMKEK');
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
   <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-8W242QMKEK"
    />
    <script>{injectGA()}</script>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
