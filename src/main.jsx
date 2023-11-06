import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css'
import {MultipleContextProvider} from './context/MultipleContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MultipleContextProvider>
      <App />
    </MultipleContextProvider>
  </React.StrictMode>
);
