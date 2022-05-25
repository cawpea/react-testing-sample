import { FC } from "react";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export const Counter: FC<Props> = ({ value, onChange }) => (
  <div>
    <button
      type="button"
      onClick={() => onChange(value - 1)}
      aria-label="decrement"
    >
      -
    </button>
    <output>{value}</output>
    <button
      type="button"
      onClick={() => onChange(value + 1)}
      aria-label="increment"
    >
      +
    </button>
  </div>
);
