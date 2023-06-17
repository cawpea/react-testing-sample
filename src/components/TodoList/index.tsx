import { FC } from "react";
import { Todo } from "components/TodoList/types";
import { useTodoList } from "./hooks";
import { TodoFilter, TodoItem, TodoItemCreator } from "./components";

export const TodoList: FC = () => {
  const { todoList, setTodoList } = useTodoList();

  const addItem = (todoItem: Todo) => {
    setTodoList([todoItem, ...todoList]);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="py-4 text-left">
        <h1 className="text-3xl font-bold">Todo List</h1>
      </div>
      <TodoItemCreator onSubmit={addItem} />
      <TodoFilter />
      <ul className="divide-y">
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </ul>
    </div>
  );
};
