import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "./index";

describe("Calculator", () => {
  test("show default value", () => {
    render(<Calculator />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("add value", () => {
    render(<Calculator />);
    fireEvent.input(screen.getByLabelText("input value"), {
      target: { value: "1" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("subtract value", () => {
    render(<Calculator />);
    fireEvent.input(screen.getByLabelText("input value"), {
      target: { value: "1" },
    });
    fireEvent.click(screen.getByText("Sub"));
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("multiply value", () => {
    render(<Calculator value={5} />);
    fireEvent.input(screen.getByLabelText("input value"), {
      target: { value: "3" },
    });
    fireEvent.click(screen.getByText("Multi"));
    expect(screen.getByText("15")).toBeInTheDocument();
  });

  test("divide value", () => {
    render(<Calculator value={10} />);
    fireEvent.input(screen.getByLabelText("input value"), {
      target: { value: "2" },
    });
    fireEvent.click(screen.getByText("Div"));
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
