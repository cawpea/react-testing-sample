import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { RecoilObserver } from "tests";
import { TodoList } from "./index";
import { todoListState } from "./store";
import { Todo } from "./types";

const defaultFetchedTodoList: Todo[] = [
  { id: 0, label: "Todo1", isDone: true },
];

jest.mock("./api", () => ({
  fetchTodoList: () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(defaultFetchedTodoList), 100);
    }),
}));

describe("TodoList", () => {
  test("show fetched todo list", async () => {
    render(
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    );

    expect(await screen.findByText("Todo1")).toBeInTheDocument();
  });

  test("add todo list state when todo item was added", async () => {
    const onChange = jest.fn();
    render(
      <RecoilRoot>
        <RecoilObserver node={todoListState} onChange={onChange} />
        <TodoList />
      </RecoilRoot>
    );

    await screen.findByText("Todo1");

    fireEvent.change(screen.getByLabelText("input name of todo"), {
      target: { value: "Todo2" },
    });
    fireEvent.click(screen.getByRole("button"));

    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toHaveBeenNthCalledWith(1, []);
    expect(onChange).toHaveBeenNthCalledWith(2, defaultFetchedTodoList);
    expect(onChange).toHaveBeenNthCalledWith(3, [
      {
        id: 1,
        label: "Todo2",
        isDone: false,
      },
      ...defaultFetchedTodoList,
    ]);
  });
});
