import { FC, useState, FormEventHandler } from "react";
import { useRecoilValue } from "recoil";
import { Todo } from "components/TodoList/types";
import { todoListState } from "components/TodoList/store";

type Props = {
  onSubmit: (todoItem: Todo) => void;
};

export const TodoItemCreator: FC<Props> = ({ onSubmit }) => {
  const todoList = useRecoilValue(todoListState);
  const [value, setValue] = useState<string>("");

  const addItem: FormEventHandler = (e) => {
    const maxId = Math.max(...todoList.map((todo) => todo.id));
    onSubmit({
      id: maxId + 1,
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
        type="text"
        value={value}
        aria-label="Input name of todo"
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
