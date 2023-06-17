import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { RecoilObserver } from "tests";
import { TodoList } from "./index";
import { todoListState } from "./store";
import { Todo } from "./types";

const defaultFetchedTodoList: Todo[] = [
  { id: 0, label: "Todo1", isDone: true },
  { id: 1, label: "Todo2", isDone: false },
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

  describe("when todo item was added", () => {
    const onChange = jest.fn();

    beforeEach(async () => {
      // eslint-disable-next-line
      render(
        <RecoilRoot>
          <RecoilObserver node={todoListState} onChange={onChange} />
          <TodoList />
        </RecoilRoot>
      );

      await screen.findByText("Todo1");

      fireEvent.change(screen.getByLabelText("input name of todo"), {
        target: { value: "Todo3" },
      });
      fireEvent.click(screen.getByRole("button"));
    });

    it("show new todo", () => {
      expect(screen.getByText("Todo1")).toBeInTheDocument();
      expect(screen.getByText("Todo2")).toBeInTheDocument();
      expect(screen.getByText("Todo3")).toBeInTheDocument();
    });

    it("add new todo in recoil state", async () => {
      expect(onChange).toHaveBeenCalledTimes(3);
      expect(onChange).toHaveBeenNthCalledWith(1, []);
      expect(onChange).toHaveBeenNthCalledWith(2, defaultFetchedTodoList);
      expect(onChange).toHaveBeenNthCalledWith(3, [
        {
          id: 1,
          label: "Todo3",
          isDone: false,
        },
        ...defaultFetchedTodoList,
      ]);
    });
  });
});
