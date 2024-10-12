import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  test("renders the Input component", () => {
    render(<Input defaultValue="tinput" onChange={(value) => console.log(value)}/>)
  });
});