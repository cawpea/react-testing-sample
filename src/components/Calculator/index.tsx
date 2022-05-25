import { FC, useState } from "react";
import { useCalculator } from "../../hooks/calculator";

type Props = {
  value?: number;
};

export const Calculator: FC<Props> = ({ value = 0 }) => {
  const [newValue, setNewValue] = useState<number>(0);
  const { currentValue, add, sub, multi, div } = useCalculator(value);

  return (
    <section>
      <h1>Calculator</h1>
      <output>{currentValue}</output>
      <fieldset>
        <input
          aria-label="input value"
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(Number(e.target.value))}
        />
        <button type="button" onClick={() => add(newValue)}>
          Add
        </button>
        <button type="button" onClick={() => sub(newValue)}>
          Sub
        </button>
        <button type="button" onClick={() => multi(newValue)}>
          Multi
        </button>
        <button type="button" onClick={() => div(newValue)}>
          Div
        </button>
      </fieldset>
    </section>
  );
};
