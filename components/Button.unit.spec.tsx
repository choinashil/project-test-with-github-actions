/** @jest-environment jsdom */
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Button from "./Button";

describe("Index", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });
});
