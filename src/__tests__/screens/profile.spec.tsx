import React from "react";
import { render } from "@testing-library/react-native";

import Profile from "../../screens/Profile";

describe("Profile", () => {
  it("should be placeholder correctly in user name input", () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText("Nome");

    expect(inputName).toBeTruthy();
  });

  it("should user data be loaded", () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId("input-name");
    const inputSurname = getByTestId("input-surname");

    expect(inputName.props.value).toEqual("Pedro");
    expect(inputSurname.props.value).toEqual("Lopes");
  });

  it("should title exist correctly", () => {
    const { getByTestId } = render(<Profile />);

    const textTitle = getByTestId("text-title");

    expect(textTitle.props.children).toContain("Perfil");
  });
});
