import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./index";

describe("Counter", () => {
  test("show value", () => {
    const onChange = jest.fn();
    render(<Counter value={0} onChange={onChange} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("decrement value", () => {
    const onChange = jest.fn();
    render(<Counter value={0} onChange={onChange} />);
    fireEvent.click(screen.getByLabelText("decrement"));
    expect(onChange).toBeCalledWith(-1);
  });

  test("increment value", () => {
    const onChange = jest.fn();
    render(<Counter value={0} onChange={onChange} />);
    fireEvent.click(screen.getByLabelText("increment"));
    expect(onChange).toBeCalledWith(1);
  });
});
