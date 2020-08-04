import { createMuiTheme } from "@material-ui/core/styles";
import { red, blue } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "rgb(243,244,249)",
    },
    typography: {
      fontFamily: "Poppins', sans-serif",
      fontSize: 1,
    },
  },
});

export default theme;
