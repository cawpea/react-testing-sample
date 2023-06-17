import { FC, useState } from "react";
import { Todo } from "components/TodoList/types";
import { FormEventHandler } from "react";

type Props = {
  onSubmit: (todoItem: Todo) => void;
};

const id = 0;
const getId = () => id + 1;

export const TodoItemCreator: FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("");

  const addItem: FormEventHandler = (e) => {
    onSubmit({
      id: getId(),
      label: value,
      isDone: false,
    });
    setValue("");
    e.preventDefault();
  };

  return (
    <form className="flex gap-4 bg-gray-100 p-4 rounded-md" onSubmit={addItem}>
      <input
        className="w-full h-10 border rounded-md p-4"
        aria-label="input name of todo"
        type="text"
        value={value}
        placeholder="Input name of todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-400 active:bg-blue-300 text-white font-bold px-4 rounded-md"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
