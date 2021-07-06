import {
  Preflight,
  ThemeProvider,
  defaultTheme,
} from "@xstyled/styled-components";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

const renderProviders = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Preflight />

      <Button bg="red-500" p={2}>
        Learn React
      </Button>
    </ThemeProvider>
  );
};

test("render Button", () => {
  render(renderProviders());

  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});
