export const theme = {
  colors: {
    bg: {
      light: "#f6f7f9",
      dark: "#23272f",
    },
    text: {
      light: "#23272f",
      dark: "#f8f9fa",
    },
    accent: {
      light: "#087ea4",
      dark: "#149eca",
    },
    codeBg: {
      dark: "#e5f6ff",
      light: "#1e293b",
    },
    codeText: {
      light: "#393a34",
      dark: "#e5e7eb",
    },
    border: {
      light: "#e5e7eb",
      dark: "#374151",
    },
    highlight: {
      light: "#f8f9fa",
      dark: "#2d3748",
    },

    gradients: {
      blue: "linear-gradient(90deg, #087ea4 0%, #149eca 100%)",
      subtleDark: "linear-gradient(to bottom right, #23272f 0%, #1a1d23 100%)",
    },
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  fonts: {
    heading: "'Inter', -apple-system, sans-serif",
    body: "'Inter', -apple-system, sans-serif",
    mono: "'SF Mono', 'Menlo', monospace",
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "md",
      },
      variants: {
        react: {
          bg: "accent",
          color: "black",
          _hover: {
            bg: { light: "#149eca", dark: "#7dd3fc" },
            transform: "translateY(-1px)",
          },
        },
      },
    },
    Code: {
      baseStyle: {
        fontFamily: "mono",
        px: 2,
        py: 1,
        borderRadius: "md",
        bg: "codeBg",
        color: "codeText",
      },
    },
  },

  layerStyles: {
    card: {
      bg: "bg",
      boxShadow: { light: "md", dark: "dark-lg" },
      p: 6,
      borderRadius: "xl",
      borderWidth: "1px",
      borderColor: "border",
    },
    codeBlock: {
      bg: "codeBg",
      color: "codeText",
      // p: 4,
      borderRadius: "lg",
      fontFamily: "SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      fontSize: { base: "xs", md: "sm" },
      overflowX: "auto",
      // maxHeight: "500px",
      position: "relative",
      borderWidth: "1px",
      borderColor: "border",
      boxShadow: { light: "sm", dark: "dark-md" },
      _hover: {
        boxShadow: { light: "md", dark: "dark-lg" },
      },
      // Line numbers
      "& pre": {
        counterReset: "line",
        padding: "0 2em",
      },

      "& .keyword": { color: { light: "#CF222E", dark: "#FF7B72" } },
      "& .function": { color: { light: "#8250DF", dark: "#D2A8FF" } },
      "& .string": { color: { light: "#0A3069", dark: "#A5D6FF" } },
      "& .comment": { 
        color: { light: "#656D76", dark: "#8B949E" },
        fontStyle: "italic" 
      },
   
    },
  },
};
