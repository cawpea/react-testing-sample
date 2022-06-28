import { RecoilRoot } from "recoil";
import { renderHook, waitFor } from "@testing-library/react";
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
});
