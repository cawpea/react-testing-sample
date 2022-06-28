import { FC } from "react";
import { useRecoilValue } from "recoil";
import { Todo } from "components/TodoList/types";
import { todoQueryState } from "./store";
import { useTodoList } from "./hooks";
import { TodoFilter, TodoItem, TodoItemCreator } from "./components";
import styles from "./index.module.css";

export const TodoList: FC = () => {
  const query = useRecoilValue(todoQueryState);
  const { todoList, setTodoList } = useTodoList({
    query,
  });

  const addItem = (todoItem: Todo) => {
    setTodoList([...todoList, todoItem]);
  };

  return (
    <div className={styles.TodoList}>
      <h1>Todo List</h1>
      <div className={styles.TodoItemCreator}>
        <TodoItemCreator onCreated={addItem} />
      </div>
      <div className={styles.TodoFilter}>
        <TodoFilter />
      </div>
      <ul className={styles.TodoListItems}>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </ul>
    </div>
  );
};
