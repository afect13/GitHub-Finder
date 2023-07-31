import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Title from "../Title";

describe("Title component", () => {
  it("Корректный текст", () => {
    const text = "Hello, World!";
    render(<Title text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("Проверка CSS классов", () => {
    const text = "Hello, World!";
    render(<Title text={text} />);
    const h1Element = screen.getByRole("heading");
    expect(h1Element).toHaveClass("font-bold");
    expect(h1Element).toHaveClass("text-5xl");
    expect(h1Element).toHaveClass("text-zinc-700");
  });
});
