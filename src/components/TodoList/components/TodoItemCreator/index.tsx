import { FC, useState } from "react";
import { Todo } from "components/TodoList/types";
import styles from "./index.module.css";

type Props = {
  onCreated: (todoItem: Todo) => void;
};

const id = 0;
const getId = () => id + 1;

export const TodoItemCreator: FC<Props> = ({ onCreated }) => {
  const [value, setValue] = useState<string>("");

  const addItem = () => {
    onCreated({
      id: getId(),
      label: value,
      isDone: false,
    });
    setValue("");
  };

  return (
    <div className={styles.TodoItemCreator}>
      <input
        aria-label="input name of todo"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};
