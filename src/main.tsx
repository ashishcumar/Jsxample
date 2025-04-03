import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "./theme/theme.ts";

const customTheme = extendTheme(theme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallback={<h1> Error.. </h1>}>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </ErrorBoundary>
  </StrictMode>
);
