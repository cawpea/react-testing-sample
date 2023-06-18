import { RecoilRoot } from "recoil";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useTodoList } from "./index";
import { Todo } from "../types";

const defaultFetchedTodoList: Todo[] = [
  { id: 0, label: "Todo1", isDone: true },
];

jest.mock("../api", () => ({
  fetchTodoList: () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(defaultFetchedTodoList), 100);
    }),
}));

describe("useTodoList", () => {
  test("get todo list from state", async () => {
    const { result } = renderHook(() => useTodoList(), {
      wrapper: RecoilRoot,
    });
    await waitFor(() => {
      expect(result.current.todoList).toStrictEqual(defaultFetchedTodoList);
    });
  });

  test("set todo list in state", async () => {
    const { result } = renderHook(() => useTodoList(), {
      wrapper: RecoilRoot,
    });
    const newTodo: Todo = {
      id: 10,
      label: "Todo1",
      isDone: false,
    };

    expect(result.current.todoList).toStrictEqual(defaultFetchedTodoList);

    act(() => {
      result.current.setTodoList([newTodo, ...result.current.todoList]);
    });

    expect(result.current.todoList).toStrictEqual([
      newTodo,
      ...defaultFetchedTodoList,
    ]);
  });
});
