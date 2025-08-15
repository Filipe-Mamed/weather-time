import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import { GlobalStyledWithImage } from "./shared/components";
import { BackgroundProvider } from "./shared/contexts";
import App from "./app/App.tsx";
// import { system } from "./shared/styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BackgroundProvider>
        <GlobalStyledWithImage>
          <App />
        </GlobalStyledWithImage>
      </BackgroundProvider>
    </Provider>
  </StrictMode>
);
