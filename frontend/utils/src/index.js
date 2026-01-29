import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import TeddyAssistant from './components/assistant/TeddyAssistant';
import { TeddyProvider, useTeddy } from "./context/TeddyContext";
import { useUX, UXProvider } from "./context/UXContext";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { ThemeController } from "./theme/themeController";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UXProvider>
      <TeddyProvider>
        <AuthProvider>
          <ThemeController>
            <TeddyAssistant />
            <App />
          </ThemeController>
        </AuthProvider>
      </TeddyProvider>
    </UXProvider>
  </BrowserRouter>

);
