import {
  Preflight,
  ThemeProvider,
  defaultTheme,
} from "@xstyled/styled-components";
import { Button } from "./components/Button";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Preflight />

      <Button bg="red-500" p={2}>
        Learn React
      </Button>
    </ThemeProvider>
  );
}

export default App;
