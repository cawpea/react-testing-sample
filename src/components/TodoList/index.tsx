import { FC } from "react";
import { TodoItem, TodoFilter, TodoItemCreator } from "./components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState, filteredTodoListState } from "./store";
import { Todo } from "./types";

export const TodoList: FC = () => {
  const setTodoList = useSetRecoilState(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  const addItem = (todoItem: Todo) => {
    setTodoList([todoItem, ...todoList]);
  };

  return (
    <section className="max-w-2xl mx-auto">
      <header className="py-4 text-left">
        <h1 className="text-3xl font-bold">Todo List</h1>
      </header>
      <TodoItemCreator onSubmit={addItem} />
      <TodoFilter />
      <ul className="divide-y">
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </ul>
    </section>
  );
};
