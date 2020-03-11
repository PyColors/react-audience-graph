import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    background: {
      default: "#fafafa"
    },
    primary: {
      main: "#111"
    },
    secondary: {
      main: "#ffff07"
    }
  },
  typography: {
    fontFamily: [
      "Comfortaa",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".MuiTab-root": {
          textTransform: "inherit"
        },
        "html, body": {
          height: "100%",
          margin: "0"
        }
      }
    }
  }
});
