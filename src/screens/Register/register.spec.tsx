import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import Register from ".";

import theme from "../../global/styles/theme";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: jest.fn(),
  };
});

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Register Screen", () => {
  it("should opens category modal when user touch category button", async () => {
    const { getByTestId } = render(<Register />, {
      wrapper: Providers,
    });

    const modalCategory = getByTestId("modal-category");
    const buttonCategory = getByTestId("button-category");

    fireEvent.press(buttonCategory);

    expect(modalCategory.props.visible).toBeTruthy();
  });
});
