import React from "react";
import { render } from "@testing-library/react-native";

import { AuthProvider, useAuth } from "./auth";

describe("Auth Hook", () => {
  it("should be able to sign in with existing Google account", () => {
    const {} = useAuth();
  });
});
