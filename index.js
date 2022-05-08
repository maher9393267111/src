import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import theme from "./theme";
import store from "./redux/store";
import { Provider } from "react-redux";
import "swiper/css/bundle";  // import css bundle for work swiper slider
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/provider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // theme={theme}
  <React.StrictMode>

    <Router>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
