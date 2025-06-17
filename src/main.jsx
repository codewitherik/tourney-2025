import './assets/css/index.css';
import './assets/css/variables.css';
import './assets/css/base.css';
import './assets/css/typography.css';
import './assets/css/layout.css';
import './assets/css/animations.css';
import './assets/css/components.css';
import './assets/scss/main.scss';
import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
