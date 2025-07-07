import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BackgroundProvider } from "./shared/contexts/";
import { GlobalStyledWithImage } from "./shared/components";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BackgroundProvider>
      <GlobalStyledWithImage />
      <App />
    </BackgroundProvider>
  </StrictMode>
);
