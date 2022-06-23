export type Todo = {
  id: number;
  label: string;
  isDone: boolean;
};

export type PlaceholderTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
