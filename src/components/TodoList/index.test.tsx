import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { RecoilObserver } from "tests";
import { TodoList } from "./index";
import { todoListState } from "./store";
import { Todo } from "./types";
import userEvent from "@testing-library/user-event";

const mockTodoList: Todo[] = [
  { id: 0, label: "Todo1", isDone: true },
  { id: 1, label: "Todo2", isDone: false },
];

jest.mock("./api", () => ({
  fetchTodoList: () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          resolve([
            { id: 0, label: "Todo1", isDone: true },
            { id: 1, label: "Todo2", isDone: false },
          ]),
        100
      );
    }),
}));

describe("TodoList", () => {
  it("show fetched todo list", async () => {
    render(
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    );

    mockTodoList.forEach(async (todo) => {
      expect(await screen.findByText(todo.label)).toBeVisible();
    });
  });

  describe("when todo was filtered", () => {
    beforeEach(async () => {
      // eslint-disable-next-line
      render(
        <RecoilRoot>
          <TodoList />
        </RecoilRoot>
      );

      await screen.findByText("Todo1");

      userEvent.type(screen.getByLabelText("Search Todo"), "1");
    });

    it("show filtered todo", () => {
      expect(screen.getByText("Todo1")).toBeVisible();
      expect(screen.queryByText("Todo2")).not.toBeInTheDocument();
    });
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

      userEvent.type(screen.getByLabelText("Input name of Todo"), "Todo3");
      userEvent.click(screen.getByRole("button"));
    });

    it("show new todo", () => {
      expect(screen.getByText("Todo3")).toBeVisible();
    });

    it("add new todo in recoil state", async () => {
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenNthCalledWith(1, mockTodoList);
      expect(onChange).toHaveBeenNthCalledWith(2, [
        {
          id: 2,
          label: "Todo3",
          isDone: false,
        },
        ...mockTodoList,
      ]);
    });
  });
});
