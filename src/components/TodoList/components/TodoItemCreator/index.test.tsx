import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { RecoilObserver } from "tests";
import { TodoItemCreator } from "./index";
import { todoListState } from "../../store";

describe("TodoItemCreator", () => {
  const onChange = jest.fn();

  test("add todo list state when todo item was added", () => {
    render(
      <RecoilRoot>
        <RecoilObserver node={todoListState} onChange={onChange} />
        <TodoItemCreator />
      </RecoilRoot>
    );

    const textbox = screen.getByRole("textbox");
    const submit = screen.getByRole("button");

    fireEvent.change(textbox, { target: { value: "Sample" } });
    fireEvent.click(submit);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenNthCalledWith(1, []);
    expect(onChange).toHaveBeenNthCalledWith(2, [
      {
        id: 1,
        label: "Sample",
        isDone: false,
      },
    ]);
  });
});
