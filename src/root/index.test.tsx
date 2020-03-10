import React from "react";
import { render } from "@testing-library/react";
import Root from ".";

describe("<Root />", () => {
  it("should display the component", async () => {
    render(<Root />);
    expect(true).toEqual(true);
  });
});
