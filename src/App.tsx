import { createTheme, ThemeProvider } from "@mui/material/styles";
import { primaryBlue } from "./common/colors";
import Navbar from "./common/components/Navbar";
import RoomsDashboard from "./features/rooms/pages/RoomsDashboard";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryBlue,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <RoomsDashboard />
    </ThemeProvider>
  );
}

export default App;
