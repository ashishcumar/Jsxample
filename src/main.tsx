import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "./theme/theme.ts";
import { ErrorFallback } from "./componentsInternal/ErrorFallback.tsx";

const customTheme = extendTheme(theme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorFallback
            error={error}
            resetErrorBoundary={resetErrorBoundary}
          />
        )}
      >
        <App />
      </ErrorBoundary>
    </ChakraProvider>
  </StrictMode>
);
