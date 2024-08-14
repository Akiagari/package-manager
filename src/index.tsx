import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";

const rootHtml = document.getElementById("root");

if (rootHtml) {
  const root = ReactDOM.createRoot(rootHtml);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
