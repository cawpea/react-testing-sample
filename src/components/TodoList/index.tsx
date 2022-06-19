import { FC } from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./store";
import { TodoItemCreator } from "./components/TodoItemCreator";
import { TodoItem } from "./components/TodoItem";
import styles from "./index.module.css";

export const TodoList: FC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className={styles.TodoList}>
      <h1>Todo List</h1>
      <TodoItemCreator />
      <ul className={styles.TodoListItems}>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </ul>
    </div>
  );
};
