import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("In development text is visible", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/In development/i);
  expect(textElement).toBeInTheDocument();
});
