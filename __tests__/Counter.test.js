import { createElement } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

function renderCounter() {
  return render(createElement(Counter));
}

describe("Counter", () => {
  it("starts at 0", () => {
    renderCounter();

    expect(screen.getByTestId("count-value")).toHaveTextContent("0");
    expect(screen.getByRole("button", { name: /decrement/i })).toBeDisabled();
  });

  it("increments the count", () => {
    renderCounter();

    fireEvent.click(screen.getByRole("button", { name: /increment/i }));

    expect(screen.getByTestId("count-value")).toHaveTextContent("1");
  });

  it("decrements back to 0 after incrementing", () => {
    renderCounter();

    fireEvent.click(screen.getByRole("button", { name: /increment/i }));
    fireEvent.click(screen.getByRole("button", { name: /decrement/i }));

    expect(screen.getByTestId("count-value")).toHaveTextContent("0");
  });

  it("prevents the count from going negative", () => {
    renderCounter();

    fireEvent.click(screen.getByRole("button", { name: /decrement/i }));

    expect(screen.getByTestId("count-value")).toHaveTextContent("0");
  });

  it("clears the count back to 0", () => {
    renderCounter();

    fireEvent.click(screen.getByRole("button", { name: /increment/i }));
    fireEvent.click(screen.getByRole("button", { name: /increment/i }));
    fireEvent.click(screen.getByRole("button", { name: /clear/i }));

    expect(screen.getByTestId("count-value")).toHaveTextContent("0");
  });
});
